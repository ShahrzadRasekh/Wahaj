"use client";

import { useEffect, useState } from "react";

const KEY = "favorites";

function readFavorites(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(readFavorites());

    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setFavorites(readFavorites());
    };

    const onCustom = () => setFavorites(readFavorites());

    window.addEventListener("storage", onStorage);
    window.addEventListener("favorites_updated", onCustom);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("favorites_updated", onCustom);
    };
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("favorites_updated"));
      return next;
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return { favorites, toggleFavorite, isFavorite };
}
