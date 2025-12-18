"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const KEY = "favorites";

function safeRead(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed)
      ? (parsed.filter((x) => typeof x === "number") as number[])
      : [];
  } catch {
    return [];
  }
}

function safeWrite(value: number[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    // ignore (storage blocked/private mode)
  }
}

export function useFavorites() {
  // IMPORTANT: start empty so server HTML === first client HTML (prevents hydration errors)
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // After hydration, load from localStorage (client only)
  useEffect(() => {
    setFavorites(safeRead());
    setHydrated(true);
  }, []);

  // Persist changes AFTER we have hydrated (prevents overwriting storage with [])
  useEffect(() => {
    if (!hydrated) return;
    safeWrite(favorites);
    window.dispatchEvent(new Event("favorites_updated"));
  }, [favorites, hydrated]);

  // Sync from other tabs (storage) and same tab (custom event)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sync = () => setFavorites(safeRead());

    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) sync();
    };
    const onCustom = () => sync();

    window.addEventListener("storage", onStorage);
    window.addEventListener("favorites_updated", onCustom);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("favorites_updated", onCustom);
    };
  }, []);

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  );

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const count = useMemo(() => favorites.length, [favorites]);

  return { favorites, count, hydrated, toggleFavorite, isFavorite };
}
