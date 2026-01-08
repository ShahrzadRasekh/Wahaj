"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Locale = "en" | "ar" | string;
type Metal = "gold" | "silver";

type MintedBar = {
  id: string;
  metal: Metal;
  name: string;
  purity: string;
  weights: string[];
  note: string;

  // Optional presentation fields (Phase 1)
  badge?: string; // e.g., "Popular", "Investor"
};

const BARS: MintedBar[] = [
  {
    id: "gold-1",
    metal: "gold",
    name: "Gold Minted Bar",
    purity: "Fine Gold (Au)",
    weights: ["5g", "10g", "20g", "50g", "100g"],
    note: "Produced with a compliance-first mindset and verifiable sourcing principles.",
    badge: "Popular",
  },
  {
    id: "gold-2",
    metal: "gold",
    name: "Gold Minted Bar (Investment Series)",
    purity: "Fine Gold (Au)",
    weights: ["1oz", "50g", "100g"],
    note: "Designed for long-term value holding with clarity in specifications and integrity.",
    badge: "Investor",
  },
  {
    id: "silver-1",
    metal: "silver",
    name: "Silver Minted Bar",
    purity: "Fine Silver (Ag)",
    weights: ["50g", "100g", "250g", "500g", "1kg"],
    note: "Built for precision, consistency, and dependable long-term storage.",
    badge: "New",
  },
];

function t(locale: Locale, key: string) {
  const isAr = locale === "ar";
  const dict: Record<string, { en: string; ar: string }> = {
    title: { en: "Minted Bars", ar: "السبائك المسبوكة" },
    subtitle: {
      en: "Explore Wahaj Al Jawaher’s minted gold and silver bars—presented with clarity, discipline, and standards-first information.",
      ar: "استكشف سبائك الذهب والفضة المسبوكة من وهج الجواهر — بمعلومات واضحة ومنهجية تعتمد على المعايير أولاً.",
    },
    requestInfo: { en: "Request Information", ar: "طلب معلومات" },
    verify: { en: "Standards & Traceability", ar: "المعايير والتتبع" },
    gold: { en: "Gold", ar: "ذهب" },
    silver: { en: "Silver", ar: "فضة" },
    all: { en: "All", ar: "الكل" },
    featured: { en: "Featured", ar: "مميز" },
    browseAll: { en: "Browse all bars", ar: "تصفح جميع السبائك" },
    keySpecs: { en: "Key specifications", ar: "المواصفات الأساسية" },
    purity: { en: "Purity", ar: "النقاوة" },
    weights: { en: "Weights", ar: "الأوزان" },
    note: { en: "Note", ar: "ملاحظة" },
    trustStrip1: { en: "Internationally recognized standards", ar: "معايير دولية معترف بها" },
    trustStrip2: { en: "Traceability-first posture", ar: "مبادئ تتبع واضحة" },
    trustStrip3: { en: "Responsible sourcing", ar: "توريد مسؤول" },
    trustStrip4: { en: "Minted-bar integrity", ar: "سبائك مسبوكة بدقة" },
    phaseNote: {
      en: "Phase 1 note: this catalogue is informational. Secure e-commerce will be enabled in Phase 2.",
      ar: "ملاحظة المرحلة الأولى: هذا الكتالوج معلوماتي. سيتم تفعيل التجارة الإلكترونية الآمنة في المرحلة الثانية.",
    },
    liveGold: { en: "Live Gold Price", ar: "سعر الذهب المباشر" },
    ounce: { en: "Ounce", ar: "الأونصة" },
    gram: { en: "Gram", ar: "الجرام" },
    businessCta: { en: "Business Enquiry", ar: "استفسار أعمال" },
    businessBody: {
      en: "For partners and institutions: structured engagement, documentation, and a compliance-first approach.",
      ar: "للشركاء والجهات المؤسسية: تواصل منظم، توثيق واضح، ونهج يعتمد على الامتثال أولاً.",
    },
  };

  return (dict[key]?.[isAr ? "ar" : "en"] ?? key) as string;
}

function hrefFor(locale: Locale, path: `/${string}`) {
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

function formatNumber(n: number, locale: Locale) {
  const isAr = locale === "ar";
  return new Intl.NumberFormat(isAr ? "ar-IQ" : "en-US", {
    maximumFractionDigits: 2,
  }).format(n);
}

type PriceData = {
  updatedAt: string;
  gold: {
    usd: { ounce: number; gram: number };
    iqd: { ounce: number; gram: number };
  };
};

export default function MintedBarsCataloguePage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";

  const [tab, setTab] = useState<"all" | "gold" | "silver">("all");
  const [prices, setPrices] = useState<PriceData | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/metal-prices", { cache: "no-store" });
        const json = await res.json();
        if (!mounted) return;
        if (json?.error) return;
        setPrices(json);
      } catch {
        // keep UI resilient
      }
    }

    load();
    const id = setInterval(load, 60_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const visibleBars = useMemo(() => {
    if (tab === "all") return BARS;
    return BARS.filter((b) => b.metal === tab);
  }, [tab]);

  const featuredBars = useMemo(() => {
    // simple featured selection for Phase 1
    return BARS.filter((b) => b.badge === "Popular" || b.badge === "Investor").slice(0, 2);
  }, []);

  const goldPrice = useMemo(() => {
    if (!prices) return null;
    return isAr ? prices.gold.iqd : prices.gold.usd;
  }, [prices, isAr]);

  const currency = isAr ? "IQD" : "USD";

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold md:text-4xl">{t(locale, "title")}</h1>
            <p className="mt-3 text-slate-700">{t(locale, "subtitle")}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`${hrefFor(locale, "/contact")}?type=info`}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
              >
                {t(locale, "requestInfo")}
              </Link>
              <Link
                href={hrefFor(locale, "/standards-traceability")}
                className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
              >
                {t(locale, "verify")}
              </Link>
            </div>
          </div>

          {/* Live Price Card (RAK-like strip feel) */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm md:min-w-[320px]">
            <div className="text-sm font-semibold text-slate-900">{t(locale, "liveGold")}</div>
            <div className="mt-2 grid gap-2 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>{t(locale, "ounce")}</span>
                <span className="font-semibold text-slate-900">
                  {goldPrice ? `${formatNumber(goldPrice.ounce, locale)} ${currency}` : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>{t(locale, "gram")}</span>
                <span className="font-semibold text-slate-900">
                  {goldPrice ? `${formatNumber(goldPrice.gram, locale)} ${currency}` : "—"}
                </span>
              </div>
              <div className="text-xs text-slate-500">
                {prices?.updatedAt
                  ? `${isAr ? "آخر تحديث" : "Updated"}: ${new Date(prices.updatedAt).toLocaleTimeString(
                      isAr ? "ar-IQ" : "en-US"
                    )}`
                  : ""}
              </div>
            </div>
          </div>
        </header>

        {/* Trust strip */}
        <section className="mt-8 grid gap-3 rounded-2xl border bg-white p-5 md:grid-cols-4">
          {[t(locale, "trustStrip1"), t(locale, "trustStrip2"), t(locale, "trustStrip3"), t(locale, "trustStrip4")].map(
            (item) => (
              <div key={item} className="text-sm text-slate-700">
                {item}
              </div>
            )
          )}
        </section>

        {/* Filter tabs */}
        <section className="mt-8 flex flex-wrap items-center gap-2">
          {[
            { key: "all", label: t(locale, "all") },
            { key: "gold", label: t(locale, "gold") },
            { key: "silver", label: t(locale, "silver") },
          ].map((x) => (
            <button
              key={x.key}
              onClick={() => setTab(x.key as any)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                tab === x.key ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"
              }`}
              type="button"
            >
              {x.label}
            </button>
          ))}
        </section>

        {/* Featured (more retail feel) */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-xl font-semibold">{t(locale, "featured")}</h2>
            <Link href={hrefFor(locale, "/minted-bars")} className="text-sm font-medium underline">
              {t(locale, "browseAll")}
            </Link>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {featuredBars.map((bar) => (
              <article key={bar.id} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {bar.metal === "gold" ? t(locale, "gold") : t(locale, "silver")}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold">{bar.name}</h3>
                  </div>

                  {bar.badge ? (
                    <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {bar.badge}
                    </span>
                  ) : null}
                </div>

                {/* Image placeholder (Phase 1 visual parity with RAK-like layout) */}
                <div className="mt-4 h-40 w-full rounded-xl border bg-gradient-to-br from-slate-50 to-white" />

                <div className="mt-4 rounded-xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold">{t(locale, "keySpecs")}</div>
                  <div className="mt-2 grid gap-2 text-sm text-slate-700">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-medium">{t(locale, "purity")}</span>
                      <span className="text-right">{bar.purity}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-medium">{t(locale, "weights")}</span>
                      <span className="text-right">{bar.weights.join(" • ")}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-700">{bar.note}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${hrefFor(locale, "/contact")}?type=info&product=${encodeURIComponent(bar.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    {t(locale, "requestInfo")}
                  </Link>
                  <Link
                    href={hrefFor(locale, "/standards-traceability")}
                    className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    {t(locale, "verify")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All products grid (store-like) */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">{t(locale, "browseAll")}</h2>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {visibleBars.map((bar) => (
              <article key={bar.id} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {bar.metal === "gold" ? t(locale, "gold") : t(locale, "silver")}
                    </div>
                    <h3 className="mt-1 font-semibold">{bar.name}</h3>
                  </div>
                  {bar.badge ? (
                    <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {bar.badge}
                    </span>
                  ) : null}
                </div>

                {/* Image placeholder */}
                <div className="mt-4 h-32 rounded-xl border bg-gradient-to-br from-slate-50 to-white" />

                {/* Chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {bar.weights.slice(0, 6).map((w) => (
                    <span
                      key={w}
                      className="rounded-full border bg-white px-3 py-1 text-xs text-slate-700"
                    >
                      {w}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-slate-700">
                  <span className="font-medium">{t(locale, "purity")}:</span> {bar.purity}
                </div>

                <div className="mt-2 text-sm text-slate-700">{bar.note}</div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${hrefFor(locale, "/contact")}?type=info&product=${encodeURIComponent(bar.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    {t(locale, "requestInfo")}
                  </Link>
                  <Link
                    href={`${hrefFor(locale, "/business")}#enquiry`}
                    className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    {t(locale, "businessCta")}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-600">{t(locale, "phaseNote")}</p>
        </section>

        {/* B2B callout (keep your original concept) */}
        <section className="mt-12 rounded-2xl border bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-semibold">{t(locale, "businessCta")}</h2>
          <p className="mt-2 text-white/80">{t(locale, "businessBody")}</p>

          <div className="mt-4">
            <Link
              href={`${hrefFor(locale, "/business")}#enquiry`}
              className="inline-flex rounded-lg bg-white px-4 py-2 text-sm text-slate-900"
            >
              {t(locale, "businessCta")}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
