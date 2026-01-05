"use client";

import type { Locale } from "@/lib/i18n";
import { brandIntro } from "@/lib/data/homeContent";

export default function BrandIntroSection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const blocks = isArabic ? brandIntro.bodyAr : brandIntro.bodyEn;

  return (
    <section className="bg-white py-14" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-gray-100 bg-[#f6f9fc] p-8 shadow-[0_14px_30px_rgba(15,23,42,0.06)] md:p-10">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
              {isArabic ? "نبذة" : "Introduction"}
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-gray-900 md:text-3xl">
              {isArabic ? brandIntro.titleAr : brandIntro.titleEn}
            </h2>

            {/* ✅ Paragraph spacing */}
            <div className="mt-4 space-y-6 text-sm leading-relaxed text-gray-700 md:text-[15px]">
              {blocks.map((b, i) => {
                if (b.type === "p") return <p key={i}>{b.text}</p>;
                if (b.type === "ul")
                  return (
                    <ul key={i} className="list-disc pl-5 space-y-2">
                      {b.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  );
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
