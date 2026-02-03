"use server";

import { revalidateTag } from "next/cache";

export async function toggleShoppingList(productId: string) {
  await fetch("http://localhost:3000/api/shopping-list", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  revalidateTag("shopping-list", {});
}
