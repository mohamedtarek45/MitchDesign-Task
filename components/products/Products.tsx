import NavbarFilter from "../layout/NavbarFilter";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <div>
      <p className="text-[12px] font-bold hidden md:block">
        <span className="text-black/60">Home</span> / Products
      </p>
      <p className=" hidden md:block font-space-grotesk text-secondaryText text-xl">
        Men&apos;s Wear
      </p>
      <NavbarFilter/>
      <ProductsList/>
    </div>
  );
};

export default Products;
