"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type PromoSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
};

export default function PromoSlideshowSection({
  locale,
  slides,
}: {
  locale: Locale;
  slides: PromoSlide[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) return null;

  const slide = slides[current];

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-[0_18px_40px_rgba(15,23,42,0.25)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: slide.image
                ? `url('${slide.image}')`
                : "linear-gradient(135deg,#0f172a,#1f2937)",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:px-10 md:py-12">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                {slide.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-100 md:text-base">
                {slide.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 hover:bg-white">
                {slide.ctaLabel} <span>→</span>
              </button>
            </div>

            <div className="md:ml-auto md:w-1/3 md:justify-end">
              <div className="inline-block rounded-2xl bg-black/40 px-4 py-3 text-xs text-slate-100 backdrop-blur">
                <div className="font-semibold uppercase tracking-[0.18em] text-yellow-200">
                  Wahaj Gold
                </div>
                <div className="mt-1 text-[11px] text-slate-200">
                  {current + 1} / {slides.length}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6 md:px-10">
            <div className="flex gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goTo(idx)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    idx === current
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80",
                  ].join(" ")}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => goTo(current - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={() => goTo(current + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
