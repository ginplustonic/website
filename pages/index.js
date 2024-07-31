import { client } from "@/lib/contenful/client";
import Head from "next/head";
import Nav from "@/components/Nav";
import Card from "@/components/Card";
import CaseCard from "@/components/CaseCard";
import Button from "@/components/Button";
import Accordian from "@/components/Accordian";
import InsightPanel from "@/components/InsightPanel";

const cardInfo = [
  {
    id: 0,
    number: "01",
    title: "Regional Team",
    content:
      "Leverage our global team of skilled professionals in content strategy, design, digital marketing, and performance analytics.",
  },
  {
    id: 1,
    number: "02",
    title: "Client Relationships",
    content:
      "Leverage our global team of skilled professionals in content strategy, design, digital marketing, and performance analytics.",
  },
  {
    id: 2,
    number: "03",
    title: "Strategic Fit",
    content:
      "Leverage our global team of skilled professionals in content strategy, design, digital marketing, and performance analytics.",
  },
  {
    id: 3,
    number: "04",
    title: "Tailored Engagement",
    content:
      "Leverage our global team of skilled professionals in content strategy, design, digital marketing, and performance analytics.",
  },
];

export default function Home({ caseStudies, insights }) {
  return (
    <>
      <Head>
        <title>Gin+Tonic - Branding & Digital Marketing Agency</title>
      </Head>
      <Nav bg="white" />
      <main className="max-h-max">
        <section>
          {/* Background Reel */}
          <video
            playsInline
            muted
            autoPlay
            loop
            preload="auto"
            alt="background-video"
            className="z-0 min-w-full h-[280px] md:h-[620px] object-cover"
          >
            <source src="videos/reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Heading */}
          <div className="min-w-full bg-white">
            <h1 className="max-w-screen-lg mx-auto py-16 md:py-[88px] px-8 md:px-20 font-light text-center text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px]">
              An international{" "}
              <span className="underline underline-offset-4 font-medium">
                branding & digital marketing agency
              </span>{" "}
              committed to your success. We design thoughtful, scalable
              solutions that engage and delight at every opportunity.
            </h1>
          </div>
        </section>
      </main>

      <section className="bg-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        {/* Top Heading - Flex Container */}
        <div className="max-w-screen-xl mx-auto text-white grid lg:grid-cols-4 gap-4 py-16 lg:pt-[88px] lg:pb-[48px]">
          <h2 className="justify-start text-[26px] md:text-[28px] font-regular">
            Why Choose Us?
          </h2>
          <div className="lg:col-span-2 text-[20px] font-light leading-snug pt-[12px]">
            Focus on what you love — we’ll take care of the rest.
          </div>
          <div className="lg:col-start-4 lg:flex md:justify-end items-start pt-4 lg:pt-0">
            <Button label={"Our Approach"} href={"/about"} />
          </div>
        </div>
        {/* Card Comopnent - Grid Container */}
        <div className="max-w-screen-xl mx-auto pb-16 md:pb-[88px]">
          <div className="grid lg:grid-cols-8 gap-4 mb-4">
            <div className="lg:col-start-3 lg:col-span-3">
              <Card
                number={"01"}
                title={"Global Team"}
                content={
                  "Tap into our global team of skilled professionals in strategy, design, digital marketing, and social media."
                }
              />
            </div>
            <div className="lg:col-start-6 lg:col-span-3">
              <Card
                number={"02"}
                title={"Client Relationships"}
                content={
                  "Your needs come first. We value mutual respect, honesty, and transparent communication, keeping you well-informed and confident throughout the process."
                }
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-8 gap-4">
            <div className="lg:col-start-3 lg:col-span-3">
              <Card
                number={"03"}
                title={"Strategic Fit"}
                content={
                  "We'll assemble the ideal creative team for your project, with a dedicated liaison who understands your business objectives."
                }
              />
            </div>
            <div className="lg:col-start-6 lg:col-span-3">
              <Card
                number={"04"}
                title={"Tailored Engagement"}
                content={
                  "Our flexible engagement models are designed to adapt to your organisation's needs, whether you're in a B2B or B2C environment."
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cases - Grid Container */}
      <section className="left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black flex flex-col md:flex-row justify-between gap-4 py-16 md:pt-[88px]">
          <h2 className="font-medium text-[26px] md:text-[28px] justify-start">
            Featured Projects
          </h2>
          <div className="items-start">
            <Button label={"Explore Our Work"} href={"/case-studies"} />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] pb-[48px] lg:pb-[88px]">
          {caseStudies.map((item, i) => (
            <CaseCard key={item.fields.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-[#A3E044] text-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto py-16 md:py-[88px]">
          <header>
            <h2 className="font-medium text-[26px] md:text-[28px] justify-start">
              Client Reviews
            </h2>
            <h3 className="font-regular pt-6 pb-4 text-[18px]">
              We’ve built long-lasting partnerships with ambitious brands across
              the region:
            </h3>
          </header>
          <Accordian />
        </div>
      </section>

      <section className="bg-white text-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-[18px] flex flex-col justify-between gap-4 md:flex-row pt-16 md:pt-[88px]">
          <div>
            <h2 className="font-medium text-[28px] justify-start">Insights</h2>
            <h3 className="font-regular pt-6 pb-4 text-[18px]">
              News, interviews, opinion pieces and brand insights. Get the
              latest from Gin+ Tonic.
            </h3>
          </div>
          <div className="pb-4 lg:pb-0 items-start">
            <Button label={"Read More Articles"} href={"/insights"} />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto pb-[48px] lg:pb-[88px]">
          {insights.map((insight) => (
            <InsightPanel key={insight.fields.slug} item={insight} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  // Fetch case studies
  const caseStudyResponse = await client.getEntries({
    content_type: "caseStudy",
    "fields.featured": true,
  });

  // Fetch insights
  const insightsResponse = await client.getEntries({
    content_type: "insights",
    "fields.featured": true,
  });

  return {
    props: {
      caseStudies: caseStudyResponse.items,
      insights: insightsResponse.items,
    },
    revalidate: 60,
  };
};
