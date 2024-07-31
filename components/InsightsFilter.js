import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import arrowDown from "../public/arrow-down.svg";

export default function InsightsFilter({ insights, setFilteredInsights }) {
  const [open, setOpen] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  const addSector = (sector) => {
    if (!selectedSectors.includes(sector)) {
      setSelectedSectors((prev) => [...prev, sector]);
    }
  };

  const removeSector = (sector) => {
    setSelectedSectors((prev) => prev.filter((item) => item !== sector));
  };

  const resetSectors = () => {
    setSelectedSectors([]);
  };

  const resetFilters = () => {
    resetSectors();
  };

  useEffect(() => {
    let sectorSet = new Set();

    insights.forEach((item) => {
      item.fields.sectors.forEach((sector) => {
        sectorSet.add(sector);
      });
    });

    setSectors(Array.from(sectorSet));
  }, [insights]);

  useEffect(() => {
    let filtered = insights;

    if (selectedSectors.length > 0) {
      filtered = filtered.filter((item) =>
        item.fields?.sectors?.some((sector) => selectedSectors.includes(sector))
      );
    }
    setFilteredInsights(filtered);
  }, [selectedSectors, insights, setFilteredInsights]);

  return (
    <div className="border-y-[0.75px] border-[#A3E044] py-4">
      <div className="flex justify-between w-auto">
        <div className="text-[18px] font-medium text-black self-center">
          Filters
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="bg-[#A3E044] rounded-full w-[30px] h-[30px] cursor-pointer flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            whileHover={{ rotate: open ? 540 : 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              className="relative"
              src={arrowDown}
              alt="arrow pointing down"
            />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col lg:flex-row gap-x-16 pt-8"
            >
              <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-4">
                  {sectors.map((sector) => (
                    <div className="flex flex-row grow" key={sector}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: selectedSectors.includes(sector) ? 1 : 0,
                          scale: selectedSectors.includes(sector) ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`rounded-2xl bg-[#A3E044] w-[8px] h-[8px] mt-2 mr-2 cursor-pointer ${
                          selectedSectors.includes(sector)
                            ? "visible"
                            : "invisible"
                        }`}
                      ></motion.span>
                      <p
                        onClick={() => {
                          if (selectedSectors.includes(sector)) {
                            removeSector(sector);
                          } else {
                            addSector(sector);
                          }
                        }}
                        className={`cursor-pointer pr-4 ${
                          selectedSectors.includes(sector)
                            ? "transition-colors hover:text-[#A3E044]"
                            : "transition-colors hover:text-[#A3E044]"
                        }`}
                      >
                        {sector}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <button
              type="button"
              className="text-black text-base font-medium text-center h-[40px] bg-[#A3E044] rounded-3xl px-4 self-end justify-end"
              onClick={resetFilters}
            >
              Clear Filters
            </button>
            <div className="text-base text-[#A3E044]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
