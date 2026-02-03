export default function AddToShoppingListButton({
  productId,
  initialInList,
  onToggleLocal,
}: {
  productId: string;
  initialInList: boolean;
  onToggleLocal: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onToggleLocal}
      className='rounded-lg border px-3 py-2 text-sm hover:bg-gray-50'
      aria-label={`Toggle shopping list for ${productId}`}>
      {initialInList ? "In list" : "Add to shopping list"}
    </button>
  );
}
