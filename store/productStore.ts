import { create } from "zustand";
import type {Rating,SizeParam,Sort,Price,Brand} from "@/lib/types/types";
type Language = "en" | "fr";
type State = {
  rating: Rating;
  sort: Sort;
  price: Price;
  size: SizeParam;
  page: number;
  Language: Language;
  brand: Brand;
  setRating: (rating: Rating) => void;
  setSort: (sort: Sort) => void;
  setPrice: (price: Price) => void;
  setSize: (size: SizeParam) => void;
  setPage: (page: number) => void;
  setLanguage: () => void;
  setBrand: (brand: Brand) => void;
};
export const useProductStore = create<State>((set) => ({
  sort: "",
  price: "",
  size: "",
  Language: "en",
  brand: "",
  page: 1,
  rating: "",
  setRating: (rating: Rating) => set({ rating, page: 1 }),
  setPrice: (price: Price) => set({ price, page: 1 }),
  setSort: (sort: Sort) => set({ sort, page: 1 }),
  setSize: (size: SizeParam) => set({ size, page: 1 }),
  setPage: (page: number) => set({ page }),
  setLanguage: () =>
    set((state) => ({ Language: state.Language === "en" ? "fr" : "en" })),
  setBrand: (brand: Brand) => set({ brand, page: 1 }),
}));
