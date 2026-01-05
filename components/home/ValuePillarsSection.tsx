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
      en: "Value Pillar 1",
      ar: "توصيل سريع",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sagittis lacus, pretium congue sem.",
      ar: "استمتع بخدمة توصيل سريعة لجميع الطلبات واستلم الذهب والمجوهرات بأمان.",
    },
  },
  {
    icon: "🔒",
    title: {
      en: "Value Pillar 2",
      ar: "طلب آمن",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sagittis lacus, pretium congue sem.",
      ar: "تسوّق بثقة تامة مع نظام طلب آمن وتقنيات تشفير متقدمة.",
    },
  },
  {
    icon: "🏅",
    title: {
      en: "Value Pillar 3",
      ar: "منتجات معتمدة",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sagittis lacus, pretium congue sem.",
      ar: "جميع المنتجات معتمدة وتضمن أعلى معايير الجودة والمصداقية.",
    },
  },
  {
    icon: "✔️",
    title: {
      en: "Value Pillar 4",
      ar: "رضا مضمون 100%",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sagittis lacus, pretium congue sem.",
      ar: "نضمن رضا العملاء من خلال سياسات واضحة ودعم متواصل.",
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
