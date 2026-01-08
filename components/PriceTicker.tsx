"use client";

import { useEffect, useState } from "react";

type Props = {
  locale?: string; // "ar" or undefined/"en"
};

function formatNumber(n: number, locale: string) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-IQ" : "en-US", {
    maximumFractionDigits: 2,
  }).format(n);
}

export default function PriceTicker({ locale }: Props) {
  const isArabic = locale === "ar";
  const [data, setData] = useState<null | {
    updatedAt: string;
    gold: { usd: { ounce: number; gram: number }; iqd: { ounce: number; gram: number } };
  }>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const res = await fetch("/api/metal-prices", { cache: "no-store" });
        const json = await res.json();
        if (!mounted) return;
        if (json?.error) return;
        setData(json);
      } catch {
        // silent fail for UI resilience
      }
    }

    load();
    const id = setInterval(load, 60_000); // refresh every 60s
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const currencyLabel = isArabic ? "IQD" : "USD";

  const ounce = data ? (isArabic ? data.gold.iqd.ounce : data.gold.usd.ounce) : null;
  const gram = data ? (isArabic ? data.gold.iqd.gram : data.gold.usd.gram) : null;

  return (
    <div className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs text-slate-700">
        <div className="font-medium">
          {isArabic ? "أسعار الذهب المباشرة" : "Live Gold Prices"}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div>
            {isArabic ? "الأونصة" : "Ounce"}:{" "}
            <span className="font-semibold text-slate-900">
              {ounce ? formatNumber(ounce, locale ?? "en") : "—"} {currencyLabel}
            </span>
          </div>
          <div>
            {isArabic ? "الجرام" : "Gram"}:{" "}
            <span className="font-semibold text-slate-900">
              {gram ? formatNumber(gram, locale ?? "en") : "—"} {currencyLabel}
            </span>
          </div>
          <div className="text-slate-500">
            {data?.updatedAt ? (isArabic ? "آخر تحديث:" : "Updated:") : ""}
            {" "}
            {data?.updatedAt ? new Date(data.updatedAt).toLocaleTimeString(isArabic ? "ar-IQ" : "en-US") : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
