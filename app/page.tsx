import { getProducts, getShoppingListIds } from "@/app/lib/api";
import ProductList from "@/app/components/product-list";

export default async function Page() {
  const [products, shoppingListIds] = await Promise.all([
    getProducts({ cache: "no-store" }),
    getShoppingListIds({ cache: "no-store" }),
  ]);

  return (
    <main className='space-y-4'>
      <div className='rounded-xl bg-white p-4 shadow-sm'>
        <h1 className='text-xl font-semibold'>Products</h1>
        <p className='text-sm text-gray-600'>
          Fix issues: RSC boundaries, server actions for shopping list, caching/perf, Tailwind polish.
        </p>
      </div>

      <ProductList
        products={products}
        initialShoppingListIds={shoppingListIds}
      />
    </main>
  );
}
