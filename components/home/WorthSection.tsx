"use client";

import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import type { WorthProduct } from "@/lib/data/homeContent";

type Props = {
  locale: Locale;
  products: WorthProduct[];
};

export default function WorthSection({ locale, products }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold text-gray-900">{t.home.worth}</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-center px-6 pt-8">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-36 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="px-6 pb-6 pt-5">
                <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-2 text-xs text-gray-500">{p.metal}</p>

                {/* Price removed intentionally */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
