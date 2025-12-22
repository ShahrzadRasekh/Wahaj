"use client";

import { useEffect, useMemo, useState } from "react";
import { useLiveGoldPrices } from "@/lib/useLiveGoldPrices";

function fmt(n: number) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LivePriceHeader() {
  const { prices } = useLiveGoldPrices(1000); // every 1s

  // Small "flash" effect when prices change
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (!prices) return;
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 180);
    return () => clearTimeout(t);
  }, [prices?.updated_at]);

  const oz = prices?.gold_oz;
  const g = prices?.gold_g;

  // if route hasn’t loaded yet
  if (!prices || oz == null || g == null) {
    return (
      <div className="hidden items-center gap-5 md:flex">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/70">GOLD Oz</span>
          <span className="font-semibold text-yellow-200">—</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.16em] text-white/70">GOLD g</span>
          <span className="font-semibold text-yellow-200">—</span>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-5 md:flex">
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.16em] text-white/70">GOLD Oz</span>
        <span className={["font-semibold text-yellow-200 transition", flash ? "opacity-70" : "opacity-100"].join(" ")}>
          {fmt(oz)}
        </span>
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.16em] text-white/70">GOLD g</span>
        <span className={["font-semibold text-yellow-200 transition", flash ? "opacity-70" : "opacity-100"].join(" ")}>
          {fmt(g)}
        </span>
      </div>

      {/* Debug indicator (keep for now; remove later) */}
      <div className="ml-1 text-[10px] text-white/60">
        {new Date(prices.updated_at).toLocaleTimeString()}
      </div>
    </div>
  );
}
