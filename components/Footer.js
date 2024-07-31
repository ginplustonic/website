import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <div className="bg-black left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        {/** Top Section */}
        <div className="max-w-screen-xl mx-auto text-white flex flex-wrap flex-row justify-between pt-8 md:pt-[48px]">
          {/** CTA */}
          <div className="pb-8">
            <div className="text-[28px] md:text-[32px] pb-2">
              Got a project? We’ve got you.
            </div>

            <Button label={"Let's Chat"} href={"/contact"} />
          </div>
          {/** Navigation */}
          <nav aria-label="Main Navigation" className="py-2 pb-4">
            <div className="flex flex-row gap-16">
              <ul>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/insights">Insights</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="https://www.instagram.com/ginplustonic.co">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/ginplustonic/">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://www.behance.net/ginplustonic">
                    Behance
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/** Bottom Section */}
        <div className="max-w-screen-xl mx-auto text-white text-[14px] flex flex-wrap flex-col md:flex-row justify-between pt-[88px] md:pt-[128px] pb-[48px]">
          <div>
            <p>Johor Bahru • Kuala Lumpur • Jakarta • Singapore</p>
          </div>
          <div className="text-[16px] font-regular underline md:self-end">
            <Link href="mailto:hello@ginplustonic.co">
              hello@ginplustonic.co
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#A3E044] left-0 top-0 w-full origin-top overflow-hidden px-6 sm:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-wrap flex-row justify-between py-[16px] text-[12px] font-medium">
          <p>© 2024 G&T Creative Agency Sdn. Bhd.</p>
          <Link href={"/privacy"}>
            <p className="underline">TERMS, PRIVACY POLICY</p>
          </Link>
        </div>
      </div>
    </>
  );
}
