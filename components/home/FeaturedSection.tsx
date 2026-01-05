"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";
import type { FeaturedProduct } from "@/lib/data/homeContent";

type Props = {
  locale: Locale;
  gold: FeaturedProduct[];
  silver: FeaturedProduct[];
};

function hrefFor(locale: Locale, path: `/${string}`) {
  return locale === "ar" ? `/ar${path}` : path;
}

export default function FeaturedSection({ locale, gold, silver }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";
  const { ids, toggle } = useFavorites();

  const [tab, setTab] = useState<"Gold" | "Silver">("Gold");

  const products = useMemo(() => {
    return tab === "Gold" ? gold : silver;
  }, [tab, gold, silver]);

  const title = isArabic ? "المنتجات المميزة" : "Featured Products";

  return (
    <section id="featured" className="bg-white py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {isArabic
                ? "تشكيلة مختارة بعناية من الذهب والفضة."
                : "A curated selection across Gold and Silver."}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1">
            <button
              type="button"
              onClick={() => setTab("Gold")}
              className={[
                "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                tab === "Gold"
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-gray-900",
              ].join(" ")}
            >
              {isArabic ? "ذهب" : "Gold"}
            </button>

            <button
              type="button"
              onClick={() => setTab("Silver")}
              className={[
                "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition",
                tab === "Silver"
                  ? "bg-black text-white"
                  : "text-gray-700 hover:text-gray-900",
              ].join(" ")}
            >
              {isArabic ? "فضة" : "Silver"}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const isFav = ids.includes(p.id);
            const productHref = hrefFor(locale, `/products/${p.slug}`);

            return (
              <article
                key={p.id}
                className="relative overflow-hidden rounded-3xl border border-gray-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
              >
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

                    {/* Prices intentionally not rendered */}
                  </div>
                </Link>

                {/* Favorite */}
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
