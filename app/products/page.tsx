import FilterSection from "@/components/filters/FilterSection";
import Products from "@/components/products/Products";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse all our latest products, brands, and best deals.",
};
const page = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-[266px_1fr] gap-10 md:mt-16 relative" id="box">
      <FilterSection />
      <Products />
    </div>
  );
};

export default page;
