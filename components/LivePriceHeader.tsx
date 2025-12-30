"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  lightMode?: boolean;
  fetchEveryMs?: number; // how often we refetch prices
  tickEveryMs?: number;  // how often the "age" label updates
};

type ApiPayload = {
  provider: string;
  currency: string;
  goldOz: string;      // already formatted "4,368.09"
  goldG: string;       // already formatted "517.74"
  updatedAt: string;   // ISO string
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
      return {
        oz: "أونصة",
        gm: "جرام",
        ago: "ث",
        gold: "ذهب",
      };
    }
    return {
      oz: "GOLD Oz",
      gm: "GOLD Gm",
      ago: "s",
      gold: "Gold",
    };
  }, [isRTL]);

  async function fetchPrices() {
    try {
      setLoading(true);

      // IMPORTANT: keep it same-origin so it works on Vercel.
      // If your route is at /api/live-price, keep it like this:
      const res = await fetch("/api/live-price", {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });

      const json = (await res.json()) as ApiPayload;
      setData(json);

      const updatedMs = safeParseTime(json?.updatedAt);
      if (updatedMs) {
        setAgeSec(Math.max(0, Math.floor((Date.now() - updatedMs) / 1000)));
      } else {
        setAgeSec(0);
      }
    } catch (e) {
      // keep previous data if fetch fails; just stop showing "loading"
    } finally {
      setLoading(false);
    }
  }

  // initial + polling fetch
  useEffect(() => {
    fetchPrices();
    const id = window.setInterval(fetchPrices, fetchEveryMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchEveryMs]);

  // tick the age counter smoothly
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

  // If API returns "--" when failed, show it gracefully
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
      {/* Icon (simple “gold bars” mark) */}
      <div className="flex h-8 w-8 items-center justify-center rounded-xl">
        <span className="text-lg leading-none">⛊</span>
      </div>

      {/* Two columns: Gold Oz + Gold Gm */}
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

      {/* Age seconds (small) */}
      <div className={["ml-1 text-[10px]", labelClass].join(" ")}>
        {Number.isFinite(ageSec) ? `${ageSec}${labels.ago}` : ""}
      </div>
    </div>
  );
}
