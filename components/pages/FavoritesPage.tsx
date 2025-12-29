"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";
import { featuredProducts } from "@/lib/data/homeContent";

export default function FavoritesPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const { ids, remove, clear, hydrated } = useFavorites();

  const prefix = `/${locale}`;
  const homeHref = `/${locale}`;

  const favoriteProducts = featuredProducts.filter((p) => ids.includes(p.id));

  if (!hydrated) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24">
          <p className="text-sm text-slate-600">Loading…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500">
          <Link href={homeHref} className="hover:text-slate-700">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">{t.common.favorites}</span>
        </nav>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-slate-900">{t.common.favorites}</h1>

          <div className="flex items-center gap-2">
            <Link
              href={`${prefix}/bullion`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-slate-300"
            >
              {locale === "ar" ? "استعرض السبائك" : "Explore Bullion"}
            </Link>

            <button
              type="button"
              onClick={clear}
              disabled={ids.length === 0}
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white disabled:opacity-40"
            >
              {locale === "ar" ? "مسح الكل" : "Clear all"}
            </button>
          </div>
        </div>

        {/* Empty */}
        {favoriteProducts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm text-slate-700">
              {locale === "ar"
                ? "لا توجد عناصر في المفضلة بعد."
                : "No items in your favorites yet."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteProducts.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-center px-4 pt-6 pb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-44 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="px-4 pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{p.name}</h3>
                      <p className="mt-1 text-xs text-slate-600">{p.description}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => remove(p.id)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 hover:border-red-300 hover:text-red-600"
                      aria-label="Remove from favorites"
                    >
                      ♥
                    </button>
                  </div>

                  <div className="mt-4 text-slate-700">
                    <span className="text-[11px] uppercase tracking-[0.18em]">AED</span>{" "}
                    <span className="text-base font-semibold text-slate-900">{p.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
