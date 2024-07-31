import { useRouter } from "next/router";
import { client } from "@/lib/contenful/client";
import Head from "next/head";
import Nav from "@/components/Nav";
import RichText from "@/components/RichText";
import { parseISOString } from "@/lib/utils";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function Insight({ insightsArr }) {
  const { date, title, author, sectors, introduction, slug, coverImage } =
    insightsArr?.fields || {};
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-[64px]">
      <Head>
        <title>{`${title || ""} | Gin+Tonic`}</title>
        <meta name="description" content={introduction || ""} key="desc" />
        <meta property="og:title" content={title || ""} />
        <meta property="og:description" content={introduction || ""} />
        <meta property="og:image" content={coverImage?.fields.file.url || ""} />
      </Head>
      <Nav bg="black" />
      <main className="max-h-max">
        <section>
          <div className="min-w-full h-[140px] bg-white"></div>
        </section>
      </main>
      <section className="bg-white text-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto pt-8 sm:pt-16 md:pt-24">
          <h1 className="text-[36px] sm:text-[42px] leading-[54px] md:text-[48px] font-medium pb-8 md:pb-32 w-full md:w-[60%]">
            {title}
          </h1>

          <header className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col font-medium text-[16px] sm:text-[18px] text-gray-400">
              <h2 className="justify-start">Post By</h2>
              <p className="text-gray-700">{author}</p>
              <span className="pb-[12px]"></span>
              <h2 className="justify-start">Category</h2>
              {sectors?.map((sector, i) => (
                <p key={i} className="text-gray-700">
                  {sector}
                </p>
              ))}
              <span className="pb-[12px]"></span>
              <h2 className="justify-start">Date</h2>
              <p className="text-gray-700">{parseISOString(date)}</p>
              <span className="pb-[12px]"></span>
              <div className="flex flex-row gap-x-2">
                <FacebookShareButton
                  url={`https://gintplustonic.co/insights/${slug}`}
                  quote={title}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`https://gintplustonic.co/insights/${slug}`}
                  title={title}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={`https://gintplustonic.co/insights/${slug}`}
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
              <span className="pb-[12px]"></span>
            </div>
            <div>
              <h1 className="font-regular text-[22px] sm:text-[24px] md:text-[28px] md:leading-[34px] pb-4">
                {introduction}
              </h1>
              <div className="pt-8 md:pt-24 px-0">
                <RichText caseStudy={insightsArr} />
              </div>
            </div>
          </header>
        </div>
      </section>
      <section className="bg-white text-black left-0 top-0 w-full origin-top overflow-hidden"></section>
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const cfClient = preview ? previewClient : client;
  const { slug } = params;

  try {
    const response = await cfClient.getEntries({
      content_type: "insights",
      "fields.slug": slug,
    });

    if (!response?.items?.length) {
      return {
        redirect: {
          destination: "/insights",
          permanent: false,
        },
      };
    }

    return {
      props: {
        insightsArr: response?.items?.[0],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const response = await client.getEntries({ content_type: "insights" });
    const paths = response.items.map((item) => ({
      params: { slug: item.fields.slug },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error("Error fetching paths from Contentful:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
