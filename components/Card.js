import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// const hoverVariants = {
//   default: {
//     color: "#000",
//   },
//   hover: {
//     color: "#A3E044",
//   },
// };

// const scaleVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 0.4 } },
//   exit: { opacity: 0 },
// };

export default function Card({ id, number, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);

  // const toggleDropdown = () => {
  //   setIsOpen((value) => !value);
  // };

  const setState = () => {
    setIsOpen((value) => !value);
    setActive(active === id ? null : id);
  };

  return (
    <>
      <motion.div
        key={id}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className={`${
          isOpen ? "rounded-b-none" : "rounded-b-lg"
        } rounded-lg bg-white relative z-20 h-[150px]`}
      >
        <h3 className="px-6 pt-4 pb-10 text-[32px]">{number}</h3>
        <div className="flex justify-between px-6 pb-2" onClick={setState}>
          <h4 className="font-medium text-[18px]">{title}</h4>
          {active === id ? (
            <h2 className="text-base font-medium cursor-pointer">HIDE</h2>
          ) : (
            <h2 className="text-base font-medium cursor-pointer">SHOW</h2>
          )}
        </div>
      </motion.div>
      <AnimatePresence>
        {active === id && (
          <motion.div
            layout
            initial={{ y: -120, height: 0 }}
            animate={{
              y: 0,
              height: "auto",
              transition: { type: "just", duration: 0.3 },
            }}
            exit={{
              y: -140,
              height: 0,
              transition: { type: "just", duration: 0.3 },
            }}
            className="relative z-0"
          >
            <motion.div
              layout
              className={`${
                isOpen ? "rounded-t-none" : "rounded-t-lg"
              } relative border-t-[1px] border-[#A3E044] rounded-lg bg-white`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.2 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="p-6 text-black text-base font-regular relative z-0"
              >
                {content}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
