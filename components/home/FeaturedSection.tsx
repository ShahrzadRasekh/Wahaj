"use client";

import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";

type FeaturedProduct = {
  id: number;
  title: string;
  description?: string; // <-- IMPORTANT: optional fixes Vercel build
  image: string;
  // price?: string; // keep if exists in data, but we won't render it
};

type Props = {
  locale: Locale;
  products: FeaturedProduct[];
};

export default function FeaturedSection({ locale, products }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";

  const { ids, toggle } = useFavorites();

  return (
    <section className="bg-white py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-gray-900">{t.home.featured}</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const isFav = ids.includes(p.id);

            return (
              <article
                key={p.id}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-center px-6 pt-8">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-44 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="px-6 pb-6 pt-5">
                  <h3 className="text-sm font-semibold text-gray-900">{p.title}</h3>

                  {p.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {p.description}
                    </p>
                  ) : null}

                  {/* Price removed intentionally */}
                </div>

                {/* Favorite button */}
                <button
                  type="button"
                  onClick={() => toggle(p.id)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm"
                  aria-label="Toggle favorite"
                >
                  <span className={isFav ? "text-red-500" : "text-slate-800"}>
                    {isFav ? "♥" : "♡"}
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
