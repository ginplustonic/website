import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Sector from "./Sector";

export default function InsightPanel({ item }) {
  const { title, author, slug, coverImage, date, sectors } = item.fields || {};

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-4 py-8 border-t-[0.75px] border-[#A3E044]">
        <div className="order-2 lg:order-1 text-[20px] text-black font-regular mt-4 lg:mt-0">
          <div>
            <Link href={`insights/${slug}`}>
              <h2 className="leading-snug text-[20px]">{title}</h2>
              {author && (
                <div className="text-sm text-gray-500 pb-2">{author}</div>
              )}
            </Link>
          </div>
          <div className="flex flex-row flex-wrap gap-x-2">
            <Link href={`insights/${slug}`}>
              {sectors?.map((sector, i) => (
                <div key={i}>
                  <Sector label={sector} />
                </div>
              ))}
            </Link>
          </div>
        </div>
        {coverImage && coverImage.fields && coverImage.fields.file && (
          <div className="order-1 lg:order-2 w-full lg:w-[300px] bg-gray-300 rounded-2xl overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Link href={`insights/${slug}`}>
                <Image
                  alt={`Cover Image for ${title}`}
                  src={`https:${coverImage.fields.file.url}`}
                  width={coverImage.fields.file.details.image.width}
                  height={coverImage.fields.file.details.image.height}
                  className="rounded-2xl bg-gray-300 w-full h-[160px] sm:h-[180px] object-cover"
                />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
