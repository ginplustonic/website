import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";

import arrow from "../public/arrow.svg";

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("xeojjpal");
  if (state.succeeded) {
    return (
      <>
        <Nav bg="black" />
        <div className="bg-white w-full h-[220px]"></div>
        <main className="bg-white w-full overflow-hidden px-6 sm:px-8">
          <div className="max-w-screen-xl mx-auto text-black grid gap-4 pb-16 md:pb-[88px]">
            <h2 className="font-medium text-[26px] md:text-[28px]">
              Thank You!
            </h2>
            <div className="text-[20px] leading-snug">
              <p className="pt-[10px] pb-4">
                Our team is having a look and will respond shortly.
              </p>
            </div>
          </div>
        </main>
        <div className="flex justify-center items-center"></div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`Contact | Gin+Tonic`}</title>
        <meta
          name="description"
          content={
            "We love collaborating with ambitious brands and people; Ready to do big things? Start a project with us."
          }
          key="desc"
        />
        <meta property="og:title" content={`Contact | Gin+Tonic`} />
        <meta
          property="og:description"
          content={
            "We love collaborating with ambitious brands and people; Ready to do big things? Start a project with us."
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
              Get In Touch
            </h2>
            <div className="md:col-span-3 text-[20px] leading-snug max-w-[80%] sm:max-w-[55%]">
              <p className="pt-[10px] pb-4">
                We love collaborating with ambitious brands and people; Ready to
                do big things? Start a project with us.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <main className="bg-white w-full overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-black grid sm:grid-cols-2 gap-4 pb-16 md:pb-[88px]">
          <h2 className="sm:col-span-2 font-medium text-[26px] md:text-[28px]">
            Get In Touch
          </h2>
          <div className="sm:col-span-2 text-[20px] leading-snug">
            <p className="pt-[10px] pb-4">
              We love collaborating with ambitious brands and people; <br />
              Ready to do big things? Start a project with us.
            </p>
          </div>
        </div>
      </main> */}
      <section className="bg-white text-black w-full overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto text-[18px] border-t-[0.75px] border-[#A3E044]">
          <form onSubmit={handleSubmit} className="py-16">
            <div className="grid md:grid-cols-2 gap-4 pb-4">
              <div className="flex flex-col">
                <label htmlFor="fullname" className="text-black pb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="fullname"
                  className="w-full h-[60px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-2 px-4 text-black"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="company-name" className="text-black pb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="company-name"
                  className="w-full h-[60px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-2 px-4 text-black"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pb-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-black pb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full h-[60px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-2 px-4 text-black"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <div className="flex flex-col">
                <label htmlFor="tel" className="text-black pb-2">
                  Your Phone <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="tel"
                  className="w-full h-[60px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-2 px-4 text-black"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pb-4">
              <div className="flex flex-col">
                <label htmlFor="text" className="text-black pb-2">
                  Budget Range <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  name="range"
                  className="w-full h-[60px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-2 px-4 text-black"
                >
                  <option>RM10,000 - RM20,000</option>
                  <option>RM20,000 - RM30,000</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="date" className="text-black pb-2">
                  Project Completion <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  className="w-full h-[60px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-2 px-4 text-black"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-4 w-full">
              <div className="flex flex-col">
                <label htmlFor="text" className="text-black pb-2">
                  Tell us about your project (Scope of work){" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  className="w-full h-[180px] rounded-2xl bg-transparent border-[0.75px] border-[#A3E044] outline-none focus:border-2 focus:border-[#A3E044] py-4 px-4 text-black"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between pb-4 w-full">
              <div className="flex items-center">
                <input
                  required
                  type="checkbox"
                  className="w-4 h-4 rounded-full cursor-pointer text-[#A3E044] border-[#A3E044] focus:ring-[#A3E044] checked:bg-[#A3E044]"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm text-gray-900"
                >
                  I agree with the{" "}
                  <a
                    href="#"
                    className="text-[#A3E044] font-medium hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="flex gap-1"
              >
                <div className="flex flex-row gap-1 group">
                  <div
                    type="button"
                    className="text-black text-base font-medium text-center bg-[#A3E044] rounded-3xl px-4 py-2 transition-all duration-500 "
                  >
                    Send Inquiry
                  </div>
                  <div className="bg-[#A3E044] rounded-full w-[40px] h-[40px] flex items-center justify-center transition-all duration-500">
                    <Image
                      className="relative transition-all duration-500 group-hover:invert-0 group-hover:filter group-hover:rotate-45"
                      src={arrow}
                      alt="arrow-icon"
                    />
                  </div>
                </div>
              </button>
              <ValidationError errors={state.errors} />
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#A3E044] text-black w-full overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto pt-16 md:pt-[88px]">
          <header>
            <h2 className="font-medium text-[26px] md:text-[28px]">
              Find Us Here
            </h2>
            <h3 className="font-regular pt-6 pb-4 text-[18px]">
              We have built long-lasting partnerships with brands across the
              globe:
            </h3>
          </header>

          <div className="pb-16">
            <div className="grid md:grid-cols-3 text-base py-6 border-t-[0.75px] border-black">
              <h3 className="text-[18px] pb-4">Johor Bahru</h3>
              <h2 className="text-[18px] pb-1">Malaysia</h2>
              <p>
                A-23-03, Menara A, The Astaka, The Astaka Boulevard 1, Bukit
                Senyum 1, 80200, Johor Bahru, Malaysia
                <br />
              </p>
            </div>
            <div className="grid md:grid-cols-3 text-base py-6 border-t-[0.75px] border-black">
              <h3 className="text-[18px] pb-4">Kuala Lumpur</h3>
              <h2 className="text-[18px] pb-1">Malaysia</h2>
              <p>
                Q Sentral, Level 39, Unit 39-02 (East Wing, 2A, Jalan Stesen
                Sentral 2, Kuala Lumpur Sentral, 50470 Kuala Lumpur
                <br />
              </p>
            </div>
            <div className="grid md:grid-cols-3 text-base py-6 border-t-[0.75px] border-black">
              <h2 className="text-[18px] pb-1">Singapore</h2>
              <h3 className="text-[18px] pb-4">Singapore</h3>
              <p>
                23 Church St, Level 7 Capital Square, Singapore 049481
                <br />
              </p>
            </div>
            <div className="grid md:grid-cols-3 text-base py-6 border-t-[0.75px] border-black">
              <h3 className="text-[18px] pb-4">Jakarta</h3>
              <h2 className="text-[18px] pb-1">Indonesia</h2>
              <p>
                Level 18, Jakarta Mori Tower, Jl. Jend. Sudirman Kav 40 - 41,
                Jakarta 10210, Indonesia
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white w-full overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto pt-16 md:pt-[88px]">
          <header>
            <h2 className="font-medium text-[26px] md:text-[28px]">
              Frequently Asked Questions
            </h2>
            <h3 className="font-regular pt-6 pb-4 text-[18px]">
              Choosing a strategic branding and digital marketing partner is a
              big decision. Our goal is to offer transparent and reliable
              information to help you plan for your project, eliminate the
              guesswork and make hiring us easier.
            </h3>
          </header>
          <FAQ />
        </div>
      </section>
    </>
  );
}
