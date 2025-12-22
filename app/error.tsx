"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f5f5f7] text-slate-900">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-sm text-slate-600">
            An unexpected error occurred. Try again, or go back home.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => reset()}
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Try again
            </button>

            <Link
              href="/"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Back home
            </Link>
          </div>

          <pre className="mt-8 whitespace-pre-wrap rounded-2xl bg-white p-4 text-xs text-slate-600 shadow">
            {error?.message}
          </pre>
        </div>
      </body>
    </html>
  );
}
