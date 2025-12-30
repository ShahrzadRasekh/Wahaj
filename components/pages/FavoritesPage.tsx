"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";
import { featuredProducts, worthProducts } from "@/lib/data/homeContent";

type Props = {
  locale: Locale;
};

export default function FavoritesPage({ locale }: Props) {
  const t = getDict(locale);
  const { ids, toggle, clear, hydrated } = useFavorites();

  const homeHref = locale === "ar" ? "/ar" : "/";
  const bullionHref = locale === "ar" ? "/ar/bullion" : "/bullion";

  const allProducts = [...featuredProducts, ...worthProducts];
  const favorites = allProducts.filter((p: any) => ids.includes(p.id));

  const ui = {
    title: locale === "ar" ? "المفضلة" : "Favorites",
    backHome: locale === "ar" ? "العودة للرئيسية" : "Back to home",
    clearAll: locale === "ar" ? "مسح الكل" : "Clear all",
    empty: locale === "ar" ? "لا توجد عناصر مفضلة بعد" : "No favorites yet",
    emptyHint:
      locale === "ar"
        ? "أضف منتجات إلى المفضلة لتظهر هنا."
        : "Add products to favorites and they’ll appear here.",
    goBullion: locale === "ar" ? "استعرض السبائك" : "Explore Bullion",
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-slate-900">{ui.title}</h1>

          <div className="flex items-center gap-3">
            <Link
              href={homeHref}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-50"
            >
              {ui.backHome}
            </Link>

            <button
              type="button"
              onClick={() => clear()}
              className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-slate-900"
              disabled={!hydrated || ids.length === 0}
            >
              {ui.clearAll}
            </button>
          </div>
        </div>

        <div className="mt-10">
          {hydrated && favorites.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-[#f6f9fc] px-6 py-14 text-center">
              <p className="text-sm font-semibold text-slate-900">{ui.empty}</p>
              <p className="mt-2 text-sm text-slate-600">{ui.emptyHint}</p>

              <div className="mt-6 flex justify-center">
                <Link
                  href={bullionHref}
                  className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-slate-900"
                >
                  {ui.goBullion} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((product: any) => (
                <article
                  key={product.id}
                  className="relative overflow-hidden rounded-3xl bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)] border border-slate-100"
                >
                  <div className="relative flex items-center justify-center px-4 pt-8 pb-2">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-44 w-auto object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-44 w-44 rounded-2xl bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-700" />
                    )}

                    <button
                      type="button"
                      onClick={() => toggle(product.id)}
                      className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-red-200 bg-white/95 text-red-600 shadow-sm hover:border-red-300"
                      aria-label="Remove from favorites"
                      title="Remove from favorites"
                    >
                      <span className="text-lg leading-none">♥</span>
                    </button>
                  </div>

                  <div className="px-6 pb-6 pt-3">
                    <h3 className="text-base font-semibold text-slate-900">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {product.description}
                    </p>

                    {/* Price intentionally removed */}
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
