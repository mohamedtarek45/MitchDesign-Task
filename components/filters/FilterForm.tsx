"use client";
import dynamic from "next/dynamic";
import { BsChevronRight } from "react-icons/bs";
const SortSection = dynamic(() => import("./SortSection"), { ssr: false });
const PriceSection = dynamic(() => import("./PriceSection"), { ssr: false });
const SizeSection = dynamic(() => import("./SizeSection"), { ssr: false });
const RatingSection = dynamic(() => import("./RatingSection"), { ssr: false });
import submitFromSection from "@/lib/utils/submitFromSection";
import { useProductStore } from "@/store/productStore";
const FilterForm = ({ closeForm }: { closeForm?: () => void }) => {
  const setSort = useProductStore.getState().setSort;
  const setPrice = useProductStore.getState().setPrice;
  const setSize = useProductStore.getState().setSize;
  const setRating = useProductStore.getState().setRating;
  return (
    <form
      action=""
      className="mt-5 space-y-3  font-poppins h-full flex-col flex justify-between md:blok md:h-auto"
      onSubmit={(e) => {
        submitFromSection(e);
        if (closeForm) closeForm();
      }}
    >
      <div>
        <SortSection />
        <PriceSection />
        <SizeSection />
        <RatingSection />
      </div>

      <div className="flex justify-between mb-8 md:mb-0">
        <button
          type="reset"
          className="font-semibold hover:cursor-pointer"
          onClick={() => {
            setSort("");
            setPrice("");
            setSize("");
            setRating("");
          }}
        >
          Clear All
        </button>
        <button className="bg-midnightGreen py-4 px-8 text-white rounded-xl font-poppins flex gap-2.5 items-center hover:cursor-pointer hover:scale-105 duration-200">
          <p>Apply</p>
          <BsChevronRight className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
