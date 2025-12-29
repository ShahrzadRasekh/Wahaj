"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";
import { featuredProducts } from "@/lib/data/homeContent";

export default function FavoritesPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  const isArabic = locale === "ar";
  const homeHref = isArabic ? "/ar" : "/";

  const { ids, remove, clear, hydrated } = useFavorites();

  const favProducts = featuredProducts.filter((p) => ids.includes(p.id));

  const ui = {
    title: isArabic ? "المفضلة" : "Favorites",
    backHome: isArabic ? "العودة إلى الرئيسية" : "Back to Home",
    clearAll: isArabic ? "مسح الكل" : "Clear all",
    emptyTitle: isArabic ? "لا توجد عناصر في المفضلة" : "No favorites yet",
    emptyBody: isArabic
      ? "ابدأ بإضافة العناصر التي تعجبك لعرضها هنا."
      : "Start saving items you like, and they’ll appear here.",
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-3xl font-semibold text-slate-900">{ui.title}</h1>

          <div className="flex items-center gap-3">
            {/* CHANGED: Explore Bullion -> Back to Home */}
            <Link
              href={homeHref}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              {ui.backHome}
            </Link>

            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {ui.clearAll}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10">
          {!hydrated ? null : favProducts.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
              <p className="text-base font-semibold text-slate-900">
                {ui.emptyTitle}
              </p>
              <p className="mt-2 text-sm text-slate-600">{ui.emptyBody}</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favProducts.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-3xl bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)] border border-gray-100"
                >
                  <div className="relative flex items-center justify-center px-4 pt-8 pb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-36 w-auto object-contain"
                      loading="lazy"
                    />

<button
  type="button"
  onClick={() => remove(product.id)}
  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm border border-red-200 text-red-600 hover:text-red-700 hover:border-red-300 hover:bg-white transition"
  aria-label="Remove from favorites"
>
  ♥
</button>

                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {product.description}
                    </p>

                    {/* REMOVED: Price block entirely */}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
