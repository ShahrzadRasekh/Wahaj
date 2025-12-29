// lib/useFavorites.ts
"use client";

import { useEffect, useMemo, useState } from "react";

const KEY = "favorites";
const EVENT = "favorites:change";

function readIds(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "number") : [];
  } catch {
    return [];
  }
}

function writeIds(ids: number[]) {
  window.localStorage.setItem(KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(EVENT));
}

export function useFavorites() {
  const [hydrated, setHydrated] = useState(false);
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    setIds(readIds());
    setHydrated(true);

    const onChange = () => setIds(readIds());
    window.addEventListener("storage", onChange); // other tabs
    window.addEventListener(EVENT, onChange);     // same tab

    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(EVENT, onChange);
    };
  }, []);

  const count = ids.length;

  const toggle = (id: number) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
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
    writeIds([]);
    setIds([]);
  };

  return useMemo(
    () => ({ ids, count, hydrated, toggle, remove, clear }),
    [ids, count, hydrated]
  );
}
