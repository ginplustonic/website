import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import arrow from "../public/arrow.svg";

export default function Button({ label, href }) {
  return (
    <Link href={href}>
      <div className="flex flex-row gap-1 group">
        <motion.button
          type="button"
          className="text-black text-base font-medium text-center bg-[#A3E044] rounded-3xl px-4 py-2 transition-all duration-500 "
        >
          {label}
        </motion.button>
        <motion.div className="bg-[#A3E044] rounded-full w-[40px] h-[40px] flex items-center justify-center transition-all duration-500">
          <Image
            className="relative transition-all duration-500 group-hover:invert-0 group-hover:filter group-hover:rotate-45"
            src={arrow}
            alt="arrow-icon"
          />
        </motion.div>
      </div>
    </Link>
  );
}
