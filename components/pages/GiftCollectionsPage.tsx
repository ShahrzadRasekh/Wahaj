"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export default function GiftCollectionsPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const prefix = `/${locale}`;

  const ui = {
    breadcrumb: locale === "ar" ? "مجموعات الهدايا" : "Gift Collections",
    title: locale === "ar" ? "مجموعات الهدايا" : "GIFT COLLECTIONS",
    subtitle:
      locale === "ar"
        ? "مجموعات ذهبية مختارة بعناية للحظات المميزة والهدايا الخالدة."
        : "Curated gold collections designed for meaningful moments and timeless gifts.",
    ctaHome: locale === "ar" ? "العودة إلى الرئيسية" : "Back to Home",
    ctaBullion: locale === "ar" ? "استعرض السبائك" : "Explore Bullion",
    comingSoon: locale === "ar" ? "سيتم إضافة المجموعات قريباً" : "Collections coming soon",
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-gray-500">
          <Link href={`${prefix}/`} className="hover:text-gray-800">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">{ui.breadcrumb}</span>
        </nav>

        {/* Title strip */}
        <section className="mb-10 rounded-xl bg-[#f5f5f7] px-6 py-6 md:px-10">
          <h1 className="text-xl font-semibold tracking-[0.18em] text-gray-900 md:text-2xl">
            {ui.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">{ui.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${prefix}/`}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 hover:bg-gray-50"
            >
              {ui.ctaHome}
            </Link>

            <Link
              href={`${prefix}/bullion`}
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-gray-900"
            >
              {ui.ctaBullion}
              <span className="ml-2" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="rounded-3xl border border-dashed border-gray-200 bg-gray-50 p-10 text-center">
          <p className="text-sm text-gray-500">{ui.comingSoon}</p>
        </section>
      </div>
    </main>
  );
}
