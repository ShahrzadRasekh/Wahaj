"use client";

import { useEffect, useRef, useState } from "react";

type Prices = {
  currency: "AED";
  gold_oz: number;
  gold_g: number;
  updated_at: string;
};

export function useLiveGoldPrices(refreshMs = 1000) {
  const [prices, setPrices] = useState<Prices | null>(null);
  const lastUpdatedRef = useRef<string | null>(null);

  useEffect(() => {
    let alive = true;
    const controller = new AbortController();

    async function load() {
      try {
        // cache-buster ensures the URL is always unique
        const res = await fetch(`/api/prices?t=${Date.now()}`, {
          cache: "no-store",
          signal: controller.signal,
          headers: { "Cache-Control": "no-store" },
        });

        if (!res.ok) return;

        const data: Prices = await res.json();

        // only update state if the server actually changed updated_at
        if (alive && data.updated_at !== lastUpdatedRef.current) {
          lastUpdatedRef.current = data.updated_at;
          setPrices(data);
        }
      } catch {
        // ignore
      }
    }

    load();
    const id = setInterval(load, refreshMs);

    return () => {
      alive = false;
      controller.abort();
      clearInterval(id);
    };
  }, [refreshMs]);

  return { prices };
}
