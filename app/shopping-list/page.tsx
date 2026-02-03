import { getProducts, getShoppingListIds } from "@/app/lib/api";

export default async function ShoppingListPage() {
  const [products, shoppingListIds] = await Promise.all([
    getProducts({ cache: "no-store" }),
    getShoppingListIds({ cache: "no-store" }),
  ]);

  const inList = new Set(shoppingListIds);
  const items = products.filter((p) => inList.has(p.id));

  return (
    <main className='space-y-4'>
      <div className='rounded-xl bg-white p-4 shadow-sm'>
        <h1 className='text-xl font-semibold'>Shopping List</h1>
        <p className='text-sm text-gray-600'>Items you’ve added.</p>
      </div>

      <div className='rounded-xl bg-white p-4 shadow-sm'>
        {items.length === 0 ? (
          <div className='text-sm text-gray-600'>Your shopping list is empty.</div>
        ) : (
          <ul className='divide-y'>
            {items.map((p) => (
              <li
                key={p.id}
                className='py-3'>
                <div className='font-medium'>{p.name}</div>
                <div className='text-sm text-gray-600'>
                  {p.category} • ${p.price}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
