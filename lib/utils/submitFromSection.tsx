"use client";
import { FormEvent } from "react";
import { useProductStore } from "../../store/productStore";
import type {Sort,Price,SizeParam,Rating,Size} from "../types/types";
const submitFromSection = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const setSort = useProductStore.getState().setSort;
  const setPrice = useProductStore.getState().setPrice;
  const setSize = useProductStore.getState().setSize;
  const setRating = useProductStore.getState().setRating;

  const formData = new FormData(e.currentTarget);
  const sort = formData.get("Sort_By") as Sort;
  const sortM = formData.get("Sort_M");
  const sizes = formData.getAll("size");
  const ratings = formData.get("rating");
  const prices = formData
    .getAll("price")
    .map((p) => (p as string).split(",").map(Number));
  const priceParams = new URLSearchParams();
  if (prices.length > 0) {
    const min = Math.min(...prices.map(([min]) => min));
    const max = Math.max(...prices.map(([, max]) => max));
    if (min > 0) priceParams.append("min_price", String(min));
    if (max < 1000) priceParams.append("max_price", String(max));
  }
  const sizeParams = new URLSearchParams();
  if (sizes.length > 0) {
    sizes.forEach((s) => {
      sizeParams.append("size", s as Size);
    });
  }
  const ratingParams = new URLSearchParams();
  if (ratings) ratingParams.append("min_rating", ratings as string);

  if (sort&&sort.length > 0) setSort(sort as Sort);
  else setSort(sortM as Sort);
  setPrice(priceParams.toString() as Price);
  setSize(sizeParams.toString() as SizeParam);
  setRating(ratingParams.toString() as Rating);
};
export default submitFromSection;
