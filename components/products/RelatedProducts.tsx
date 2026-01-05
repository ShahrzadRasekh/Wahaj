"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Metal = "Gold" | "Silver" | "Platinum";

type FeaturedProduct = {
  id: number;
  slug: string;
  name: string;
  description?: string;
  image: string;
  metal?: Metal; // optional, but used when available
};

function hrefFor(locale: Locale, path: `/${string}`) {
  return locale === "ar" ? `/ar${path}` : path;
}

function normalizeText(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(s: string) {
  const words = normalizeText(s).split(" ").filter(Boolean);
  return new Set(words.filter((w) => w.length >= 3));
}

function jaccard(a: Set<string>, b: Set<string>) {
  if (!a.size && !b.size) return 0;
  let inter = 0;
  a.forEach((w) => {
    if (b.has(w)) inter += 1;
  });
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

function pickRelated(
  all: FeaturedProduct[],
  current: FeaturedProduct,
  limit = 3
) {
  const currentTokens = tokenSet(`${current.name} ${current.description ?? ""}`);

  // Step 1: exclude current
  const candidates = all.filter((p) => p.slug !== current.slug);

  // Step 2: score candidates with:
  // - same metal boost (if both have metal)
  // - text similarity (Jaccard)
  // - stable tiebreakers (name/slug) for deterministic output
  const scored = candidates.map((p) => {
    const tokens = tokenSet(`${p.name} ${p.description ?? ""}`);
    const sim = jaccard(currentTokens, tokens);

    const sameMetal =
      current.metal && p.metal && current.metal === p.metal ? 1 : 0;

    // weight: sameMetal is a strong signal, similarity is refined signal
    const score = sameMetal * 100 + sim * 10;

    return { p, score, sameMetal, sim };
  });

  // Step 3: sort by score, then stable tie-breakers
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    // stable ordering:
    const nameCmp = a.p.name.localeCompare(b.p.name);
    if (nameCmp !== 0) return nameCmp;
    return a.p.slug.localeCompare(b.p.slug);
  });

  // Step 4: if we have any same-metal, prefer them first
  const sameMetalFirst = scored
    .filter((x) => x.sameMetal === 1)
    .slice(0, limit)
    .map((x) => x.p);

  if (sameMetalFirst.length >= limit) return sameMetalFirst;

  // Step 5: fill remaining by best similarity (or fallback deterministic)
  const used = new Set(sameMetalFirst.map((p) => p.slug));
  const fill = scored
    .filter((x) => !used.has(x.p.slug))
    .slice(0, limit - sameMetalFirst.length)
    .map((x) => x.p);

  return [...sameMetalFirst, ...fill];
}

export default function RelatedProducts({
  locale,
  current,
  products,
}: {
  locale: Locale;
  current: FeaturedProduct;
  products: FeaturedProduct[];
}) {
  const isArabic = locale === "ar";

  const ui = {
    title: isArabic ? "منتجات مشابهة" : "Related Products",
    view: isArabic ? "عرض المنتج" : "View product",
  };

  const related = pickRelated(products, current, 3);
  if (!related.length) return null;

  return (
    <section className="mt-14" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold text-gray-900">{ui.title}</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={hrefFor(locale, `/products/${p.slug}`)}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
          >
            <div className="flex items-center justify-center px-6 pt-8">
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <div className="px-6 pb-6 pt-5">
              <h3 className="text-sm font-semibold text-gray-900">{p.name}</h3>

              {p.description ? (
                <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {p.description}
                </p>
              ) : null}

              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#d12b2b] group-hover:text-[#b81f1f]">
                <span>{ui.view}</span>
                <span aria-hidden>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
