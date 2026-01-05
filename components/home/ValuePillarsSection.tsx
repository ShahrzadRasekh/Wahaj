"use client";

import type { Locale } from "@/lib/i18n";
import { valuePillars } from "@/lib/data/homeContent";

function PillarIcon({ name }: { name: string }) {
  // simple emoji icons to keep it lightweight; you can swap to SVG later
  const map: Record<string, string> = {
    delivery: "🚚",
    secure: "🔒",
    certified: "🏅",
    support: "✅",
  };
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
      <span className="text-xl">{map[name] ?? "⭐"}</span>
    </div>
  );
}

export default function ValuePillarsSection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";

  return (
    <section className="bg-white py-8" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-4">
          {valuePillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_14px_30px_rgba(15,23,42,0.06)]"
            >
              <PillarIcon name={p.icon} />

              <h3 className="mt-4 text-sm font-semibold tracking-wide text-gray-900">
                {isArabic ? p.titleAr : p.titleEn}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {isArabic ? p.bodyAr : p.bodyEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
