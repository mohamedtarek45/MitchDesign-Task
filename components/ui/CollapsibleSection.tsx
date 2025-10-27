"use client";
import { useState, ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

const CollapsibleSection = ({ title, children }: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-Gray1 rounded-[10px] px-3.5 py-5 hover:cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">{title}</p>
        {isOpen ? (
          <FaMinus className="text-[10px] text-primaryText" />
        ) : (
          <FaPlus className="text-primaryText text-[10px]" />
        )}
      </div>

      <div
        className={`flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 mt-[18px]"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;
