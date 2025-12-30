"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function GiftCollectionsPage({ locale }: Props) {
  const t = getDict(locale);
  const prefix = locale === "ar" ? "/ar" : "";

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-gray-500">
          <Link href={`${prefix}/`} className="hover:text-gray-800">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">
            {locale === "ar" ? "مجموعات الهدايا" : "Gift Collections"}
          </span>
        </nav>

        {/* Page Title */}
        <section className="mb-10 rounded-2xl bg-[#f5f5f7] px-6 py-8 md:px-10">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
            {locale === "ar" ? "مجموعات الهدايا" : "GIFT COLLECTIONS"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            {locale === "ar"
              ? "مجموعات ذهبية مختارة بعناية للحظات المميزة والهدايا الخالدة."
              : "Curated gold collections designed for meaningful moments and timeless gifts."}
          </p>
        </section>

        {/* Placeholder Content */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50 text-sm text-gray-400">
            {locale === "ar"
              ? "سيتم إضافة مجموعات الهدايا قريباً"
              : "Gift collections coming soon"}
          </div>
        </section>
      </div>
    </main>
  );
}
