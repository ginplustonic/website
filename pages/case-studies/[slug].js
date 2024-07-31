import { client } from "@/lib/contenful/client";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

import Nav from "@/components/Nav";
import RichText from "@/components/RichText";

export default function Case({ caseStudy }) {
  const {
    coverImage = null,
    title = null,
    description = null,
    introduction = null,
    slug = null,
    sectors = [],
    deliverables = [],
    location = null,
    year = null,
  } = caseStudy?.fields ?? {};

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-[64px]">
      <Head>
        <title>{`${title || ""} | Gin+Tonic`}</title>
        <meta name="description" content={description || ""} key="desc" />
        <meta property="og:title" content={title || ""} />
        <meta property="og:description" content={description || ""} />
        {/* <meta
          property="og:image"
          content={coverImage?.fields?.file.url || ""}
        /> */}
      </Head>
      <Nav bg="white" />
      {/*  Background Image */}
      <main className="max-h-max">
        <section>
          {/* Background Image */}
          <div className="min-w-full md:h-[540px] bg-gray-400">
            <Image
              priority={true}
              alt={`Cover Image for ${slug}`}
              src={`https:${coverImage?.fields?.file.url || ""}`}
              width={coverImage?.fields?.file.details.image.width || 0}
              height={coverImage?.fields?.file.details.image.height || 0}
              style={{ objectFit: "cover" }}
              className="min-w-full max-h-[540px] object-cover"
            ></Image>
            {/* Heading */}
            {/* <h1 className="relative z-0 -top-[240px] max-w-screen-lg mx-auto flex justify-center items-cente px-8 md:px-20 font-regular text-white text-center text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px]">
              Heading
            </h1> */}
          </div>
        </section>
      </main>
      {/* Headings */}
      <section className="bg-white text-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto pt-[48px] md:pt-[88px]">
          <header className="grid grid-cols-1 md:grid-cols-2">
            {/* List Content */}
            <div className="flex flex-col font-medium text-[18px] text-gray-400">
              <h2 className="justify-start">Client</h2>
              <p className="text-gray-700">{title}</p>
              <span className="pb-[12px]"></span>
              <h2 className="justify-start">Industry</h2>
              {sectors.map((sector, i) => (
                <p key={i} className="text-gray-700">
                  {sector}
                </p>
              ))}
              <span className="pb-[12px]"></span>
              <h2 className="justify-start">Location</h2>
              <p className="text-gray-700">{location}</p>
              <span className="pb-[12px]"></span>
              <h2 className="justify-start">Year</h2>
              <p className="text-gray-700">{year}</p>
              <span className="pb-[12px]"></span>

              <h2 className="justify-start">Deliverables</h2>
              {/** Render a list of deliverables <ul> */}
              {deliverables.map((deliverable, i) => (
                <p key={i} className="text-gray-700 leading-[24px]">
                  {deliverable}
                </p>
              ))}
              <span className="pb-4"></span>
            </div>
            {/* Text Content */}
            <div className="pt-[48px] md:pt-[0px]">
              <h1 className="font-medium text-[26px] md:text-[28px] pb-8">
                {description}
              </h1>
              <p className="font-regular text-[24px] leading-[32px]">
                {introduction}
              </p>
            </div>
          </header>
        </div>
      </section>
      {/* CMS Content */}
      <section className="bg-white text-black left-0 top-0 w-full origin-top overflow-hidden">
        <div className="pt-[64px]">
          <RichText caseStudy={caseStudy || {}} />
        </div>
      </section>
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const response = await client.getEntries({
//     content_type: "caseStudy",
//     "fields.slug": slug,
//   });

//   if (!response?.items?.length) {
//     return {
//       redirect: {
//         destination: "/case-studies",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       caseStudy: response?.items?.[0] || null,
//       revalidate: 60,
//     },
//   };
// }

export async function getStaticProps({ params, preview = false }) {
  const cfClient = preview ? previewClient : client;
  const { slug } = params;

  try {
    const response = await cfClient.getEntries({
      content_type: "caseStudy",
      "fields.slug": slug,
    });

    if (!response?.items?.length) {
      return {
        redirect: {
          destination: "/case-studies",
          permanent: false,
        },
      };
    }

    return {
      props: {
        caseStudy: response?.items?.[0] || null,
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

// export async function getStaticPaths() {
//   const response = await client.getEntries({ content_type: "caseStudy" });
//   const paths = response.items.map((item) => ({
//     params: { slug: item.fields.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getStaticPaths() {
  try {
    const response = await client.getEntries({
      content_type: "caseStudy",
    });
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
