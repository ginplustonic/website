import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Nav from "@/components/Nav";
import ButtonBlack from "@/components/ButtonBlack";
import Card from "@/components/Card";

const expertise = {
  branding: [
    "Naming",
    "Brand Identity",
    "Brand Evolution",
    "Design Systems",
    "Print + Packaging",
    "Guidelines",
    "Campaign Creative",
    "Art Direction",
    "Motion",
    "Environmental",
  ],
  technology: [
    "Web Development",
    "eCommerce",
    "App Development",
    "CMS Integration",
    "API Integration",
    "Technical Consulting",
  ],
  digital: [
    "Website Design",
    "User Experience",
    "User Interface",
    "Digital Experiences",
    "User Journeys",
    "Prototyping",
    "Digital Marketing",
    "Search Engine Optimisation",
  ],
  strategy: [
    "Research and Insights",
    "Brand Positioning",
    "Creative Strategy",
    "Brand Audits",
    "Brand Architecture",
    "Competitive Analysis",
    "Customer Profiles",
  ],
};

// Import images
import imgWeilik from "../public/images/partners/weilik.png";
import imgMercy from "../public/images/partners/mercy.png";
import imgJackson from "../public/images/partners/jackson.png";

import Givaudan from "../public/images/logos/Givaudan.svg";
import AnsellLogo from "../public/images/logos/Ansell.svg";
import HolidayInn from "../public/images/logos/HolidayInn.svg";
import SingaporePoly from "../public/images/logos/SP.svg";
import EvoWellness from "../public/images/logos/EW.svg";
import OneMarina from "../public/images/logos/One15.svg";
import Ifema from "../public/images/logos/IFEMA.svg";
import Iskandar from "../public/images/logos/IRDA.svg";
import DigitalDistricts from "../public/images/logos/DD.svg";
import Brdb from "../public/images/logos/BRDB.svg";
import Firefit from "../public/images/logos/Firefit.svg";
import Gofit from "../public/images/logos/GoFit.svg";
import Infinity8 from "../public/images/logos/I8.svg";
import Sutl from "../public/images/logos/SUTL.svg";

const images = [
  { src: Givaudan, alt: "Givaudan" },
  { src: AnsellLogo, alt: "Ansell Logo" },
  { src: HolidayInn, alt: "Holiday Inn" },
  { src: SingaporePoly, alt: "Singapore Poly" },
  { src: EvoWellness, alt: "Evo Wellness" },
  { src: OneMarina, alt: "One Marina" },
  { src: Ifema, alt: "Ifema" },
  { src: Iskandar, alt: "Iskandar" },
  { src: DigitalDistricts, alt: "Digital Districts" },
  { src: Brdb, alt: "BRDB" },
  { src: Firefit, alt: "Firefit" },
  { src: Gofit, alt: "Gofit" },
  { src: Infinity8, alt: "Infinity8" },
  { src: Sutl, alt: "SUTL" },
];

// Duplicate images array for infinite scrolling effect
const duplicatedImages = [
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Gin+Tonic</title>
        <meta
          name="description"
          content={
            "Gin+ Tonic isn't just a name; It embodies the essence of something delightful, unforgettable, and a little mischievous."
          }
        />
        <meta property="og:title" content="About | Gin+Tonic" />
        <meta
          property="og:description"
          content={
            "Gin+ Tonic isn't just a name; It embodies the essence of something delightful, unforgettable, and a little mischievous."
          }
        />
      </Head>
      <Nav bg="black" />
      {/* Empty Box */}
      <div className="bg-white w-full h-[176px]"></div>

      {/* Main Section */}
      <main className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black grid gap-y-8 sm:gap-y-12 md:gap-y-16 pb-16">
          <div className="grid gap-4 md:grid-cols-4">
            <h2 className="font-medium text-[26px] md:text-[28px]">
              Who We Are
            </h2>
            <div className="md:col-span-3 text-[20px] leading-snug max-w-[80%]">
              <p className="pt-[10px] pb-4">
                Gin+ Tonic isn't just a name; It embodies the essence of
                something delightful, unforgettable, and a little mischievous.
              </p>
              <p>
                We exist to raise the bar, stir the senses, and craft lasting
                brand experiences that transcend the ordinary.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Card Section */}
      <section className="bg-[#A3E044] left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        {/* Top Heading - Grid Container */}
        <div className="max-w-screen-xl mx-auto text-black grid md:grid-cols-4 gap-4 pb-16 md:pb-[48px] pt-16 md:pt-[88px]">
          <h2 className="justify-start text-[26px] md:text-[28px] font-medium">
            Our Focus
          </h2>
          <div className="md:col-span-2 text-[20px] font-regular leading-snug">
            <p className="pt-[10px]">A partner who’s got you covered.</p>
          </div>
          <div className="md:col-start-4 md:flex md:justify-end items-start">
            <ButtonBlack label={"Start A Project"} href={"/contact"} />
          </div>
        </div>

        {/* Card Component - Grid Container */}
        <div className="max-w-screen-xl mx-auto pb-16 md:pb-[88px]">
          <div className="grid md:grid-cols-8 gap-4 mb-4">
            <div className="md:col-start-3 md:col-span-3">
              <Card
                number={"01"}
                title={"Authenticity"}
                content={
                  "We deep dive into your brand's unique qualities and leverage what sets it apart from competitors."
                }
              />
            </div>
            <div className="md:col-start-6 md:col-span-3">
              <Card
                number={"02"}
                title={"Personification"}
                content={
                  "We build emotional connections with your audience, making your brand relatable and memorable."
                }
              />
            </div>
          </div>
          <div className="grid md:grid-cols-8 gap-4">
            <div className="md:col-start-3 md:col-span-3">
              <Card
                number={"03"}
                title={"Consistency"}
                content={
                  "We prioritise consistent messaging and marketing efforts that boost brand recognition and trust."
                }
              />
            </div>
            <div className="md:col-start-6 md:col-span-3">
              <Card
                number={"04"}
                title={"Clarity"}
                content={
                  "We distinguish between core brand elements and those that can evolve over time, ensuring your message is clear and compelling."
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/** Expertise Section */}
      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8 pt-16 md:pt-[88px]">
        <div className="max-w-screen-xl mx-auto text-black grid sm:grid-cols-4 gap-4">
          <h2 className="justify-start font-medium text-[26px] md:text-[28px]">
            Our Expertise
          </h2>
          <div className="sm:col-span-2 text-[20px] font-regular leading-snug pb-16">
            <p className="pt-[8px]">What we can do for you.</p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto text-[18px] text-black grid md:grid-cols-8 gap-4 pb-8">
          <div className="md:col-start-3 md:col-span-3 text-[20px] pb-8">
            <h4 className="pt-4 pb-8 border-t-[1px] border-[#A3E044] font-medium">
              Branding
            </h4>
            {expertise.branding.map((item, i) => (
              <p key={i} className="text-[18px]">
                {item}
              </p>
            ))}
          </div>
          <div className="md:col-start-6 md:col-span-3 text-[20px] pb-8">
            <h4 className="pt-4 pb-8 border-t-[1px] border-[#A3E044] font-medium">
              Technology
            </h4>
            {expertise.technology.map((item, i) => (
              <p key={i} className="text-[18px]">
                {item}
              </p>
            ))}
          </div>
          <div className="md:col-start-3 md:col-span-3 text-[20px] pb-8">
            <h4 className="pt-4 pb-8 border-t-[1px] border-[#A3E044] font-medium">
              Digital
            </h4>
            {expertise.digital.map((item, i) => (
              <p key={i} className="text-[18px]">
                {item}
              </p>
            ))}
          </div>
          <div className="md:col-start-6 md:col-span-3 text-[20px] pb-8">
            <h4 className="pt-4 pb-8 border-t-[1px] border-[#A3E044] font-medium">
              Strategy
            </h4>
            {expertise.strategy.map((item, i) => (
              <p key={i} className="text-[18px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8 pt-16 md:pt-[88px]">
        <div className="max-w-screen-xl mx-auto text-black grid sm:grid-cols-4 gap-4">
          <h2 className="justify-start font-medium text-[26px] md:text-[28px]">
            Our Clients
          </h2>
          <div className="sm:col-span-2 text-[20px] pb-8">
            <p className="pt-[8px]">
              Our portfolio includes a wide array of clients, from emerging
              startups to well-established global brands. We partner with
              clients across various sectors, including food & beverage,
              healthcare, luxury goods, hospitality, retail, business, and
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Section */}
      <section className="bg-white left-0 top-0 w-full origin-top overflow-hidden pt-16 md:pt-[88px]">
        <div className="text-black flex flex-row gap-8 pb-16 md:pb-[88px] overflow-hidden space-x-16 group">
          {/* Container with infinite scroll animation */}
          <motion.div
            className="flex space-x-16"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 170,
              repeat: Infinity,
              repeatType: "loop",
            }}
            whileHover={{ scale: 1.05 }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div key={index} className="w-[144px]">
                <Image src={image.src} alt={image.alt} className="w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Partners Section */}
      <section className="bg-black text-white left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-white">
          <header className="grid sm:grid-cols-4 gap-4 py-16 md:py-[64px]">
            <h2 className="flex justify-start font-regular text-[26px] md:text-[28px]">
              The Partners
            </h2>
            <div className="sm:col-span-3 font-light text-[20px]">
              <p className="pt-[10px] pb-[88px]">
                Gin+ Tonic - Founded in Johor Bahru.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-base">
                <div>
                  <Image
                    src={imgWeilik}
                    alt="partner-1"
                    className="rounded-2xl bg-gray-300 w-full max-h-[280px] object-cover"
                  />
                  <h3 className="pt-[16px]">Hoe Wei Lik</h3>
                  <p className="text-base">Co-Founder, Managing Director</p>
                  <br />
                  <p>
                    With a strong background in marketing and design, he
                    expertly leverages data-driven insights and a deep
                    understanding of market dynamics to create successful brand
                    campaigns. His leadership, driven by a passion for digital
                    technology and operational efficiency, confidently steers
                    the agency into the future.
                  </p>
                </div>
                <div>
                  <Image
                    src={imgMercy}
                    alt="partner-2"
                    className="rounded-2xl bg-gray-300 w-full max-h-[280px] object-cover"
                  />
                  <h3 className="pt-[16px]">Mercy Sue Cherian</h3>
                  <p className="text-base">
                    Co-Founder, Chief Strategy Officer
                  </p>
                  <br />
                  <p>
                    A seasoned brand strategist and ACCA graduate, seamlessly
                    blending creativity and strategic acumen. Her ability to see
                    the world through both a design and a business lens allows
                    her to create compelling brands and lead innovative
                    campaigns, ensuring that the brands she works with not only
                    succeed, but inspire.
                  </p>
                </div>
                <div>
                  <Image
                    src={imgJackson}
                    alt="partner-3"
                    className="rounded-2xl bg-gray-300 w-full max-h-[280px] object-cover"
                  />
                  <h3 className="pt-[16px]">Jackson Kang</h3>
                  <p className="text-base">Chief Creative Officer</p>
                  <br />
                  <p>
                    A major in illustration design and a practicing visual
                    artist, he is the creative head of Gin+Tonic. He maintains
                    the agency's creative pulse, seamlessly navigating between
                    the arts and commercial design. His ability to balance
                    creativity with strategic restraint inspires the team and is
                    reflected in Gin+Tonic's dynamic works.
                  </p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
