"use client";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useProductStore } from "../../store/productStore";
import { FaArrowLeftLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
  const Language = useProductStore((state) => state.Language);
  const setLanguage = useProductStore((state) => state.setLanguage);
  const productDetailsPage = pathname.startsWith("/products/");
  return (
    <div
      className={`container py-[20.5px] flex justify-between items-center  ${
        productDetailsPage ? "absolute top-0 z-50 md:static" : "static"
      }`}
    >
      <div className=" gap-24 text-sm font-medium hidden md:flex">
        <Link
          href="/products"
          onClick={(e) => {
            if (typeof window === "undefined") return;
            const box = document.getElementById("box");
            if (box && box.hidden) e.preventDefault();
          }}
          className="border-b-2 border-transparent hover:border-black py-2 hover:cursor-pointer "
        >
          Home
        </Link>
        <p className="border-b-2 border-transparent hover:border-black py-2 hover:cursor-pointer">
          Collections
        </p>
        <p className="border-b-2 border-transparent hover:border-black py-2 hover:cursor-pointer">
          New
        </p>
      </div>
      <Link
        href="/products"
        className="size-[45px] flex justify-center items-center rounded-full bg-[#FEFEFE] hover:cursor-pointer md:hidden"
      >
        <FaArrowLeftLong className="text-2xl" />
      </Link>
      {!productDetailsPage && (
        <p className="block md:hidden font-space-grotesk text-secondaryText text-base">
          Men&apos;s Wear
        </p>
      )}
      <div className="flex gap-2 items-center">
        <div
          className="size-[45px] flex justify-center items-center rounded-full bg-[#FEFEFE] capitalize hover:cursor-pointer"
          onClick={setLanguage}
        >
          {Language}
        </div>
        <div className="size-[45px] flex justify-center items-center rounded-full bg-[#FEFEFE] capitalize hover:cursor-pointer">
          <MdOutlineShoppingBag className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
