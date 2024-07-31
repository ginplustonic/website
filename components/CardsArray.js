import { motion } from "framer-motion";
import Card from "./Card";

export default function CardArray({ cardInfo }) {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr]">
      {cardInfo?.map((item, index) => (
        <Card
          key={index}
          number={item.number}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
