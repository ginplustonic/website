import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import arrowWhite from "../public/arrow-white.svg";

export default function Button({ label, href }) {
  return (
    <Link href={href}>
      <div className="flex flex-row gap-1 group">
        <motion.button
          type="button"
          className="text-[#A3E044] text-base font-medium text-center bg-black rounded-3xl px-4 py-2 transition-all duration-500 "
        >
          {label}
        </motion.button>
        <motion.div className="bg-black rounded-full w-[40px] h-[40px] flex items-center justify-center transition-all duration-500 ">
          <Image
            className="relative transition-all duration-500 group-hover:invert-0 group-hover:filter group-hover:rotate-45"
            src={arrowWhite}
            alt="arrow-icon"
          />
        </motion.div>
      </div>
    </Link>
  );
}
