import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import StarRating from "../ui/StarRating";
import type { Review } from "@/lib/types/types";


const ReviewsSection = ({ reviews }: { reviews: Review[] }) => {
  const [showAll, setShowAll] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.toLocaleString("en-GB", { day: "2-digit" });
    const month = date.toLocaleString("en-GB", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };


  const visibleReviews = showAll ? reviews : reviews.slice(0, 1);

  return (
    <div>
     
      <div className="flex justify-between font-inter">
        <p className="font-semibold text-[17px] text-[#1D1E20]">Reviews</p>
        {reviews.length > 1 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="font-semibold text-[15px] text-[#8F959E] hover:text-[#1D1E20] transition hover:cursor-pointer"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        )}
      </div>


      <div className="space-y-[15px] mt-3">
        {visibleReviews.map((r, i) => (
          <div key={i}>
            <div className="flex justify-between">
              <div className="flex gap-2.5 font-inter">
                <div className="relative rounded-full size-10 overflow-hidden bg-[#E9E9E9]" />
                <div>
                  <p className="text-[15px] font-medium text-[#1D1E20]">
                    {r.reviewer}
                  </p>
                  <p className="text-[13px] text-[#8F959E] flex items-center gap-[7px] -translate-y-1">
                    <FaRegClock />
                    {formatDate(r.created_at)}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 justify-end">
                  <p className="font-inter text-[15px]">{r.rating}</p>
                  <span className="text-[11px] font-inter text-[#8F959E] ">
                    rating
                  </span>
                </div>
                <StarRating rating={r.rating} />
              </div>
            </div>
            <p className="mt-1 text-[14px] text-[#555]">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
