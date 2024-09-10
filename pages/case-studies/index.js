import { useEffect, useState } from "react";
import { client } from "@/lib/contenful/client";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Nav from "@/components/Nav";
import CaseCardWide from "@/components/CaseCardWide";
import FilterComponent from "@/components/FilterComponent";

function extractFields(posts) {
  return posts.map((post) => post.fields);
}

export default function CaseStudies({ caseStudies }) {
  const [cases, setCases] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);

  useEffect(() => {
    // Initialise state
    setCases(caseStudies);
    setFilteredCases(caseStudies);
  }, [caseStudies]); // Add caseStudies as a dependency

  return (
    <>
      <Head>
        <title>{`Case Studies | Gin+Tonic`}</title>
        <meta
          name="description"
          content={
            "We raise the bar, stir the senses, and create unforgettable brand experiences that go beyond the ordinary."
          }
          key="desc"
        />
        <meta property="og:title" content={`Case Studies | Gin+Tonic`} />
        <meta
          property="og:description"
          content={
            "We raise the bar, stir the senses, and create unforgettable brand experiences that go beyond the ordinary."
          }
        />
        {/* <meta property="og:image" content={coverImage?.fields.file.url || ""} /> */}
      </Head>
      <Nav bg="black" />
      <div className="bg-white w-full h-[176px]"></div>
      <main className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black grid gap-y-8 sm:gap-y-12 md:gap-y-16 pb-16">
          <div className="grid gap-4 md:grid-cols-4">
            <h2 className="font-medium text-[26px] md:text-[28px]">
              Case Studies
            </h2>
            <div className="md:col-span-3 text-[20px] leading-snug">
              <p className="pt-[10px] pb-4 max-w-[80%] sm:max-w-[60%]">
                We raise the bar, stir the senses, and create unforgettable
                brand experiences that go beyond the ordinary.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black">
          <FilterComponent
            cases={cases}
            setCases={setCases}
            filteredCases={filteredCases}
            setFilteredCases={setFilteredCases}
          />
        </div>
      </section>
      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <AnimatePresence>
          <motion.div className="max-w-screen-xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 py-8 md:py-[88px]">
            {filteredCases.map((item, i) => (
              <CaseCardWide key={item.fields.slug} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "caseStudy" });

  return {
    props: {
      caseStudies: response.items,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};
