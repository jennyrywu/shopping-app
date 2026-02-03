import type { Product } from "./types";

export async function getProducts(opts?: { cache?: RequestCache }) {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: opts?.cache ?? "no-store",
  });

  if (!res.ok) throw new Error("Failed to load products");
  return (await res.json()) as Product[];
}

export async function getShoppingListIds(opts?: { cache?: RequestCache }) {
  const res = await fetch("http://localhost:3000/api/shopping-list", {
    cache: opts?.cache ?? "no-store",
  });

  if (!res.ok) throw new Error("Failed to load shopping list");
  const data = (await res.json()) as { ids: string[] };
  return data.ids;
}
