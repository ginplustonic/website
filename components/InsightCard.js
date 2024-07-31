import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Sector from "./Sector";

export default function InsightCard({ item }) {
  const { title, author, coverImage, date, sectors, slug } = item.fields || {};

  return (
    <div className="lg:w-full">
      <Link href={`insights/${slug}`}>
        {coverImage && (
          <div className="w-full overflow-hidden rounded-2xl lg:w-[300px]">
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
                className="rounded-2xl bg-gray-300 w-full h-[190px] sm:h-[215px] object-cover"
              />
            </motion.div>
          </div>
        )}
        <h2 className="text-[20px] leading-[26px] font-regular pt-2">
          {title}
        </h2>
      </Link>
      {author && (
        <div className="text-[14px] text-gray-500 pb-2 pt-2">{author}</div>
      )}
      <div className="flex flex-row flex-wrap pt-2">
        {(sectors ? [sectors] : []).map((sector, i) => (
          <div key={i}>
            <Sector label={sector} />
          </div>
        ))}
      </div>
    </div>
  );
}
