"use client";
import type { Product } from "@/lib/types/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState, MouseEvent, memo } from "react";
import StarRating from "../ui/StarRating";
import LoadingComponent from "../ui/LoadingComponent";
import PortalLoading from "../ui/PortalLoading";
import ImageError from "../ui/ImageError";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
const ProductCard = memo(({ product }: { product: Product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    startTransition(() => {
      router.push(`/products/${product.id}`);
    });
  };
  if (isPending) return <PortalLoading />;
  return (
    <div onClick={(e) => handleClick(e)} className="hover:cursor-pointer">
      <div className="relative h-[232px] md:h-80 rounded-2xl overflow-hidden">
        <Image
          src={product.image}
          alt="Product"
          fill
          onLoadingComplete={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
        />
        {error && <ImageError />}
        {!loaded && <LoadingComponent />}
        <Heart
          className={`absolute top-2 right-2  text-5xl  text-[#8F959E] hover:cursor-pointer ${
            isFavorite ? "fill-pink-400" : "fill-transparent"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite((p) => !p);
          }}
        />
      </div>
      <p className="text-[11px] font-medium font-inter mt-1 md:text[15px]">
        {product.name}
      </p>
      <p className="text-[11px] font-medium font-inter md:text[15px]">
        {product.brands[0]}
      </p>

      <div className="flex justify-between">
        <p className="text-[13px] font-semibold font-inter md:text-[17px]">
          ${product.price}
        </p>
        <StarRating rating={product.average_rating} />
      </div>
    </div>
  );
});
ProductCard.displayName = "ProductCard";  
export default ProductCard;
