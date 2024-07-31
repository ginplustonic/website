import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Sector from "./Sector";
import { parseISOString } from "@/lib/utils";

export default function InsightPanel({ item }) {
  const { title, author, slug, coverImage, date, sectors } = item.fields || {};

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 py-8 border-t-[0.75px] border-[#A3E044]">
        {coverImage && coverImage.fields && coverImage.fields.file && (
          <div className="w-full lg:w-[490px] bg-gray-300 rounded-2xl overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Link href={`insights/${slug}`}>
                <Image
                  alt={`Cover Image for ${title}`}
                  src={`https:${coverImage.fields.file.url}`}
                  width={coverImage.fields.file.details.image.width}
                  height={coverImage.fields.file.details.image.height}
                  className="rounded-2xl bg-gray-300 w-full h-[360px] sm:h-[400px] object-cover"
                />
              </Link>
            </motion.div>
          </div>
        )}
        <div className="flex flex-col justify-between text-[28px] text-black font-regular mt-4 lg:mt-0">
          <div>
            <Link href={`insights/${slug}`}>
              <h2 className="leading-snug max-w-[100%]">{title}</h2>
              {author && (
                <div className="text-base text-gray-500 py-2">{author}</div>
              )}
            </Link>
          </div>
          <div className="flex flex-row flex-wrap gap-x-2">
            {/* {date && (
              <div className="text-base font-medium text-gray-500 pb-2">
                {parseISOString(date).toUpperCase()}
              </div>
            )} */}
            {sectors?.map((sector, i) => (
              <div key={i}>
                <Sector label={sector} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
