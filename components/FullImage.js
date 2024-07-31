import Image from "next/image";

export default function FullImage({ node }) {
  // Access the nested image fields
  const { fields } = node.image || {};
  const { file, title } = fields || {};

  // Add safeguard in case file or title is undefined
  if (!file || !file.url || !file.details || !file.details.image) {
    console.error("FullImage: Missing required data", node);
    return null;
  }

  return (
    <div className="w-full">
      <Image
        src={`https:${file.url}`}
        height={file.details.image.height}
        width={file.details.image.width}
        alt={title || "Image"}
        className="object-cover pb-[64px]"
      />
    </div>
  );
}
