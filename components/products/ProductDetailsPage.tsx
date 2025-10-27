"use client";
import Image from "next/image";

import { useGetProduct } from "@/hooks/api/api-hooks";
import { useState } from "react";
import ReviewsSection from "./ReviewsSection";
import LoadingComponent from "../ui/LoadingComponent";
import ImageError from "../ui/ImageError";
import type { ProductDetail } from "@/lib/types/types";

const ProductDetailsPage = ({
  id,
  initialProduct,
}: {
  id: string;
  initialProduct: ProductDetail;
}) => {
  const [isExpanded, toggleReadMore] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imageError, setimageError] = useState(false);
  const { isPending, error, Product, isError } = useGetProduct(
    id,
    initialProduct
  );
  if (error) return <p>Something went wrong!</p>;
  if (isPending) return <LoadingComponent />;
  if (isError) return <p>Something went wrong!</p>;
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-11 md:mt-28 ">
      <div
        className="
    relative 
    left-1/2 -mx-[50vw] w-screen 
    h-[378px] 
    md:mx-0 md:left-0 md:w-[350px] md:h-[400px] 
    lg:w-[510px] lg:h-[500px] 
    md:rounded-md
    overflow-hidden
  "
      >
        <Image
          src={Product.image}
          alt="Product"
          fill
          className="object-cover object-center"
          onLoadingComplete={() => setLoaded(true)}
          onError={() => {
            setimageError(true);
            setLoaded(true);
          }}
        />
        {imageError && <ImageError />}
        {!loaded && <LoadingComponent />}
      </div>
      <div className="space-y-6 my-[15px] md:my-8">
        {/* --- Product name Section --- */}
        <div className="flex justify-between">
          <div className="font-inter">
            <p className=" text-[13px] md:text-[15px] text-[#8F959E]">
              Men&apos;s Printed Pullover Hoodie
            </p>
            <p className="text-[22px] font-semibold  text-[#1D1E20]">
              {Product.name}
            </p>
          </div>
          <div>
            <p className=" text-[13px] md:text-[15px] text-[#8F959E]">Price</p>
            <p className="text-[22px] font-semibold  text-[#1D1E20]">
              ${Product.price}
            </p>
          </div>
        </div>
        {/* --- Product name Section --- */}
        <div className="space-y-2.5">
          <div className="flex justify-between font-inter">
            <p className="font-semibold text-[17px] md:text-xl text-[#1D1E20]">
              Size
            </p>
            <p className="text-[15px] md:text-lg text-[#8F959E]">Size Guide</p>
          </div>
          <div className="flex gap-2.5">
            {["XS", "S", "M", "L", "XL"].map((s, i) => (
              <label
                key={i}
                className="rounded-[10px] font-semibold text-[17px] font-inter bg-[#F5F6FA] w-[70px] h-[60px] flex items-center justify-center cursor-pointer"
              >
                <input
                  disabled={!Product.available_sizes.includes(s)}
                  type="radio"
                  name="sizeDetails"
                  value={s}
                  className="hidden peer"
                />
                <span className="peer-checked:bg-midnightGreen peer-checked:text-white w-full h-full flex items-center justify-center rounded-[10px] peer-disabled:cursor-not-allowed peer-disabled:text-black/30">
                  {s}
                </span>
              </label>
            ))}
          </div>
        </div>
        {/* --- Product Description Section --- */}
        <div className="space-y-2.5">
          <p className="font-inter font-semibold text-[17px] md:text-xl text-[#1D1E20]">
            Description
          </p>

          <div className="text-[15px] font-inter text-[#8F959E] leading-relaxed">
            <p>
              {isExpanded
                ? Product.description
                : Product.description.slice(0, 100)}
              {Product.description.length > 100 && (
                <span
                  onClick={() => toggleReadMore((p) => !p)}
                  className="text-midnightGreen font-semibold cursor-pointer ml-1"
                >
                  {isExpanded ? "Read less" : "Read more ..."}
                </span>
              )}
            </p>
          </div>
        </div>
        <ReviewsSection reviews={Product.reviews} />
        {/* --- Product ADD TO CART  Section --- */}
        <div>
          <div className="flex justify-between items-center font-inter">
            <div>
              <p className="text-[18px] text-[#1D1E20]">Total Price</p>
              <p className="text-[#8F959E] text-[11px]">with VAT,SD</p>
            </div>
            <p className="text-[17px] font-semibold">
              ${parseFloat(Product.price) + 5}
            </p>
          </div>
          <div className="bg-midnightGreen rounded-xl font-space-grotesk text-white py-4 text-center mt-3">
            <p>+ Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
