"use client";
import { useMemo } from "react";

import CollapsibleSection from "../ui/CollapsibleSection";

const PriceSection = () => {

const priceMap = useMemo(
  () =>
    new Map([
      ["Less than $50", "0,50"],
      ["$50-$100", "50,100"],
      ["$100-$200", "100,200"],
      ["$200-$500", "200,500"],
      ["More than $500", "500,1000"],
    ]),
  []
);
  return (
    <CollapsibleSection title="Price">
      {[...priceMap.entries()].map(([label, val], i) => (
        <label key={i} className="cursor-pointer">
          <input
            type="checkbox"
            name="price"
            value={val}
            className="hidden peer"
          />
          <p
            className={`p-1 rounded-md bg-Gray1 text-secondaryText peer-checked:bg-Green2 peer-checked:text-midnightGreen`}
          >
            {label}
          </p>
        </label>
      ))}
    </CollapsibleSection>
  );
};

export default PriceSection;
