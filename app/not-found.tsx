import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-slate-900">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-3 text-sm text-slate-600">
          This page could not be found.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
