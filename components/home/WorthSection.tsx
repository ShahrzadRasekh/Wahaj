"use client";

import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";

type WorthProduct = {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string; // keep in data, not rendered
  badge?: { label: string; variant?: string };
};

type Props = {
  locale: Locale;
  products: WorthProduct[];
};

export default function WorthSection({ locale, products }: Props) {
  const t = getDict(locale);
  const { ids, toggle } = useFavorites();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {t.home.worth}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {t.home.worth}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const isFav = ids.includes(product.id);

            return (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)]"
              >
                <div className="relative flex items-center justify-center px-4 pt-7 pb-3">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-40 w-40 rounded-2xl bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-700" />
                  )}

                  {product.badge?.label && (
                    <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold text-white">
                      {product.badge.label}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => toggle(product.id)}
                    className={[
                      "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 backdrop-blur transition",
                      isFav
                        ? "border-red-300 text-red-600 hover:border-red-400"
                        : "border-slate-200 text-slate-700 hover:border-slate-300",
                    ].join(" ")}
                    aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                    title={isFav ? "Remove from favorites" : "Add to favorites"}
                  >
                    <span className="text-lg leading-none">♥</span>
                  </button>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>

                  {/* Price intentionally removed */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
