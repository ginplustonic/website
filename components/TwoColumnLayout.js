import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import SingleColumn from "./SingleColumn";

const options = {
  preserveWhitespace: true,
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find((item) =>
          item.marks?.find((mark) => mark.type === "code")
        )
      ) {
        return (
          <pre>
            <code>{children}</code>
          </pre>
        );
      }

      return (
        <p className="text-black text-[20px] leading-[28px]">{children}</p>
      );
    },

    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className="font-medium text-[28px]">{children}</h1>;
    },

    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className="font-light leading-[50px] text-[42px]">{children}</h2>
      );
    },

    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="font-medium text-[20px] pb-12">{children}</h3>;
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.title}
          className="object-cover"
        />
      );
    },
  },
};

export default function TwoColumnLayout({ node }) {
  return (
    <SingleColumn>
      <div className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-8 md:gap-y-0 pb-[64px]">
        <div className="md:w-[50%]">
          {documentToReactComponents(node.leftContent, options)}
        </div>
        <div className="md:w-[50%]">
          {documentToReactComponents(node.rightContent, options)}
        </div>
      </div>
    </SingleColumn>
  );
}
