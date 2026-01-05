"use client";

import type { Locale } from "@/lib/i18n";
import { trustHighlights } from "@/lib/data/homeContent";

export default function TrustHighlightsSection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-16" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {isArabic ? "الثقة والامتثال" : "Trust & Compliance"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isArabic
                ? "إشارات واضحة تعكس أسلوبنا في العمل وتجربة العميل."
                : "Clear signals that reflect how we operate and support customers."}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {trustHighlights.map((x, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-100 bg-[#f6f9fc] p-7 shadow-[0_14px_30px_rgba(15,23,42,0.06)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                {isArabic ? "موثوق" : "Trusted"}
              </p>
              <h3 className="mt-3 text-sm font-semibold text-gray-900">
                {isArabic ? x.titleAr : x.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {isArabic ? x.bodyAr : x.bodyEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
