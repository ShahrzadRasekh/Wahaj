"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLiveGoldPrices } from "@/lib/useLiveGoldPrices";

type Dir = "up" | "down" | "flat";

function fmt(n: number) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function dirFromDelta(next: number, prev: number, epsilon = 0.0001): Dir {
  const d = next - prev;
  if (Math.abs(d) < epsilon) return "flat";
  return d > 0 ? "up" : "down";
}

export default function LivePriceHeader({
  lightMode,
  fetchEveryMs = 10_000,
  tickEveryMs = 1_000,
}: {
  lightMode: boolean;
  fetchEveryMs?: number;
  tickEveryMs?: number;
}) {
  const { prices, loading } = useLiveGoldPrices({ fetchEveryMs, tickEveryMs });

  const goldOz = prices?.gold_oz ?? null;
  const goldG = prices?.gold_g ?? null;

  // Direction computed from DISPLAY ticks (so it can move between server updates if interpolation moves)
  const prevDisplayRef = useRef<{ oz: number | null; g: number | null }>({ oz: null, g: null });
  const [ozDir, setOzDir] = useState<Dir>("flat");
  const [gDir, setGDir] = useState<Dir>("flat");

  // Flashing highlight when moving
  const [ozFlash, setOzFlash] = useState<Dir>("flat");
  const [gFlash, setGFlash] = useState<Dir>("flat");

  // A small “server update pulse” so user can SEE something happened even if price didn’t move
  const [pulse, setPulse] = useState(false);
  const prevUpdatedAt = useRef<string | null>(null);

  // Pulse when server timestamp changes
  useEffect(() => {
    if (!prices?.updated_at) return;
    if (prevUpdatedAt.current && prices.updated_at !== prevUpdatedAt.current) {
      setPulse(true);
      window.setTimeout(() => setPulse(false), 450);
    }
    prevUpdatedAt.current = prices.updated_at;
  }, [prices?.updated_at]);

  // Compute tick-by-tick direction and flash
  useEffect(() => {
    const prev = prevDisplayRef.current;

    if (prev.oz == null || prev.g == null || goldOz == null || goldG == null) {
      prevDisplayRef.current = { oz: goldOz, g: goldG };
      return;
    }

    const nextOzDir = dirFromDelta(goldOz, prev.oz);
    const nextGDir = dirFromDelta(goldG, prev.g);

    setOzDir(nextOzDir);
    setGDir(nextGDir);

    if (nextOzDir !== "flat") {
      setOzFlash(nextOzDir);
      window.setTimeout(() => setOzFlash("flat"), 250);
    }
    if (nextGDir !== "flat") {
      setGFlash(nextGDir);
      window.setTimeout(() => setGFlash("flat"), 250);
    }

    prevDisplayRef.current = { oz: goldOz, g: goldG };
  }, [goldOz, goldG]);

  // Colors
  const labelClass = lightMode ? "text-slate-500" : "text-white/70";
  const valueBaseClass = lightMode ? "text-slate-900" : "text-white";

  const upArrowClass = "text-emerald-400";
  const downArrowClass = "text-red-400";
  const flatArrowClass = lightMode ? "text-slate-400" : "text-white/50";

  const ozArrowClass = ozDir === "up" ? upArrowClass : ozDir === "down" ? downArrowClass : flatArrowClass;
  const gArrowClass = gDir === "up" ? upArrowClass : gDir === "down" ? downArrowClass : flatArrowClass;

  const ozValueClass = useMemo(() => {
    if (ozFlash === "up") return `${valueBaseClass} bg-emerald-400/10`;
    if (ozFlash === "down") return `${valueBaseClass} bg-red-400/10`;
    return valueBaseClass;
  }, [ozFlash, valueBaseClass]);

  const gValueClass = useMemo(() => {
    if (gFlash === "up") return `${valueBaseClass} bg-emerald-400/10`;
    if (gFlash === "down") return `${valueBaseClass} bg-red-400/10`;
    return valueBaseClass;
  }, [gFlash, valueBaseClass]);

  // Show arrow only when moving, like many “ticker” UIs
  const arrow = (d: Dir) => (d === "up" ? "▲" : d === "down" ? "▼" : "—");

  const numberBoxBase =
    "px-2 py-0.5 rounded-md font-bold tracking-wide transition-colors";

  return (
    <div className="flex items-center gap-6">
      {/* Optional “gold bars” icon area (small, like rakgold vibe) */}
      <div className="hidden sm:flex items-center justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={lightMode ? "text-yellow-600" : "text-yellow-300"}
          aria-hidden="true"
        >
          <path d="M3 10h9l-2 8H1l2-8Zm10 0h8l-2 8h-8l2-8Zm-2-6h10l-1 4H10l1-4Z" />
        </svg>
      </div>

      {/* GOLD Oz */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-2">
          <span className={["text-[11px] uppercase tracking-[0.18em]", labelClass].join(" ")}>
            GOLD Oz
          </span>

          {/* pulse dot to indicate server update */}
          <span
            className={[
              "inline-block h-1.5 w-1.5 rounded-full transition-opacity",
              pulse ? "opacity-100" : "opacity-40",
              lightMode ? "bg-slate-400" : "bg-white/70",
            ].join(" ")}
          />
        </div>

        <div className="mt-1 flex items-baseline gap-2">
          <span className={["text-sm font-semibold", ozArrowClass].join(" ")}>
            {arrow(ozDir)}
          </span>

          <span className={[numberBoxBase, ozValueClass].join(" ")}>
            {loading || goldOz == null ? "—" : fmt(goldOz)}
          </span>
        </div>
      </div>

      {/* GOLD g */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-2">
          <span className={["text-[11px] uppercase tracking-[0.18em]", labelClass].join(" ")}>
            GOLD g
          </span>
          <span
            className={[
              "inline-block h-1.5 w-1.5 rounded-full transition-opacity",
              pulse ? "opacity-100" : "opacity-40",
              lightMode ? "bg-slate-400" : "bg-white/70",
            ].join(" ")}
          />
        </div>

        <div className="mt-1 flex items-baseline gap-2">
          <span className={["text-sm font-semibold", gArrowClass].join(" ")}>
            {arrow(gDir)}
          </span>

          <span className={[numberBoxBase, gValueClass].join(" ")}>
            {loading || goldG == null ? "—" : fmt(goldG)}
          </span>
        </div>
      </div>
    </div>
  );
}
