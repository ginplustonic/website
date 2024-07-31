import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question:
      "What types of companies do you work with and in what industries?",
    answer: [
      "At Gin+ Tonic, our portfolio spans projects ranging from dynamic startups to well-established corporations worldwide, showcasing our global reach and market understanding.",
      "Since 2017, we’ve tackled a variety branding challenges across numerous sectors, such as F&B, tech ecosystems, healthcare, education, hospitality, and wellness. This extensive experience equips us with a wealth of knowledge, insight, and creative problem-solving strategies for every project.",
      "Our current portfolio includes fast-growing B2B and B2C companies that are actively shaping the future. We thrive in this space, working with forward-thinking companies to develop compelling brands that are poised for growth.",
      "To keep our work fresh and exciting, we selectively take on projects in interesting categories, allowing us to explore new and familiar territory, broadening our expertise and keeping us current on branding strategies and trends.",
    ],
  },
  {
    id: 2,
    question: "What makes a client a great fit for Gin+ Tonic?",
    answer: [
      "A great client for Gin+Tonic is one who aligns with our core values and strategic approach. They operate with a sense of purpose, are open-minded to new ideas, and are active decision-makers.",
    ],
  },
  {
    id: 3,
    question: "How many people will be working on our account?",
    answer: [
      "On average, between 4-10 experienced teammates will work on your project. Typically, the following roles are involved:",
      [
        "Account Manager",
        "Project Manager",
        "Brand Strategist",
        "Social Media Strategist",
        "Content Strategist",
        "Copywriter",
        "Creative Director",
        "Art Director",
        "Senior Designer",
        "Web UI/UX",
        "Front-End Developer",
        "Back-End Developer",
        "Animation",
        "Motionographer",
        "Illustrator",
      ],
    ],
  },
  {
    id: 4,
    question: "How long does a branding project usually take?",
    answer: [
      "A comprehensive branding or rebranding project takes at least 3-6 months. A fast-track startup branding project takes at least 12 weeks.",
    ],
  },
  {
    id: 5,
    question: "Who will be managing my account and executing the work?",
    answer: [
      "You will be assigned a dedicated Account Manager who will closely collaborate with you and keep you informed about the progress of our project platform. There are several other individuals on our team whom you will have the opportunity to meet and who will be responsible for leading different aspects of the project.",
    ],
  },
  {
    id: 6,
    question: "Is brand strategy needed for all projects?",
    answer: [
      "Brand and business strategy are the foundation of all our client engagements and projects, as it is crucial for providing the clarity and direction necessary to effectively communicate your brand's essence and achieve your business goals. Creative outcomes may fall short without this strategic underpinning, as they could lack the necessary substance and alignment with your overarching goals.",
      "For example, launching a new external campaign might create some buzz, but without a strategic approach, it may fail to attract, engage, and retain the right audience. No matter how detailed, a brand guideline won’t fix a poor brand architecture. It needs to be part of a more prominent strategic solution.",
      "When it comes to redefining a brand, building a new one, or tackling specific business challenges, strategy is always our starting point. Our goal is to ensure that all creative projects are in line with your brand's long-term vision, values, and business objectives. We strive to guarantee that every initiative we undertake is built on a strong foundation, serves a clear purpose, and makes a meaningful impact on the success of your business.",
    ],
  },
  {
    id: 7,
    question:
      "If we already have a strategy, can we hire Gin+ Tonic for creative services only?",
    answer: [
      "We understand that your organisation may already have a strategy in place. If given the chance, we would be grateful to evaluate your existing strategy to ensure the depth of strategy is up to par, and we can confidently execute against it. If it is, Gin+ Tonic is delighted to offer creative or activation services that align with your strategy. Our experienced team can bring your strategic vision to life through impactful design, compelling copy, and innovative campaigns. We aim to work collaboratively with you, ensuring that we consistently deliver work of the highest quality and coherence.",
    ],
  },
  {
    id: 8,
    question: "Is everything you’ve done in your portfolio?",
    answer: [
      "We take great pride in our extensive experience, and the projects we feature are carefully selected and updated on a yearly basis. Unfortunately, we cannot showcase all of them in a single portfolio. However, we do maintain an archive of all our projects. If you have any particular industry or project in mind, feel free to ask and we’ll provide you with relevant examples.",
    ],
  },
  {
    id: 9,
    question: "What do you require before starting a project?",
    answer: [
      "We require a signed proposal, a signed Letter of Engagement (LOE), and a deposit to commence work.",
    ],
  },
  {
    id: 10,
    question: "How do your billing and payment schedules work?",
    answer: [
      "We typically take 50% of the budget as an initial payment, then break up the remaining balance into equal installments billed monthly.",
    ],
  },
  {
    id: 11,
    question: "How much input will we have during the process?",
    answer: [
      "We’re very collaborative and like to work shoulder-to-shoulder with our clients. We can’t do a great job without that iterative partnership.",
    ],
  },
  {
    id: 12,
    question: "How will Gin+ Tonic get to understand my business?",
    answer: [
      "Getting to truly understand your business is something we take very seriously. We dedicate a great amount of time to getting to know you and your business so that we can create the most effective strategy possible.",
      "Our process starts with an in-depth kick-off meeting where we gather deep insights from you and your team. This involves in-depth interviews to understand your offerings and unique value propositions. We also do a lot of research into your industry, and spend time analysing external and internal data. We ‘listen’ to your audience on social media to get an idea of what they expect from you, and lastly, we perform a detailed competitor analysis to understand the online landscape and identify opportunities for your brand. This comprehensive approach ensures that we have a holistic understanding of your business and industry, enabling us to develop and implement strategies that deliver results.",
    ],
  },
  {
    id: 13,
    question: "What is a full-service digital branding agency?",
    answer: [
      "Every brand needs an online presence to succeed. A full-service digital branding agency handles every facet of this online presence, including ensuring it is well-ranked by search engines, managing its social media presence, writing relevant content, and developing and maintaining its website.",
    ],
  },
  {
    id: 14,
    question: "Why hire us when you can hire a person in-house?",
    answer: [
      "Compared to an employee who has a broad knowledge of digital marketing or design, our team of experts are each experienced and accredited specialists in their particular fields. You can reap the benefits of having multiple experts over one in-house person with three years experience for the similar agency costs vs. salary. We like to think of ourselves as an extension of your team, offering skills you can’t recreate in-house.",
    ],
  },
  {
    id: 15,
    question: "How often will digital marketing results be reported?",
    answer: [
      "We provide performance dashboards and reports that include all the metrics that are important to you. We will take you through these reports – explaining all the data and performance metrics and the work we’ve been doing. We may request extra information to ensure we track the wider impact of the project.",
    ],
  },
];

export default function FAQ() {
  const [active, setActive] = useState(faqs[0].id);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full m-auto mb-16">
        {faqs?.map((faq, index) => (
          <div key={faq.id} className="mb-2 last:mb-0">
            <div
              className="w-full text-left text-[16px] font-regular flex flex-row justify-between border-t-[0.5px] border-white py-6"
              onClick={() => setActive(active === faq.id ? null : faq.id)}
            >
              <h2 className="md:basis-2/3 font-medium">{faq.question}</h2>
              {active === faq.id ? (
                <h2 className="invisible md:visible justify-self-end font-regular cursor-pointer">
                  CLOSE
                </h2>
              ) : (
                <h2 className="invisible md:visible justify-self-end font-regular cursor-pointer">
                  OPEN
                </h2>
              )}
            </div>
            <AnimatePresence>
              {active === faq.id && (
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-[16px] font-light sm:pt-2 pb-4">
                    <div
                      key={faq.id}
                      className="text-[16px] font-light sm:pt-2 pb-4"
                    >
                      {faq.answer.map((item, index) =>
                        Array.isArray(item) ? (
                          <ul key={index} className="list-disc pl-5 pb-4">
                            {item.map((elem, i) => (
                              <li key={i}>{elem}</li>
                            ))}
                          </ul>
                        ) : (
                          <p key={index} className="w-[90%] pb-4">
                            {item}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
