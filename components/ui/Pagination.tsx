"use client";
import type { Pagination as PaginationType } from "../../lib/types/types";
import { useProductStore } from "../../store/productStore";

const Pagination = ({ pagination }: { pagination: PaginationType }) => {
  const changePage = useProductStore((state) => state.setPage);

  const pagestoShow: number[] = [];
  if (pagination.current_page > 1)
    pagestoShow.push(pagination.current_page - 1);
  pagestoShow.push(pagination.current_page);
  if (pagination.current_page < pagination.total_pages)
    pagestoShow.push(pagination.current_page + 1);

  const handleChangePage = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    changePage(page)
  };

  return (
    <div className="flex justify-center items-center gap-3 my-8">
      <button
        onClick={() =>
          pagination.current_page > 1 &&
          handleChangePage(pagination.current_page - 1)
        }
        disabled={pagination.current_page === 1}
        className="px-4 py-2 text-sm rounded-xl border border-gray-300 hover:bg-gray-100 hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        Prev
      </button>

      <div className="flex items-center gap-2">
        {pagestoShow.map((page) => (
          <button
            key={page}
            onClick={() => handleChangePage(page)}
            className={`w-9 h-9 flex items-center justify-center rounded-full border hover:cursor-pointer transition-all text-sm font-medium
              ${
                pagination.current_page === page
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          pagination.current_page < pagination.total_pages &&
          handleChangePage(pagination.current_page + 1)
        }
        disabled={pagination.current_page === pagination.total_pages}
        className="px-4 py-2 text-sm rounded-xl border border-gray-300 hover:bg-gray-100  hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
