export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search products...'
      className='w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring'
    />
  );
}
