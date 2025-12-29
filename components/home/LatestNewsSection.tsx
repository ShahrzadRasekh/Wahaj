"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  source: string;
  image: string;
};

export default function LatestNewsSection({
  locale,
  items,
}: {
  locale: Locale;
  items: NewsItem[];
}) {
  const [index, setIndex] = useState(0);

  const visible = useMemo(() => {
    if (!items?.length) return [];
    const slice = items.slice(index, index + 2);
    if (slice.length < 2) slice.push(...items.slice(0, 2 - slice.length));
    return slice;
  }, [items, index]);

  if (!items?.length) return null;

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="bg-white pb-16 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start">
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {visible.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-56 bg-gray-200">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  TV
                </span>
              </div>
              <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                <p className="text-[11px] font-semibold text-gray-600">{item.date}</p>
                <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] text-gray-500">— {item.source}</p>
                <button className="mt-3 self-start text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700 hover:text-amber-900">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex w-full flex-col items-start justify-between md:w-64 md:items-end">
          <div className="md:text-right">
            <h2 className="text-2xl font-semibold text-gray-900">Latest News</h2>
            <p className="mt-2 max-w-xs text-sm text-gray-500">
              Curated market headlines to keep your decisions informed.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 md:mt-6">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              aria-label="Previous news"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              aria-label="Next news"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
