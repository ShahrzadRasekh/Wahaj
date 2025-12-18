"use client";

import { featuredProducts } from "@/lib/products";
import { useFavorites } from "@/lib/useFavorites";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const favProducts = featuredProducts.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Favourites</h1>
            <p className="mt-2 text-sm text-gray-500">
              Your saved pieces available here anytime.
            </p>
          </div>

          {/* Use real anchor (works even when Next Link is flaky in StackBlitz) */}
          <a
            href="/"
            className="rounded-full border border-gray-200 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-700 hover:bg-gray-50"
          >
            ← Back Home
          </a>
        </div>

        {favProducts.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-gray-100 bg-[#f6f9fc] p-10 text-center">
            <div className="text-3xl text-gray-400">♡</div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              No favourites yet
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Tap the heart on any product to save it here.
            </p>

            <a
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-red-600"
            >
              Browse products
            </a>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {favProducts.map((product) => (
              <article
                key={product.id}
                className="flex flex-col rounded-2xl bg-white shadow-[0_12px_25px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden"
              >
                <div className="relative bg-[#f6f9fc] flex items-center justify-center px-6 pt-6 pb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-auto object-contain"
                  />

                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Remove favourite"
                    className={[
                      "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border transition",
                      isFavorite(product.id)
                        ? "border-red-500 text-red-500 bg-red-50"
                        : "border-gray-200 text-gray-400",
                    ].join(" ")}
                  >
                    ♥
                  </button>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-4 pt-3">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
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

                  {product.description && (
                    <p className="mt-3 text-[12px] leading-snug text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
