import type {ProductDetail} from '@/lib/types/types';

export async function getProduct(id: string): Promise<ProductDetail | null> {
  try {
    const res = await fetch(`https://task.woosonicpwa.com/api/products/${id}`, {
      headers: {
        "Accept-Language": "en",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null;
  }
}
