import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/products"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
