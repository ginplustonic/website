import Link from "next/link";
import Image from "next/image";

export default function InsightCardSmall({ img, path }) {
  return (
    <div className="w-full h-[175px] bg-gray-300 rounded-2xl">
      <Link href={path || "/"}>
        <Image
          src={img || "/images/first.png"}
          width={290}
          height={175}
          alt={`insight-${img}`}
          className="rounded-2xl bg-gray-300 w-[290px] h-[175px] object-cover"
        />
      </Link>
    </div>
  );
}
