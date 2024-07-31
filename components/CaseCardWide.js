import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Sector from "./Sector";

const cardVariants = {
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
    transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" },
  },
  whileHover: {
    color: "#A3E044",
  },
};

export default function CaseCardWide({ item }) {
  const { coverImage, title, description, slug, deliverables } = item.fields;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cardVariants}
        className="flex flex-col gap-y-2 gap-x-2"
      >
        <Link href={`/case-studies/${slug}`} className="group">
          <div className="flex items-center gap-y-4 gap-x-2">
            <div className="font-medium pb-[8px]">{title}</div>
            <div className="text-[14px] pb-[8px] pt-[0px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {description}
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                alt={`Cover Image for ${title}`}
                src={`https:${coverImage.fields.file.url}`}
                width={coverImage.fields.file.details.image.width}
                height={coverImage.fields.file.details.image.height}
                className="w-full h-[432px] sm:h-[460px] object-cover"
              />
            </motion.div>
          </div>
        </Link>
        <div className="flex flex-row flex-wrap gap-2 py-2">
          {deliverables.map((deliverable) => (
            <Sector key={deliverable} label={deliverable} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
