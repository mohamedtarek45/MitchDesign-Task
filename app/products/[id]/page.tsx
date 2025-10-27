import ProductDetailsPage from "@/components/products/ProductDetailsPage";
import { getProduct } from "@/lib/api/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | MyShop",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: `${product.name}`,
    description: product.description.slice(0, 160),
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();
  return (
    <div>
      <ProductDetailsPage id={id} initialProduct={product!} />
    </div>
  );
};

export default page;
