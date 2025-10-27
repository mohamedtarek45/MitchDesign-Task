import { useProductStore } from "@/store/productStore";
import CollapsibleSection from "../ui/CollapsibleSection";
const RatingSection = () => {
  const ratingMap = new Map([
    ["4+", "4"],
    ["3+", "3"],
    ["2+", "2"],
    ["All ratings", ""],
  ]);
  const rating = useProductStore((state) => state.rating);
  return (
    <CollapsibleSection title="Rating">
      {[...ratingMap.entries()].map(([label, val], i) => (
        <label key={i} className="cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={val}
            className="hidden peer"
            defaultChecked={val === rating}
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

export default RatingSection;
