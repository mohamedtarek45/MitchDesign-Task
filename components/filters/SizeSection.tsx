import CollapsibleSection from "../ui/CollapsibleSection";
const SizeSection = () => {
  const sizeMap = new Map([
    ["X Small", "XS"],
    ["Small", "S"],
    ["Medium", "M"],
    ["Large", "L"],
    ["X Large", "XL"],
  ]);
  return (
    <CollapsibleSection title="Size">
      {[...sizeMap.entries()].map(([label, val], i) => (
        <label key={i} className="cursor-pointer">
          <input
            type="checkbox"
            name="size"
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

export default SizeSection;
