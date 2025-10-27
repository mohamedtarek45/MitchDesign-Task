"use client";
import Nike from "@/public/icons/Nike.svg";
import Adidas from "@/public/icons/Adidas.svg";
import Puma from "@/public/icons/Puma.svg";
import Reebok from "@/public/icons/Reebok.svg";
import { RiCloseLargeFill } from "react-icons/ri";
import { useProductStore } from "../../store/productStore";
import type { Brand } from "../../lib/types/types";
const NavbarFilter = () => {
  const brands = [
    { name: "Nike", icon: Nike },
    { name: "Adidas", icon: Adidas },
    { name: "Puma", icon: Puma },
    { name: "Reebok", icon: Reebok },
  ];
  const brand = useProductStore((state) => state.brand);
  const setBrand = useProductStore((state) => state.setBrand);
  return (
    <div className="flex gap-2.5 mt-[23px] md:mt-3 px-5 md:px-0 overflow-x-auto no-scrollbar ">
      {brands.map((b, i) => (
        <div
          onClick={() => setBrand(b.name as Brand)}
          key={i}
          className={`p-1 flex items-center gap-[5px] rounded-[10px] bg-[#F5F6FA] hover:cursor-pointer transition-all ${
            brand === b.name ? "border border-midnightGreen" : "border border-transparent"
          }`}
        >
          <div className="size-10 flex items-center justify-center bg-white rounded-[10px]">
            <b.icon className="size-7" />
          </div>
          <p className="text-[15px] font-inter font-medium text-[#1D1E20]">
            {b.name}
          </p>
          {brand === b.name && (
            <RiCloseLargeFill
              className="text-midnightGreen cursor-pointer ml-[19px]"
              onClick={(e) => {
                e.stopPropagation();
                setBrand("");
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarFilter;
