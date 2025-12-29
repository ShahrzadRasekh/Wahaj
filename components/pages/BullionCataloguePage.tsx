"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { catalogueBrands } from "@/lib/data/bullionCatalogueContent";

type Props = {
  locale: Locale;
};

function hrefFor(locale: Locale, path: string) {
  // path must start with "/"
  return locale === "ar" ? `/ar${path}` : path;
}

export default function BullionCataloguePage({ locale }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";

  const ui = {
    breadcrumbCatalogue: isArabic ? "كتالوج وهـاج" : "Wahaj Catalogue",
    title: isArabic ? "كتالوج وهـاج" : "WAHAJ CATALOGUE",
    explore: isArabic ? "استعرض" : "Explore",
  };

  return (
    <div className="min-h-screen bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-4 text-xs text-gray-500">
          <Link href={hrefFor(locale, "/")} className="hover:text-gray-800">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">{ui.breadcrumbCatalogue}</span>
        </nav>

        {/* Title strip */}
        <section className="mb-10 rounded-xl bg-[#f5f5f7] px-6 py-6 md:px-10">
          <h1 className="text-xl font-semibold tracking-[0.18em] text-gray-900 md:text-2xl">
            {ui.title}
          </h1>
        </section>

        {/* Brand blocks */}
        <section className="space-y-16 md:space-y-20">
          {catalogueBrands.map((brand, index) => {
            const brandPath = `/bullion/${brand.slug}`; // base path
            const brandHref = hrefFor(locale, brandPath);

            return (
              <div
                key={brand.id}
                className={[
                  "flex flex-col items-center gap-10 md:gap-14",
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row",
                ].join(" ")}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                  <div className="overflow-hidden rounded-3xl bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="h-64 w-auto object-contain md:h-80"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 md:pr-10">
                  <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                    {brand.name}
                  </h2>
                  <div className="mt-2 h-[2px] w-12 bg-gray-900" />

                  <p className="mt-4 text-sm leading-relaxed text-gray-700">
                    {brand.description}
                  </p>

                  <Link
                    href={brandHref}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d12b2b] hover:text-[#b81f1f]"
                  >
                    <span>{ui.explore}</span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
