import API_URL from "./api";

export async function getProducts(limit = 4) {
  const response = await fetch(`${API_URL}/products?limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
}
