import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import Button from "./Button";
import logoWhite from "../public/logo-white.svg";
import logoBlack from "../public/logo-black.svg";
import lettermark from "../public/lettermark.svg";

const navigationLinks = [
  { title: "Case Studies", href: "/case-studies" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Insights", href: "/insights" },
];

const socialLinks = [
  { title: "Instagram", href: "https://www.instagram.com/ginplustonic.co" },
  { title: "Behance", href: "https://www.behance.net/ginplustonic" },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/ginplustonic/" },
];

const menuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.45, delay: 0.3, ease: "easeInOut" },
  },
};

const linkVariants = {
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: (i + 1) * 0.3,
      ease: "easeInOut",
    },
  }),
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    trasition: { duration: 0.3, delay: 0.3, ease: "easeInOut" },
  },
  whileHover: {
    color: "#A3E044",
  },
};

const otherVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.3, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    trasition: { duration: 0.3, delay: 0.3, ease: "easeInOut" },
  },
  whileHover: {
    color: "#A3E044",
  },
};

const navigationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  // visible: { y: 0 },
  // hidden: { y: "-100%" },
  transition: {
    duration: 0.1,
    ease: "easeInOut",
  },
};

export default function Nav({ bg }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [background, setBackground] = useState("transparent");
  const [textBg, setTextBg] = useState(bg);

  const toggleMenu = () => {
    setIsOpen((value) => !value);
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // if (latest > previous && latest > 150) {
    //   setHidden(true);
    // } else {
    //   setHidden(false);
    // }

    // if (latest < 70) {
    //   setBackground("transparent");
    //   setTextBg(bg);
    //   setHidden(true);
    // } else {
    //   setBackground("white");
    //   setTextBg("black");
    //   setHidden(false);
    // }

    if (latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <header>
      <AnimatePresence mode="wait">
        <motion.nav
          variants={navigationVariants}
          animate={hidden ? "hidden" : "visible"}
          // initial="hidden"
          // animate="visible"
          className={`bg-${background} transition-all h-24 sm:h-auto fixed left-0 top-0 w-full z-30 origin-top overflow-hidden px-6 sm:px-8`}
        >
          <div className="max-w-screen-xl mx-auto py-8 overflow-hidden grid gap-4 grid-cols-2 grid-rows-1 lg:grid-cols-[1fr_3fr_1fr]">
            {/* Grid Item #1 */}
            <Link className="w-[145px]" href="/">
              <Image
                src={bg == "black" ? logoBlack : logoWhite}
                alt="brand-logo"
                className="relative col-start-1 row-start-1"
              />
            </Link>
            {/* Grid Item #2 */}
            {!hidden && (
              <ul
                className={`invisible lg:visible flex flex-row justify-center items-center gap-8 cursor-pointer text-[18px] font-medium text-${bg}`}
              >
                {navigationLinks.map((link, i) => (
                  <Link key={i} href={link.href}>
                    <li className="transition-colors hover:text-[#A3E044]">
                      {link.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
            {/* Grid Item #3 */}
            <div className="flex flex-row gap-2 md:gap-4 justify-self-end items-center col-start-2 lg:col-start-3 row-start-1">
              {/* Flex Item #1 */}
              <div className="invisible sm:visible">
                <Button label={"Work With Us"} href={"/contact"} />
              </div>
              {/* Flex Item #2 */}
              <motion.button
                type="button"
                className={`curson-pointer text-${textBg} text-base font-medium self-start sm:self-center`}
                onClick={toggleMenu}
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <span className="transition-colors hover:text-[#A3E044]">
                  Menu
                </span>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Dropdown Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed left-0 top-0 w-full z-40 h-screen origin-top overflow-hidden bg-[#eee] text-black px-6 sm:px-8"
          >
            <motion.div
              exit="exit"
              variants={otherVariants}
              className="max-w-screen-xl mx-auto py-8 overflow-hidden grid gap-4 grid-cols-[1fr_1fr] grid-rows-[minmax(40%,_1fr)_2fr] lg:gap-8 lg:grid-cols-[33%_3fr_2fr_1fr] lg:grid-rows-2"
            >
              {/* Grid Item #1 */}
              <Link className="w-[145px]" href="/">
                <motion.span
                  variants={otherVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Image
                    src={lettermark}
                    alt="brand-lettermark"
                    className="relative col-start-1 row-start-1"
                  />
                </motion.span>
              </Link>
              {/* Grid Item #2 */}
              <ul className="leading-none col-start-1 col-span-2 lg:col-span-1 lg:col-start-2 mb-4">
                {navigationLinks.map((link, i) => (
                  <Link key={i} href={link.href}>
                    <ul>
                      <motion.li
                        custom={i}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-[48px] lg:text-[64px] pb-4 transition-colors hover:text-[#A3E044]"
                      >
                        {link.title}
                      </motion.li>
                    </ul>
                  </Link>
                ))}
              </ul>
              {/* Grid Item #3 */}
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={otherVariants}
                className="flex flex-col justify-start items-start lg:row-span-2 lg:col-start-3 lg:border-l-[1px] lg:border-[#A3E044] lg:pl-8"
              >
                <p className="text-black text-xl font-medium invisible lg:visible pt-1">
                  Socials
                </p>
                <div className="flex gap-1 flex-col invisible lg:visible lg:mt-8 text-xl font-normal">
                  <Link href="https://www.instagram.com/ginplustonic.co">
                    <motion.h3 className="transition-colors hover:text-[#A3E044]">
                      Instagram
                    </motion.h3>
                  </Link>
                  <Link href="https://www.behance.net/ginplustonic">
                    <motion.h3 className="transition-colors hover:text-[#A3E044]">
                      Behance
                    </motion.h3>
                  </Link>
                  <Link href="https://www.linkedin.com/company/ginplustonic/">
                    <motion.h3 className="transition-colors hover:text-[#A3E044]">
                      LinkedIn
                    </motion.h3>
                  </Link>
                </div>
              </motion.div>
              {/* Grid Item #4 */}
              <div className="flex justify-end col-start-2 row-start-1 md:col-start-4">
                <motion.button
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={otherVariants}
                  type="button"
                  className="curson=pointer self-start text-black text-base font-medium m-0 pt-1 transition-colors hover:text-[#A3E044]"
                  onClick={toggleMenu}
                  aria-controls="navbar-sticky"
                  aria-expanded={isOpen}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
