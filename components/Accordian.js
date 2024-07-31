import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Givaudan from "../public/images/logos/Givaudan.svg";

const testimonials = [
  {
    id: 0,
    client: "Givaudan",
    author: "Fithry Restusari",
    title: "Regional Design Manger, APAC",
    testimonial:
      "“We are thrilled with our partnership with Gin+Tonic —a heartfelt thank you for the exceptional work, including the outstanding brand strategy. We proudly showcase the comprehensive results achieved together.”",
    sectors: ["BRANDING", "COPYWRITING"],
    img: Givaudan,
  },
  {
    id: 1,
    client: "Ansell",
    author: "Thomas Muller",
    title: "Regional Manger",
    testimonial:
      "“We are thrilled with our partnership with Gin+Tonic —a heartfelt thank you for the exceptional work, including the outstanding brand strategy. We proudly showcase the comprehensive results achieved together.”",
    sectors: ["BRANDING", "COPYWRITING"],
    img: "",
  },
  {
    id: 2,
    client: "ACG Healthcare Group",
    author: "Allan Fernandez",
    title: "Mangaging Director",
    testimonial:
      "“We are thrilled with our partnership with Gin+Tonic —a heartfelt thank you for the exceptional work, including the outstanding brand strategy. We proudly showcase the comprehensive results achieved together.”",
    sectors: ["BRANDING", "COPYWRITING"],
    img: "",
  },
];

export default function Accordian() {
  // const [active, setActive] = useState(testimonials[0].id);
  const [active, setActive] = useState();

  return (
    <div className="w-full m-auto">
      {testimonials?.map((testimonial) => (
        <div key={testimonial.id} className="mb-2 last:mb-0">
          <div
            className="w-full text-left text-[16px] font-regular flex justify-between border-t-[0.75px] border-black py-6"
            onClick={() =>
              setActive(active === testimonial.id ? null : testimonial.id)
            }
          >
            <h2 className="font-medium">{testimonial.client}</h2>
            {/* {active === testimonial.id ? <h2>{testimonial.author}</h2> : ""}
              {active === testimonial.id ? <h2>{testimonial.title}</h2> : ""} */}

            {active === testimonial.id ? (
              <h2 className="justify-self-end font-regular cursor-pointer">
                CLOSE
              </h2>
            ) : (
              <h2 className="justify-self-end font-regular cursor-pointer">
                OPEN
              </h2>
            )}
          </div>
          <AnimatePresence>
            {active === testimonial.id && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="flex flex-col"
              >
                {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-4 text-[16px] font-normal sm:pt-2 pb-4">
                  <h2 className="md:col-start-1 md:col-span-1">
                    {testimonial.author}
                  </h2>
                  <h2>{testimonial.title}</h2>
                </div> */}

                <div className="grid gap-4 grid-cols-1 md:grid-cols-4 text-[16px] font-normal sm:pt-2 pb-6">
                  <div className="flex flex-col md:col-start-1 md:col-span-1 text-[16px] font-normal pb-4 md:pb-8">
                    <h2 className="font-medium">{testimonial.author}</h2>
                    <h2>{testimonial.title}</h2>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    className="md:col-start-2 md:col-span-2 flex flex-col"
                  >
                    {testimonial.testimonial}
                    <div>
                      <Image
                        src={testimonial.img}
                        alt="testimonial-logo"
                        className="min-w-[180px] pt-8"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
