"use client";

import { useLiveGoldPrices } from "@/lib/useLiveGoldPrices";

function fmt(n: number) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LivePriceHeader({ lightMode }: { lightMode: boolean }) {
  const { prices } = useLiveGoldPrices({
    fetchEveryMs: 10_000, // real data refresh (server)
    tickEveryMs: 1_000,   // “moving” display (UI)
  });

  const labelClass = lightMode ? "text-slate-500" : "text-white/70";
  const valueClass = lightMode ? "text-slate-900" : "text-yellow-200";

  return (
    <div className="hidden items-center gap-5 md:flex">
      <div className="flex flex-col leading-tight">
        <span className={["text-[10px] uppercase tracking-[0.16em]", labelClass].join(" ")}>
          GOLD Oz
        </span>
        <span className={["font-semibold tabular-nums", valueClass].join(" ")}>
          {prices ? fmt(prices.gold_oz) : "—"}
        </span>
      </div>

      <div className="flex flex-col leading-tight">
        <span className={["text-[10px] uppercase tracking-[0.16em]", labelClass].join(" ")}>
          GOLD g
        </span>
        <span className={["font-semibold tabular-nums", valueClass].join(" ")}>
          {prices ? fmt(prices.gold_g) : "—"}
        </span>
      </div>
    </div>
  );
}
