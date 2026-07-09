// app/not-found.tsx
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
          Page not found
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#0d0f12] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
          >
            Go back home
          </Link>
          <Link href="/careers" className="text-sm font-semibold text-gray-900 hover:underline">
            View open positions <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}