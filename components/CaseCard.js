import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Sector from "./Sector";

export default function CaseCard({ item }) {
  const { coverImage, title, description, slug, deliverables } = item.fields;

  return (
    <div key={slug} className="flex flex-col gap-2">
      <Link href={`/case-studies/${slug}`} className="group">
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
              className="w-full h-[432px] sm:h-[532px] object-cover"
            />
          </motion.div>
        </div>
        <div className="flex items-center gap-y-4 gap-x-2">
          <div className="font-medium pt-2">{title}</div>
          <div className="text-[14px] pb-[2px] pt-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {description}
          </div>
        </div>
      </Link>
      <div className="flex flex-row flex-wrap gap-2">
        {deliverables.map((deliverable, i) => (
          <div key={i}>
            <Sector label={deliverable} />
          </div>
        ))}
      </div>
    </div>
  );
}
