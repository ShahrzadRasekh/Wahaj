"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";

type FeaturedProduct = {
  id: number;
  name: string;
  description?: string;
  image: string;
};

type Props = {
  locale: Locale;
  products: FeaturedProduct[];
};

function hrefFor(locale: Locale, path: `/${string}`) {
  return locale === "ar" ? `/ar${path}` : path;
}

export default function FeaturedSection({ locale, products }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";
  const { ids, toggle } = useFavorites();

  return (
    <section id="featured" className="bg-white py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-gray-900">{t.home.featured}</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const isFav = ids.includes(p.id);
            const productHref = hrefFor(locale, `/products/${p.id}`);

            return (
              <article
                key={p.id}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
                {/* Clickable card */}
                <Link href={productHref} className="block">
                  <div className="flex items-center justify-center px-6 pt-8">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-44 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="px-6 pb-6 pt-5">
                    <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>

                    {p.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {p.description}
                      </p>
                    ) : null}

                    {/* Price intentionally not rendered */}
                  </div>
                </Link>

                {/* Favorite button (must not navigate) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle(p.id);
                  }}
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
