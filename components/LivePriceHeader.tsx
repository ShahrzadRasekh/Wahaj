"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  lightMode?: boolean;
  fetchEveryMs?: number;
  tickEveryMs?: number;
};

type ApiPayload = {
  provider: string;
  currency: string;
  goldOz: string;
  goldG: string;
  updatedAt: string;
  error?: string;
};

function safeParseTime(s?: string) {
  const t = s ? Date.parse(s) : NaN;
  return Number.isFinite(t) ? t : null;
}

export default function LivePriceHeader({
  lightMode = true,
  fetchEveryMs = 10_000,
  tickEveryMs = 1_000,
}: Props) {
  const [data, setData] = useState<ApiPayload | null>(null);
  const [ageSec, setAgeSec] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const isRTL =
    typeof document !== "undefined" &&
    document.documentElement.dir &&
    document.documentElement.dir.toLowerCase() === "rtl";

  const labels = useMemo(() => {
    if (isRTL) {
      return { oz: "أونصة", gm: "جرام", ago: "ث", gold: "ذهب" };
    }
    return { oz: "GOLD Oz", gm: "GOLD Gm", ago: "s", gold: "Gold" };
  }, [isRTL]);

  async function fetchPrices() {
    try {
      setLoading(true);
      const res = await fetch("/api/live-price", {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      const json = (await res.json()) as ApiPayload;
      setData(json);

      const updatedMs = safeParseTime(json?.updatedAt);
      setAgeSec(updatedMs ? Math.max(0, Math.floor((Date.now() - updatedMs) / 1000)) : 0);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPrices();
    const id = window.setInterval(fetchPrices, fetchEveryMs);
    return () => window.clearInterval(id);
  }, [fetchEveryMs]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!data?.updatedAt) return;
      const updatedMs = safeParseTime(data.updatedAt);
      if (!updatedMs) return;
      setAgeSec(Math.max(0, Math.floor((Date.now() - updatedMs) / 1000)));
    }, tickEveryMs);
    return () => window.clearInterval(id);
  }, [data?.updatedAt, tickEveryMs]);

  const surface = lightMode
    ? "bg-white/85 border-black/10 text-slate-900"
    : "bg-black/30 border-white/15 text-white";

  const labelClass = lightMode ? "text-slate-500" : "text-white/70";
  const valueClass = lightMode ? "text-slate-900" : "text-white";

  const ozValue = data?.goldOz ?? "--";
  const gValue = data?.goldG ?? "--";

  return (
    <div
      className={[
        "hidden md:flex items-center gap-4 rounded-2xl border px-3 py-2 backdrop-blur-xl",
        surface,
      ].join(" ")}
      dir={isRTL ? "rtl" : "ltr"}
      title={data?.provider ? `${labels.gold} (${data.provider})` : labels.gold}
      aria-label="Live gold price"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl">
        <span className="text-lg leading-none">⛊</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="leading-tight">
          <div className={["text-[10px] font-semibold uppercase tracking-[0.18em]", labelClass].join(" ")}>
            {labels.oz}
          </div>
          <div className={["text-sm font-semibold", valueClass].join(" ")}>
            {loading && !data ? "--" : ozValue}
          </div>
        </div>

        <div className="leading-tight">
          <div className={["text-[10px] font-semibold uppercase tracking-[0.18em]", labelClass].join(" ")}>
            {labels.gm}
          </div>
          <div className={["text-sm font-semibold", valueClass].join(" ")}>
            {loading && !data ? "--" : gValue}
          </div>
        </div>
      </div>

      <div className={["ml-1 text-[10px]", labelClass].join(" ")}>
        {Number.isFinite(ageSec) ? `${ageSec}${labels.ago}` : ""}
      </div>
    </div>
  );
}
