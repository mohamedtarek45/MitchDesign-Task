"use client";
import { useGetProducts } from "@/hooks/api/api-hooks";
import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("./ProductCard"), {
  ssr: false,
});
const Pagination = dynamic(() => import("../ui/Pagination"), {
  ssr: false,
});

const Skeleton = dynamic(() => import("../ui/Skeleton"), {
  ssr: false,
});

const ProductsList = () => {
  const { Products, isPending, error, pagination } = useGetProducts();

  if (error) return <p>Something went wrong!</p>;
  return (
    <>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[23px] gap-y-[15px] md:gap-y-6 md:gap-x-10   ">
        {isPending && <Skeleton />}
        {Products &&
          Products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {!isPending && <Pagination pagination={pagination} />}
    </>
  );
};

export default ProductsList;
