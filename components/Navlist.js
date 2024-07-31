import { motion } from "framer-motion";

export default function Navlist({ links, type, delay }) {
  const variants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        ease: "easeInOut",
      },
    }),
    hidden: { opacity: 0, transition: { delay: 0.2 } },
  };

  return links.map((link, i) => (
    <Link href={link.href}>
      <motion.li
        key={i}
        custom={i}
        variants={variants}
        initial="hidden"
        animate="visible"
        className={
          type == "small"
            ? "text-xl pb-2"
            : type == "medium"
            ? "text-[48px] pb-2"
            : "lg:text-[64px] pb-4"
        }
      >
        {link.title}
      </motion.li>
    </Link>
  ));
}
