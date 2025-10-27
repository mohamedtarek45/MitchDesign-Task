import { BsChevronRight, BsCheck2 } from "react-icons/bs";
import { useProductStore } from "@/store/productStore";
import { useCallback, useMemo, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Modal from "../ui/Modal";
const SortSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const sort = useProductStore((state) => state.sort);
  const [sorted, setSorted] = useState<null | string>(null);
  const SortMap = useMemo(
    () =>
      new Map([
        ["Most Recommended", ""],
        ["Price Lowest  First", "sort_by=price&sort_order=asc"],
        ["Price Highest First", "sort_by=price&sort_order=desc"],
        ["Best Rating", "sort_by=rating&sort_order=desc"],
      ]),
    []
  );
  const handleSelect = useCallback((label: string) => {
    setSorted(label);
    setIsOpen(false);
  }, []);
  const keyFound = useMemo(() => {
    return Array.from(SortMap.entries()).find(([, v]) => v === sort)?.[0] || "";
  }, [sort, SortMap]);
  return (
    <div
      className="border border-Gray1 rounded-[10px] px-3.5 py-5 hover:cursor-pointer"
      onClick={() => setIsOpen((p) => !p)}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">Sort By</p>
        <div className="flex items-center gap-1 text-midnightGreen">
          <p className="block">{sorted === null ? keyFound : sorted}</p>

          <BsChevronRight
            className={`text-gray-500 text-[10px] duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>

      <input
        type="hidden"
        name="Sort_M"
        value={SortMap.get(sorted ?? "") || ""}
      />

      {isMobile && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="space-y-12 mb-8">
            {[...SortMap.entries()].map(([label, val], i) => (
              <label
                onClick={() => handleSelect(label)}
                key={i}
                className="cursor-pointer flex justify-between items-center relative"
              >
                <hr className="absolute w-full -bottom-6 text-Gray1" />
                <input
                  type="radio"
                  name="Sort_By"
                  value={val}
                  defaultChecked={val === sort}
                  className="hidden peer"
                />
                <p
                  className={`p-1 text-primaryText peer-checked:text-midnightGreen`}
                >
                  {label}
                </p>
                <BsCheck2 className="text-midnightGreen text-[18px] md:text-[10px] hidden peer-checked:block" />
              </label>
            ))}
          </div>
        </Modal>
      )}

      {!isMobile && (
        <div
          className={` space-y-2 overflow-hidden transition-all duration-300 ease-in-out hidden md:block
          ${
            isOpen
              ? "max-h-[500px] opacity-100 mt-[18px]"
              : "max-h-0 opacity-0 mt-0"
          }
          `}
        >
          {[...SortMap.entries()].map(([label, val], i) => (
            <label
              key={i}
              className="cursor-pointer flex justify-between items-center"
            >
              <input
                type="radio"
                name="Sort_By"
                value={val}
                defaultChecked={val === sort}
                className="hidden peer"
              />
              <p
                className={`p-1 text-primaryText peer-checked:text-midnightGreen`}
              >
                {label}
              </p>
              <BsCheck2 className="text-midnightGreen text-[10px] hidden peer-checked:block" />
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSection;
