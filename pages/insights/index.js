import { useState, useEffect } from "react";
import { client } from "@/lib/contenful/client";
import Head from "next/head";
import Nav from "@/components/Nav";
import InsightPanelLarge from "@/components/InsightPanelLarge";
import InsightCard from "@/components/InsightCard";
import InsightsFilter from "@/components/InsightsFilter";

export default function InsightsPage({ insightsArr }) {
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);
  const [featuredInsights, setFeaturedInsights] = useState([]);

  useEffect(() => {
    setInsights(insightsArr);
    setFilteredInsights(insightsArr);
    setFeaturedInsights(
      insightsArr.filter((insight) => insight.fields.featured === true)
    );
  }, [insightsArr]);

  return (
    <>
      <Head>
        <title>{`Insights | Gin+Tonic`}</title>
        <meta
          name="description"
          content={
            "News, updates, interview, opinion pieces and brand insights. Get the latest from Gin+ Tonic."
          }
          key="desc"
        />
        <meta property="og:title" content={`Insights | Gin+Tonic`} />
        <meta
          property="og:description"
          content={
            "News, updates, interview, opinion pieces and brand insights. Get the latest from Gin+ Tonic."
          }
        />
        {/* <meta property="og:image" content={coverImage?.fields.file.url || ""} /> */}
      </Head>
      <Nav bg="black" />
      <div className="bg-white w-full h-[176px]"></div>
      <main className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black grid sm:grid-cols-4 gap-4 pb-16">
          <h2 className="flex justify-start font-medium text-[26px] md:text-[28px]">
            Insights
          </h2>
          <div className="sm:col-span-3 text-[20px] font-regular leading-snug max-w-[87%] sm:max-w-[60%]">
            <p className="pt-[10px] pb-4">
              News, updates, interview, opinion pieces and brand insights. Get
              the latest from Gin+ Tonic.
            </p>
          </div>
        </div>
      </main>

      <section className="bg-white text-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          {featuredInsights.map((insight) => (
            <InsightPanelLarge key={insight.fields.slug} item={insight} />
          ))}
        </div>
      </section>

      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black pb-8">
          <InsightsFilter
            insights={insights}
            setFilteredInsights={setFilteredInsights}
          />
        </div>
      </section>

      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-4 pb-16">
          {filteredInsights.map((item) => (
            <InsightCard key={item.fields.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "insights" });

  return {
    props: {
      insightsArr: response.items,
      revalidate: 60,
    },
  };
};
