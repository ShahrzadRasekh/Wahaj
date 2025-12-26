"use client";

import Link from "next/link";
import { useFavorites } from "@/lib/useFavorites";
import { featuredProducts } from "@/lib/products"; // If you have a central products list
// If you DO NOT have this file, read the note below.

export default function FavoritesPage() {
  const { ids, hydrated, remove, clear } = useFavorites();

  // Map ids to product objects (adjust source as needed)
  const items = featuredProducts.filter((p) => ids.includes(p.id));

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Favorites</h1>
            <p className="mt-2 text-sm text-gray-500">
              Saved items you liked.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 hover:bg-gray-50"
            >
              Back home
            </Link>

            <button
              onClick={clear}
              disabled={!hydrated || ids.length === 0}
              className="rounded-full bg-red-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-red-600 disabled:opacity-50"
            >
              Clear
            </button>
          </div>
        </div>

        {!hydrated ? (
          <div className="mt-10 text-sm text-gray-500">Loading…</div>
        ) : ids.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-gray-100 bg-gray-50 p-10 text-center">
            <p className="text-sm text-gray-600">
              You don’t have any favorites yet.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-black/90"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((product) => (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_12px_25px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-center bg-[#f6f9fc] px-6 pt-6 pb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-auto object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="mt-2 text-xs text-gray-500">
                    <span className="text-[11px] uppercase tracking-[0.18em]">
                      AED
                    </span>{" "}
                    <span className="text-base font-semibold text-gray-900">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => remove(product.id)}
                    className="mt-4 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 hover:border-red-300 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
