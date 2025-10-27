import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "@/store/productStore";
import { Product, Pagination ,ProductDetail} from "@/lib/types/types";


export const useGetProducts = () => {
  const page = useProductStore((state) => state.page);
  const Language = useProductStore((state) => state.Language);
  const brand = useProductStore((state) => state.brand);
  const sort = useProductStore((state) => state.sort);
  const price = useProductStore((state) => state.price);
  const size = useProductStore((state) => state.size);
  const rating = useProductStore((state) => state.rating);

  const GetProducts = async () => {
    const response = await fetch(
      `https://task.woosonicpwa.com/api/products?&page=${page}${
        brand.length > 0 ? `&brand=${brand}` : ""
      }${sort.length > 0 ? `&${sort}` : ""}${
        price.length > 0 ? `&${price}` : ""
      }${size.length > 0 ? `&${size}` : ""}${
        rating.length > 0 ? `&${rating}` : ""
      } 
      `,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Language": Language,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  };
  const { isPending, error, data, isError } = useQuery({
    queryKey: ["products", Language, page, brand, sort, price, size, rating],
    queryFn: GetProducts,
    refetchOnWindowFocus: true,
  });
  const Products: Product[] = data?.data;
  const pagination: Pagination = data?.pagination;
  return { isPending, error, Products, isError, pagination };
};

export const useGetProduct = (id: string,initialProduct: ProductDetail) => {
  const Language = useProductStore((state) => state.Language);
  const GetProduct = async () => {
    const response = await fetch(
      `https://task.woosonicpwa.com/api/products/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Language": Language,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  };
  const { isPending, error, data, isError } = useQuery({
    queryKey: ["product", id, Language],
    initialData: { data: initialProduct },
    queryFn: GetProduct,
    refetchOnWindowFocus: false,
  });
  const Product: ProductDetail = data?.data ;
  return { isPending, error, Product, isError };
};
