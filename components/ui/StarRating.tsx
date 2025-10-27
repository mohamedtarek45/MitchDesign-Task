import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating  }: { rating: number; className?: string }) => {
  return (
    <div className={`flex gap-1 text-yellow-500  w-fit `}>
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;
        if (starNumber <= Math.floor(rating)) return <FaStar className="size-2.5 md:size-4" key={i} />;
        if (starNumber === Math.ceil(rating) && rating % 1 >= 0.5) return <FaStarHalfAlt className="size-2.5 md:size-4" key={i} />;
        return <FaRegStar className="size-2.5 md:size-4" key={i} />;
      })}
    </div>
  );
};

export default StarRating;
