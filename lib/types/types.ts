export type Filters = {
  size?: string | string[];
  brand?: string;
  status?: string;
  min_price?: string;
  max_price?: string;
  min_rating?: string;
  sort_by?: string;
  sort_order?: "asc" | "desc";
};
export type Brand = "Nike" | "Adidas" | "Puma" | "Reebok" | "";
export type Product = {
  id: number;
  image: string;
  price: string; // أو number لو بتحول الـ string لرقم
  status: "active" | "inactive";
  name: string;
  description: string;
  brands: string[];
  sizes: string[];
  average_rating: number;
  reviews_count: number;
  created_at: string; // ممكن تستخدم Date لو بتحولها
  updated_at: string; // ممكن تستخدم Date لو بتحولها
};
export type Pagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
};
 export type Review = {
  reviewer: string;
  comment: string;
  rating: number;
  created_at: string;
};
 export type ProductDetail = {
  id: number;
  image: string;
  price: string;
  status: "active" | "inactive";
  name: string;
  description: string;
  brands: string[];
  available_sizes: string[];
  average_rating: number;
  reviews_count: number;
  reviews: Review[];
  created_at: string;
  updated_at: string;
};



export type Sort =
  | ""
  | "sort_by=price&sort_order=asc"
  | "sort_by=price&sort_order=desc"
  | "sort_by=rating&sort_order=desc";
export type Price =
  | ""
  | `max_price=${number}`
  | `min_price=${number}`
  | `min_price=${number}&max_price=${number}`;

export type Size = "XS" | "S" | "M" | "L" | "XL";
export type SizeParam =
  | ""
  | `size=${Size}`
  | `${`size=${Size}`}&${`size=${Size}`}`
  | `${`size=${Size}`}&${`size=${Size}`}&${`size=${Size}`}`
  | `${`size=${Size}`}&${`size=${Size}`}&${`size=${Size}`}&${`size=${Size}`}`
  | `${`size=${Size}`}&${`size=${Size}`}&${`size=${Size}`}&${`size=${Size}`}&${`size=${Size}`}`;
export type Rating = "" | `min_rating=${number}`;