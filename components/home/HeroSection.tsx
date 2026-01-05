// components/home/HeroSection.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { HeroSlide } from "@/lib/data/homeContent";

type Props = {
  locale: "en" | "ar";
  slides: HeroSlide[];
};

// Your header height is roughly: px-4 py-3 + inner content.
// If you change header height later, adjust this number.
const HEADER_OFFSET_PX = 72;

export default function HeroSection({ locale, slides }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides?.length) return;

    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides]);

  const heroContent = slides?.length ? slides[index] : null;

  // RTL-safe offset (your old issue)
  const cardOffset =
    locale === "ar"
      ? "md:translate-x-[60px] translate-x-[30px]"
      : "md:-translate-x-[60px] -translate-x-[30px]";

  const bullionHref = locale === "ar" ? "/ar/bullion" : "/bullion";
  const giftsHref = locale === "ar" ? "/ar/gifts" : "/gifts";

  const dir = locale === "ar" ? "rtl" : "ltr";

  const fallbackBg = useMemo(
    () => "linear-gradient(to right,#111827,#1f2937)",
    []
  );

  return (
    <section
      className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[720px]"
      dir={dir}
      // KEY FIX:
      // - Pull the hero up behind the fixed header
      // - Keep content visually in the same place with paddingTop
      style={{
        marginTop: `-${HEADER_OFFSET_PX}px`,
        paddingTop: `${HEADER_OFFSET_PX}px`,
      }}
    >
      {/* Background slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides?.map((slide, i) => (
          <div
            key={slide.id}
            className={[
              "absolute inset-0 bg-cover bg-center hero-zoom transition-opacity duration-700 ease-out",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
              backgroundImage: slide.image ? `url('${slide.image}')` : fallbackBg,
            }}
          />
        ))}

        {/* Dark overlay (keeps header readable and matches your current style) */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex min-h-[520px] md:min-h-[620px] lg:min-h-[720px] items-center">
            {/* Floating hero card */}
            <div
  className={[
    "w-full max-w-xl rounded-3xl",
    "border border-white/10",
    "bg-black/20 backdrop-blur-3xl", // ← more transparent + smoother blur
    "shadow-[0_14px_32px_rgba(0,0,0,0.25)]", // ← lighter shadow
    "px-7 py-8 md:px-10 md:py-10",
    cardOffset,
  ].join(" ")}
>

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                {heroContent?.label ?? " "}
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[0.06em] text-white">
                {heroContent?.title ?? "WAHAJ GOLD"}
              </h1>

              <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/80">
                {heroContent?.subtitle ??
                  "Secure, simple and transparent buying online. Discover certified bullion & gift collections."}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={bullionHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-white/90"
                >
                  Explore Bullion
                </Link>

                <Link
                  href={giftsHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/55 hover:bg-white/10"
                >
                  Gift Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
