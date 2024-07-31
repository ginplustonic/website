import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import arrowDown from "../public/arrow-down.svg";

export default function FilterComponent({ cases, setFilteredCases }) {
  const [open, setOpen] = useState(false);
  const [deliverables, setDeliverables] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [selectedDeliverables, setSelectedDeliverables] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  const addDeliverable = (deliverable) => {
    if (!selectedDeliverables.includes(deliverable)) {
      setSelectedDeliverables((prev) => [...prev, deliverable]);
    }
  };

  const removeDeliverable = (deliverable) => {
    setSelectedDeliverables((prev) =>
      prev.filter((item) => item !== deliverable)
    );
  };

  const resetDeliverables = () => {
    setSelectedDeliverables([]);
  };

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
    resetDeliverables();
    resetSectors();
  };

  useEffect(() => {
    let deliverableSet = new Set();
    let sectorSet = new Set();

    cases.forEach((item) => {
      item.fields.deliverables.forEach((deliverable) => {
        deliverableSet.add(deliverable);
      });
      item.fields.sectors.forEach((sector) => {
        sectorSet.add(sector);
      });
    });

    setDeliverables(Array.from(deliverableSet));
    setSectors(Array.from(sectorSet));
  }, [cases]);

  useEffect(() => {
    let filtered = cases;
    if (selectedDeliverables.length > 0) {
      filtered = filtered.filter((item) =>
        item.fields?.deliverables?.some((deliverable) =>
          selectedDeliverables.includes(deliverable)
        )
      );
    }
    if (selectedSectors.length > 0) {
      filtered = filtered.filter((item) =>
        item.fields?.sectors?.some((sector) => selectedSectors.includes(sector))
      );
    }
    setFilteredCases(filtered);
  }, [selectedDeliverables, selectedSectors, cases, setFilteredCases]);

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
                <div className="text-[16px] font-medium text-black mb-2">
                  Deliverables
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-x-2">
                  {deliverables.map((deliverable) => (
                    <div className="flex flex-row grow" key={deliverable}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: selectedDeliverables.includes(deliverable)
                            ? 1
                            : 0,
                          scale: selectedDeliverables.includes(deliverable)
                            ? 1
                            : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`rounded-2xl bg-[#A3E044] w-[8px] h-[8px] mt-2 mr-2 cursor-pointer ${
                          selectedDeliverables.includes(deliverable)
                            ? "visible"
                            : "invisible"
                        }`}
                      ></motion.span>
                      <p
                        onClick={() => {
                          if (selectedDeliverables.includes(deliverable)) {
                            removeDeliverable(deliverable);
                          } else {
                            addDeliverable(deliverable);
                          }
                        }}
                        className={`cursor-pointer pr-4 ${
                          selectedDeliverables.includes(deliverable)
                            ? "transition-colors hover:text-[#A3E044]"
                            : "transition-colors hover:text-[#A3E044]"
                        }`}
                      >
                        {deliverable}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-[16px] font-medium text-black mb-2">
                  Sectors
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-x-1">
                  {sectors.map((sector) => (
                    <div className="flex flex-row grow" key={sector}>
                      <span
                        className={`rounded-2xl bg-[#A3E044] w-[8px] h-[8px] mt-2 mr-2 cursor-pointer ${
                          selectedSectors.includes(sector)
                            ? "visible"
                            : "invisible"
                        }`}
                      ></span>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
