// components/home/FeaturedSection.tsx
"use client";

import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { useFavorites } from "@/lib/useFavorites";

type BadgeVariant = "gold" | "ruby" | "black";

type ProductBadge =
  | string
  | {
      label: string;
      variant?: BadgeVariant;
    };

export type FeaturedProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
  badge?: ProductBadge;
};

type Props = {
  locale: Locale;
  products: FeaturedProduct[];
};

function LuxuryBadge({
  label,
  variant = "gold",
}: {
  label: string;
  variant?: "gold" | "black" | "ruby";
}) {
  const styles =
    variant === "black"
      ? "bg-gradient-to-r from-[#0b0f14] via-[#111827] to-[#0b0f14] text-white border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
      : variant === "ruby"
      ? "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] text-white border-white/10 shadow-[0_10px_25px_rgba(185,28,28,0.25)]"
      : "bg-gradient-to-r from-[#f7e7b0] via-[#e5b472] to-[#caa24b] text-[#1b1408] border-white/40 shadow-[0_10px_25px_rgba(229,180,114,0.25)]";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5",
        "text-[9px] font-semibold uppercase tracking-[0.20em]",
        "backdrop-blur-sm",
        styles,
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );
}

export default function FeaturedSection({ locale, products }: Props) {
  const t = getDict(locale);
  const { ids, toggle } = useFavorites();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {t.home.featured}
          </h2>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100">
              ←
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100">
              →
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const isFav = ids.includes(product.id);

            return (
              <article
                key={product.id}
                className="flex flex-col rounded-2xl bg-white shadow-[0_12px_25px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden"
              >
                <div className="relative bg-[#f6f9fc] flex items-center justify-center px-6 pt-6 pb-2">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-40 w-full rounded-xl bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-700" />
                  )}

                  {product.badge && (
                    <div className="absolute right-4 top-4 z-10">
                      <LuxuryBadge
                        label={
                          typeof product.badge === "string"
                            ? product.badge
                            : product.badge.label
                        }
                        variant={
                          typeof product.badge === "string"
                            ? "gold"
                            : (product.badge.variant ?? "gold")
                        }
                      />
                    </div>
                  )}
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

                  <div className="mt-3 flex items-start justify-between gap-3">
                    <p className="text-[12px] leading-snug text-gray-500 line-clamp-2">
                      {product.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggle(product.id)}
                      aria-label="Toggle favourite"
                      className={[
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
                        isFav
                          ? "border-red-500 text-red-500 bg-red-50"
                          : "border-gray-200 text-gray-400 hover:border-red-400 hover:text-red-500",
                      ].join(" ")}
                    >
                      {isFav ? "♥" : "♡"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
