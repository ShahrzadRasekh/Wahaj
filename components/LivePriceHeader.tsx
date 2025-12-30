"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  lightMode: boolean;
  fetchEveryMs?: number;
  tickEveryMs?: number;
};

type LivePricePayload = {
  goldOz: string;
  goldG: string;
  updatedAt: string;
  error?: string;
};

export default function LivePriceHeader({
  lightMode,
  fetchEveryMs = 10_000,
  tickEveryMs = 1_000,
}: Props) {
  const [data, setData] = useState<LivePricePayload | null>(null);
  const [now, setNow] = useState(Date.now());
  const inFlight = useRef(false);

  const textClass = lightMode ? "text-slate-700" : "text-white/90";
  const dimClass = lightMode ? "text-slate-400" : "text-white/60";
  const dotClass = lightMode ? "bg-slate-400" : "bg-white/60";

  async function load() {
    if (inFlight.current) return;
    inFlight.current = true;

    try {
      // IMPORTANT: your folder is /api/live-prices (plural)
      const res = await fetch("/api/live-prices", { cache: "no-store" });
      const json = (await res.json()) as LivePricePayload;

      setData(json);

      if (json?.error) {
        console.warn("Live prices API error:", json.error);
      }
    } catch (e: any) {
      console.warn("Live prices fetch failed:", e?.message ?? e);
      setData({
        goldOz: "--",
        goldG: "--",
        updatedAt: new Date().toISOString(),
        error: e?.message ?? "fetch failed",
      });
    } finally {
      inFlight.current = false;
    }
  }

  useEffect(() => {
    load();
    const id = setInterval(load, fetchEveryMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchEveryMs]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), tickEveryMs);
    return () => clearInterval(id);
  }, [tickEveryMs]);

  const ageLabel = useMemo(() => {
    if (!data?.updatedAt) return "";
    const t = new Date(data.updatedAt).getTime();
    if (!Number.isFinite(t)) return "";
    const diffSec = Math.max(0, Math.floor((now - t) / 1000));
    if (diffSec < 60) return `${diffSec}s`;
    return `${Math.floor(diffSec / 60)}m`;
  }, [data?.updatedAt, now]);

  return (
    <div className="hidden items-center gap-3 md:flex">
      <div className={["flex items-center gap-2 text-[10px]", textClass].join(" ")}>
        <span className="uppercase tracking-[0.22em]">Gold Oz</span>
        <span className={["h-1.5 w-1.5 rounded-full", dotClass].join(" ")} />
        <span className="font-semibold tabular-nums">{data?.goldOz ?? "--"}</span>
      </div>

      <div className={["flex items-center gap-2 text-[10px]", textClass].join(" ")}>
        <span className="uppercase tracking-[0.22em]">Gold g</span>
        <span className={["h-1.5 w-1.5 rounded-full", dotClass].join(" ")} />
        <span className="font-semibold tabular-nums">{data?.goldG ?? "--"}</span>
      </div>

      {!!ageLabel && (
        <div className={["text-[10px] tabular-nums", dimClass].join(" ")}>
          {ageLabel}
        </div>
      )}
    </div>
  );
}
