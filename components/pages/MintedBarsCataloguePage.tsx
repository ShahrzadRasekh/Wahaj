import Link from "next/link";

type Locale = "en" | "ar" | string;

type Metal = "gold" | "silver";

type MintedBar = {
  id: string;
  metal: Metal;
  name: string;
  purity: string;
  weights: string[];
  note: string;
};

const BARS: MintedBar[] = [
  {
    id: "gold-1",
    metal: "gold",
    name: "Gold Minted Bar",
    purity: "Fine Gold (Au)",
    weights: ["5g", "10g", "20g", "50g", "100g"],
    note: "Produced with a compliance-first mindset and verifiable sourcing principles.",
  },
  {
    id: "gold-2",
    metal: "gold",
    name: "Gold Minted Bar (Investment Series)",
    purity: "Fine Gold (Au)",
    weights: ["1oz", "50g", "100g"],
    note: "Designed for long-term value holding with clarity in specifications and integrity.",
  },
  {
    id: "silver-1",
    metal: "silver",
    name: "Silver Minted Bar",
    purity: "Fine Silver (Ag)",
    weights: ["50g", "100g", "250g", "500g", "1kg"],
    note: "Built for precision, consistency, and dependable long-term storage.",
  },
];

function t(locale: Locale, key: string) {
  const isAr = locale === "ar";
  const dict: Record<string, { en: string; ar: string }> = {
    title: {
      en: "Minted Bars",
      ar: "السبائك المسبوكة",
    },
    subtitle: {
      en: "Explore Wahaj Al Jawaher’s minted gold and silver bars—presented with clarity, discipline, and standards-first information.",
      ar: "استكشف سبائك الذهب والفضة المسبوكة من وهج الجواهر — بمعلومات واضحة ومنهجية تعتمد على المعايير أولاً.",
    },
    ctaPrimary: { en: "Request Information", ar: "طلب معلومات" },
    ctaSecondary: { en: "Standards & Traceability", ar: "المعايير والتتبع" },
    goldTab: { en: "Gold", ar: "ذهب" },
    silverTab: { en: "Silver", ar: "فضة" },
    keySpecs: { en: "Key specifications", ar: "المواصفات الأساسية" },
    purity: { en: "Purity", ar: "النقاوة" },
    weights: { en: "Typical weights", ar: "الأوزان الشائعة" },
    note: { en: "Note", ar: "ملاحظة" },
    trustTitle: { en: "Built for confidence in Iraq", ar: "مصمم لتعزيز الثقة في العراق" },
    trustBody: {
      en: "In a market where authenticity matters, Wahaj Al Jawaher prioritizes transparency, responsible sourcing, and internationally recognized standards—before any transaction.",
      ar: "في سوق تُعد فيه الأصالة هي الأساس، تضع وهج الجواهر الشفافية والتوريد المسؤول والمعايير المعترف بها دولياً قبل أي عملية شراء.",
    },
    businessCta: { en: "Business Enquiry", ar: "استفسار أعمال" },
    businessBody: {
      en: "For partners and institutions: structured engagement, documentation, and a compliance-first approach.",
      ar: "للشركاء والجهات المؤسسية: تواصل منظم، توثيق واضح، ونهج يعتمد على الامتثال أولاً.",
    },
    disclaimer: {
      en: "Phase 1 note: This catalogue is informational. Online purchasing will be enabled in Phase 2 through a secure e-commerce implementation.",
      ar: "ملاحظة المرحلة الأولى: هذا الكتالوج معلوماتي. سيتم تفعيل الشراء عبر الإنترنت في المرحلة الثانية من خلال نظام تجارة إلكترونية آمن.",
    },
  };

  return (dict[key]?.[isAr ? "ar" : "en"] ?? key) as string;
}

function hrefFor(locale: Locale, path: `/${string}`) {
  // Default English = no prefix
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

export default function MintedBarsCataloguePage({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";

  // Phase 1: simple “tabs” via query would be overkill—keep it clean.
  const gold = BARS.filter((b) => b.metal === "gold");
  const silver = BARS.filter((b) => b.metal === "silver");

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold md:text-4xl">{t(locale, "title")}</h1>
          <p className="mt-4 text-slate-700">{t(locale, "subtitle")}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${hrefFor(locale, "/contact")}?type=info`}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
            >
              {t(locale, "ctaPrimary")}
            </Link>
            <Link
              href={hrefFor(locale, "/standards-traceability")}
              className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
            >
              {t(locale, "ctaSecondary")}
            </Link>
          </div>
        </header>

        {/* Trust strip */}
        <section className="mt-10 grid gap-3 rounded-2xl border bg-white p-5 md:grid-cols-4">
          {[
            isAr ? "معايير دولية معترف بها" : "Internationally recognized standards",
            isAr ? "مبادئ تتبع واضحة" : "Traceability-first posture",
            isAr ? "توريد مسؤول" : "Responsible sourcing",
            isAr ? "سبائك مسبوكة بدقة" : "Minted-bar integrity",
          ].map((item) => (
            <div key={item} className="text-sm text-slate-700">
              {item}
            </div>
          ))}
        </section>

        {/* Gold section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">{t(locale, "goldTab")}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {gold.map((bar) => (
              <article key={bar.id} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{bar.name}</h3>

                <div className="mt-4 rounded-xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold">{t(locale, "keySpecs")}</div>
                  <dl className="mt-3 grid gap-2 text-sm text-slate-700">
                    <div className="flex items-start justify-between gap-4">
                      <dt className="font-medium">{t(locale, "purity")}</dt>
                      <dd className="text-right">{bar.purity}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="font-medium">{t(locale, "weights")}</dt>
                      <dd className="text-right">{bar.weights.join(" • ")}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="font-medium">{t(locale, "note")}</dt>
                      <dd className="text-right">{bar.note}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${hrefFor(locale, "/contact")}?type=info&product=${encodeURIComponent(bar.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    {t(locale, "ctaPrimary")}
                  </Link>
                  <Link
                    href={hrefFor(locale, "/standards-traceability")}
                    className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    {t(locale, "ctaSecondary")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Silver section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">{t(locale, "silverTab")}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {silver.map((bar) => (
              <article key={bar.id} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{bar.name}</h3>

                <div className="mt-4 rounded-xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold">{t(locale, "keySpecs")}</div>
                  <dl className="mt-3 grid gap-2 text-sm text-slate-700">
                    <div className="flex items-start justify-between gap-4">
                      <dt className="font-medium">{t(locale, "purity")}</dt>
                      <dd className="text-right">{bar.purity}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="font-medium">{t(locale, "weights")}</dt>
                      <dd className="text-right">{bar.weights.join(" • ")}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="font-medium">{t(locale, "note")}</dt>
                      <dd className="text-right">{bar.note}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${hrefFor(locale, "/contact")}?type=info&product=${encodeURIComponent(bar.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    {t(locale, "ctaPrimary")}
                  </Link>
                  <Link
                    href={hrefFor(locale, "/standards-traceability")}
                    className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    {t(locale, "ctaSecondary")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* B2B callout */}
        <section className="mt-12 rounded-2xl border bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-semibold">{t(locale, "trustTitle")}</h2>
          <p className="mt-2 text-white/80">{t(locale, "trustBody")}</p>

          <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4">
            <div className="text-sm font-semibold">{t(locale, "businessCta")}</div>
            <p className="mt-1 text-sm text-white/80">{t(locale, "businessBody")}</p>
            <Link
              href={`${hrefFor(locale, "/business")}#enquiry`}
              className="mt-3 inline-flex rounded-lg bg-white px-4 py-2 text-sm text-slate-900"
            >
              {t(locale, "businessCta")}
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/70">{t(locale, "disclaimer")}</p>
        </section>
      </div>
    </main>
  );
}
