"use client";

import { useEffect, useRef, useState } from "react";

type Prices = {
  currency: "AED";
  gold_oz: number;
  gold_g: number;
  updated_at: string;
};

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function useLiveGoldPrices(options?: {
  fetchEveryMs?: number;   // server fetch interval (recommended: 10s+)
  tickEveryMs?: number;    // UI tick interval (1s for “moving numbers”)
}) {
  const fetchEveryMs = options?.fetchEveryMs ?? 10_000;
  const tickEveryMs = options?.tickEveryMs ?? 1_000;

  const [display, setDisplay] = useState<Prices | null>(null);
  const [loading, setLoading] = useState(true);

  // target = last fetched from server
  const targetRef = useRef<Prices | null>(null);
  // start point for interpolation
  const startRef = useRef<Prices | null>(null);
  const transitionStartTsRef = useRef<number>(0);

  async function fetchNow() {
    try {
      const res = await fetch("/api/prices", { cache: "no-store" });
      if (!res.ok) throw new Error(await res.text());
      const json = (await res.json()) as Prices;

      // Initialize if first time
      if (!targetRef.current) {
        targetRef.current = json;
        startRef.current = json;
        transitionStartTsRef.current = Date.now();
        setDisplay(json);
        setLoading(false);
        return;
      }

      // Set up a new interpolation window from current display to new target
      startRef.current = display ?? targetRef.current;
      targetRef.current = json;
      transitionStartTsRef.current = Date.now();
      setLoading(false);
    } catch {
      setLoading(false);
      // keep last known display
    }
  }

  // fetch loop
  useEffect(() => {
    let alive = true;

    (async () => {
      if (!alive) return;
      await fetchNow();
    })();

    const id = setInterval(() => {
      if (!alive) return;
      fetchNow();
    }, fetchEveryMs);

    return () => {
      alive = false;
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchEveryMs]);

  // UI tick loop (smooth “changes every second”)
  useEffect(() => {
    const id = setInterval(() => {
      const start = startRef.current;
      const target = targetRef.current;
      if (!start || !target) return;

      const now = Date.now();
      const t = clamp01((now - transitionStartTsRef.current) / fetchEveryMs);

      const gold_oz = start.gold_oz + (target.gold_oz - start.gold_oz) * t;
      const gold_g = start.gold_g + (target.gold_g - start.gold_g) * t;

      setDisplay({
        currency: "AED",
        gold_oz,
        gold_g,
        updated_at: target.updated_at,
      });
    }, tickEveryMs);

    return () => clearInterval(id);
  }, [fetchEveryMs, tickEveryMs]);

  return { prices: display, loading };
}
