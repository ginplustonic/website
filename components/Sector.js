import { motion } from "framer-motion";

export default function Sector({ index, label }) {
  return (
    <motion.button
      key={index}
      initial={{ backgroundPosition: "100% 0%" }}
      whileHover={{
        backgroundPosition: "0% 0%",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      style={{
        background: "linear-gradient(90deg, #A3E044 50%, transparent 50%)",
        backgroundSize: "200% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="rounded-3xl border-solid border-[1.75px] border-[#A3E044] px-2 py-[2px] font-medium uppercase text-[13px] text-black cursor-default"
    >
      {label}
    </motion.button>
  );
}
