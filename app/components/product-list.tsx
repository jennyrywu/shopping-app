"use client";

import SearchBar from "./search-bar";
import AddToShoppingListButton from "./add-to-shopping-list-button";
import type { Product } from "@/app/lib/types";
import { useMemo, useState } from "react";
// useMemo is intentionally unused in the starter.
// Part of the exercise is to reduce unnecessary recomputation.

export default function ProductList({
  products,
  initialShoppingListIds,
}: {
  products: Product[];
  initialShoppingListIds: string[];
}) {
  const [query, setQuery] = useState("");
  const [shoppingListIds, setShoppingListIds] = useState(new Set(initialShoppingListIds));

  const visible = products.filter((p) => (query ? p.name.toLowerCase().includes(query.toLowerCase()) : true));

  return (
    <div className='rounded-xl bg-white p-4 shadow-sm'>
      <div className='mb-3 flex items-center justify-between gap-3'>
        <SearchBar
          value={query}
          onChange={setQuery}
        />
        <div className='text-xs text-gray-500'>{visible.length} shown</div>
      </div>

      <ul className='divide-y'>
        {visible.map((p) => {
          const isInList = shoppingListIds.has(p.id);
          return (
            <li
              key={p.id}
              className='flex items-center justify-between py-3'>
              <div className='pr-2'>
                <div className='font-medium'>{p.name}</div>
                <div className='text-sm text-gray-600'>{p.category}</div>
              </div>
              <div className='mr-3 text-sm font-medium'>${p.price}</div>
              <AddToShoppingListButton
                productId={p.id}
                initialInList={isInList}
                onToggleLocal={() => {
                  setShoppingListIds((prev) => {
                    const next = new Set(prev);
                    if (next.has(p.id)) {
                      next.delete(p.id);
                    } else {
                      next.add(p.id);
                    }
                    return next;
                  });
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
