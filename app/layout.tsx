import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Catalog Interview",
  description: "Next.js App Router + RSC + Server Actions interview",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gray-50 text-gray-900'>
        <div className='mx-auto max-w-4xl p-6'>
          <header className='mb-6 flex items-center justify-between'>
            <Link
              href='/'
              className='text-lg font-semibold'>
              Product Catalog
            </Link>
            <nav className='flex gap-3 text-sm'>
              <Link
                className='underline'
                href='/'>
                Products
              </Link>
              <Link
                className='underline'
                href='/shopping-list'>
                Shopping List
              </Link>
            </nav>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
