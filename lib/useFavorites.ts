"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const KEY = "favorites";
const EVT = "favorites_updated";

function safeRead(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x) => typeof x === "number");
  } catch {
    return [];
  }
}

function safeWrite(next: number[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVT));
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(safeRead());
    setHydrated(true);

    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setFavorites(safeRead());
    };

    const onCustom = () => setFavorites(safeRead());

    window.addEventListener("storage", onStorage);
    window.addEventListener(EVT, onCustom);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(EVT, onCustom);
    };
  }, []);

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  );

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      safeWrite(next);
      return next;
    });
  }, []);

  const count = useMemo(() => favorites.length, [favorites]);

  return { favorites, toggleFavorite, isFavorite, count, hydrated };
}
