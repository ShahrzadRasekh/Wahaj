"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Brand = {
  id: number;
  slug: "pamp" | "valcambi" | "aletihad" | "sam";
  name: string;
  description: string;
  image: string;
};

const catalogueBrands: Brand[] = [
  {
    id: 1,
    slug: "pamp",
    name: "PAMP",
    description:
      "PAMP is a renowned precious metals refiner based in Switzerland, known for its high-quality gold bars. PAMP gold bars are highly trusted by investors and collectors due to the refinery's strong reputation for quality and precision. Their bars are recognized and accepted globally, making them a popular choice in the precious metals market.",
    image: "/catalog/pamp-bar.jpg",
  },
  {
    id: 2,
    slug: "valcambi",
    name: "Valcambi Suisse",
    description:
      "Valcambi Suisse is a highly regarded investment piece known for its purity and quality. These gold bars are trusted by investors and collectors due to Valcambi's reputation for producing high-quality and accurately weighted bars. They are also recognized globally, making them easy to trade and liquidate.",
    image: "/catalog/valcambi-bar.jpg",
  },
  {
    id: 3,
    slug: "aletihad",
    name: "Al Etihad",
    description:
      "Al Etihad Gold is one of the UAE's leading gold refiners, offering bars that combine regional heritage with international standards. Their products are preferred by investors who value both local presence and global recognition.",
    image: "/catalog/aletihad-bar.jpg",
  },
  {
    id: 4,
    slug: "sam",
    name: "SAM Precious Metals",
    description:
      "SAM Precious Metals produces minted and cast gold bars with a focus on innovation and trust. Their brand is known for detailed design, secure packaging and reliable quality that appeals to both investors and jewellers.",
    image: "/catalog/sam-bar.jpg",
  },
];

export default function BullionCataloguePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  const homeHref = locale === "ar" ? "/ar" : "/";
  const bullionHref = locale === "ar" ? "/ar/bullion" : "/bullion";
  const brandHref = (slug: string) =>
    locale === "ar" ? `/ar/bullion/${slug}` : `/bullion/${slug}`;

  const ui = {
    breadcrumbCatalogue: locale === "ar" ? "كتالوج وهـاج" : "Wahaj Catalogue",
    title: locale === "ar" ? "كتالوج وهـاج" : "WAHAJ CATALOGUE",
    explore: locale === "ar" ? "استعرض" : "Explore",
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-4 text-xs text-gray-500">
          <Link href={homeHref} className="hover:text-gray-800">
            {t.nav.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">{ui.breadcrumbCatalogue}</span>
        </nav>

        {/* Page title strip */}
        <section className="mb-10 rounded-xl bg-[#f5f5f7] px-6 py-6 md:px-10">
          <h1 className="text-xl font-semibold tracking-[0.18em] text-gray-900 md:text-2xl">
            {ui.title}
          </h1>
        </section>

        {/* Brand sections */}
        <section className="space-y-16 md:space-y-20">
          {catalogueBrands.map((brand, index) => (
            <div
              key={brand.id}
              className={[
                "flex flex-col items-center gap-10 md:gap-14",
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row",
              ].join(" ")}
            >
              {/* IMAGE BLOCK */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div className="overflow-hidden rounded-3xl bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.1)]">
                  {brand.image ? (
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="h-64 w-auto object-contain md:h-80"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-64 w-64 bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-700" />
                  )}
                </div>
              </div>

              {/* TEXT BLOCK */}
              <div
                className="w-full md:w-1/2 animate-slide-up md:pr-10"
                style={{ animationDelay: `${index * 0.15}s` as any }}
              >
                <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                  {brand.name}
                </h2>
                <div className="mt-2 h-[2px] w-12 bg-gray-900" />

                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {brand.description}
                </p>

                {/* FIXED: Link only (no button wrapping Link) */}
                <Link
                  href={brandHref(brand.slug)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d12b2b] hover:text-[#b81f1f]"
                >
                  <span>{ui.explore}</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
