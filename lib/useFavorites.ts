"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "favorites";
const EVENT_NAME = "favorites:changed";

function safeParseIds(raw: string | null): number[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((v) => Number(v))
      .filter((n) => Number.isFinite(n));
  } catch {
    return [];
  }
}

function readIds(): number[] {
  if (typeof window === "undefined") return [];
  return safeParseIds(localStorage.getItem(STORAGE_KEY));
}

function writeIds(ids: number[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function useFavorites() {
  const [hydrated, setHydrated] = useState(false);
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    // initial hydrate
    setIds(readIds());
    setHydrated(true);

    // same-tab updates
    const onCustom = () => setIds(readIds());

    // cross-tab updates
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setIds(readIds());
    };

    window.addEventListener(EVENT_NAME, onCustom);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(EVENT_NAME, onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggle = (id: number) => {
    setIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      writeIds(next);
      return next;
    });
  };

  const remove = (id: number) => {
    setIds((prev) => {
      const next = prev.filter((x) => x !== id);
      writeIds(next);
      return next;
    });
  };

  const clear = () => {
    setIds(() => {
      writeIds([]);
      return [];
    });
  };

  return {
    ids,
    count: ids.length,
    hydrated,
    toggle,
    remove,
    clear,
  };
}
