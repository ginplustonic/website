import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";

import SingleColumn from "./SingleColumn";
import TwoColumnLayout from "./TwoColumnLayout";
import FullImage from "./FullImage";

const options = {
  preserveWhitespace: true,
  renderMark: {
    [MARKS.CODE]: (text) => (
      <pre>
        <code>{text}</code>
      </pre>
    ),
    [MARKS.BOLD]: (text) => <span className="font-medium">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <SingleColumn>
        <p className="text-black text-[20px] leading-[28px] pb-12">
          {children}
        </p>
      </SingleColumn>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <SingleColumn>
        <h5 className="border-l-2 px-[40px] pb-0 font-medium border-black leading-[48px] text-[42px]">
          {children}
        </h5>
      </SingleColumn>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <SingleColumn>
        <h2 className="font-light leading-[48px] text-[42px]">{children}</h2>
      </SingleColumn>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <SingleColumn>
        <h3 className="font-medium text-[20px] pb-12">{children}</h3>
      </SingleColumn>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <SingleColumn>
        <h4 className="font-medium text-[28px] pb-6">{children}</h4>
      </SingleColumn>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "caseStudy") {
        return (
          <Link href={`/case-studies/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { contentType } = node.data.target.sys;
      if (contentType.sys.id === "videoEmbed") {
        return (
          <SingleColumn>
            <iframe
              height="400"
              width="100%"
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          </SingleColumn>
        );
      } else if (contentType.sys.id === "fullImage") {
        return <FullImage node={node.data.target.fields} />;
      } else if (contentType.sys.id === "twoColumnLayout") {
        return <TwoColumnLayout node={node.data.target.fields} />;
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <SingleColumn>
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
          className="object-cover pb-[64px]"
        />
      </SingleColumn>
    ),
  },
};

export default function RichText({ caseStudy }) {
  const { content } = caseStudy.fields;
  return <>{documentToReactComponents(content, options)}</>;
}
