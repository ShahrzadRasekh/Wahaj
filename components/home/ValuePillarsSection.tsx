"use client";

import type { Locale } from "@/lib/i18n";


type Pillar = {
  icon: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
};

const PILLARS: Pillar[] = [
  {
    icon: "🚚",
    title: {
      en: "1.Compliance & Global Standards",
      ar: "الامتثال والمعايير العالمية",
    },
    description: {
      en: "At Wahaj Al Jawaher, we operate in alignment with internationally recognized standards for precious metals, applying compliance, due diligence, and risk management principles as a foundation of our business, not as a marketing claim.",
      ar: "نلتزم في وهج الجواهر بالعمل وفق معايير عالمية معترف بها في تجارة المعادن الثمينة، مع تطبيق مبادئ الامتثال، العناية الواجبة، وإدارة المخاطر. الامتثال عندنا مو إضافة تسويقية، بل أساس العمل.",
    },
  },
  {
    icon: "🔒",
    title: {
      en: "2.Purity & Quality",
      ar: "النقاء والجودة",
    },
    description: {
      en: "We deliver high-purity gold and silver minted bars, produced with precise specifications and supported by verifiable documentation. Quality is not a promise. It is the result of disciplined sourcing and production.",
      ar: "نقدّم سبائك ذهب وفضة عالية النقاء، مصكوكة وفق مواصفات دقيقة، مع توثيق واضح يمكن التحقق منه. الجودة عندنا مو وعد، بل نتيجة عملية إنتاج واختيار صارمة.",
    },
  },
  {
    icon: "🏅",
    title: {
      en: "3.Transparency & Trust",
      ar: "الشفافية والثقة",
    },
    description: {
      en: "We believe trust is built through clarity. Our products, sourcing principles, and specifications are communicated with accuracy and honesty, enabling informed decisions without exaggeration or ambiguity.",
      ar: "نؤمن أن الثقة تُبنى بالوضوح. لذلك نحرص على تقديم معلومات دقيقة عن منتجاتنا، مصادرها، ومواصفاتها، بدون مبالغة أو غموض، ليكون قرار الشراء مبنيًا على معرفة حقيقية.",
    },
  },
  {
    icon: "✔️",
    title: {
      en: "4.Responsible Sourcing & Enduring Value",
      ar: "التوريد المسؤول والقيمة المستدامة",
    },
    description: {
      en: "We are committed to responsible sourcing and clean metals, supported by ethical and traceable supply chains. Our focus is on delivering long-term value that respects people, markets, and the future.",
      ar: "نلتزم بالتوريد المسؤول والمعادن النظيفة، مع التركيز على سلاسل إمداد أخلاقية وقابلة للتتبع. هدفنا تقديم قيمة طويلة الأمد تحترم الإنسان، السوق، والمستقبل.",
    },
  },
];

export default function ValuePillarsSection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        {/* SECTION TITLE */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl font-semibold text-slate-900">
            {isArabic ? "ركائز القيمة الأساسية" : "Key Value Pillars"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            {isArabic
              ? "نلتزم بالجودة والشفافية والأمان في كل تجربة نقدمها."
              : " massa et lacinia finibus, justo elit ullamcorper eros, vel lobortis orci ipsum eget arcu."}
          </p>
        </div>

        {/* PILLARS GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">
                {pillar.icon}
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                {pillar.title[locale]}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {pillar.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
