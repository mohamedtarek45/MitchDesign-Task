"use client";
import { useState } from "react";
import FilterIcon from "@/public/icons/FilterButton.svg";
import FilterForm from "./FilterForm";
import { RiCloseLargeFill } from "react-icons/ri";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "motion/react";
const FilterSection = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
  className="fixed bottom-3 right-[23px] p-[11px] bg-midnightGreen rounded-full z-5 md:hidden"
        onClick={() => setIsOpen((p) => !p)}
      >
        <FilterIcon className="text-white size-6" />
      </div>

      {isMobile && (
        <motion.div
          variants={{
            open: { opacity: 100, y: 0, display: "block" },
            closed: {
              opacity: 0,
              y: -200,
              display: "none",
            },
          }}
          className={`
          fixed inset-0 bg-white px-5 py-[33px]  md:hidden z-40 `}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <p className="font-medium font-space-grotesk text-secondaryText mb-3">
              Sort and Filter
            </p>
            <RiCloseLargeFill
              className="text-secondaryText"
              onClick={() => setIsOpen((p) => !p)}
            />
          </div>
          <FilterForm closeForm={() => setIsOpen(false)} />
        </motion.div>
      )}

      {!isMobile && (
        <div className="hidden md:block md:mt-16">
          <p className="font-medium font-space-grotesk text-secondaryText mb-3">
            Sort and Filter
          </p>
          <FilterForm />
        </div>
      )}
    </>
  );
};

export default FilterSection;
