// components/home/HeroSection.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/data/homeContent";

type Props = {
  locale: "en" | "ar";
  slides: HeroSlide[];
};

export default function HeroSection({ locale, slides }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const heroContent = slides[0];

  // RTL-safe offset (your old issue)
  const cardOffset =
    locale === "ar" ? "md:translate-x-[60px] translate-x-[30px]" : "md:-translate-x-[60px] -translate-x-[30px]";

  const bullionHref = locale === "ar" ? "/ar/bullion" : "/bullion";
  const giftsHref = locale === "ar" ? "/ar/gifts" : "/gifts";

  return (
    <section className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center hero-zoom transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: slide.image
                ? `url('${slide.image}')`
                : "linear-gradient(to right,#111827,#1f2933)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl min-h-[520px] flex-col justify-center px-4 pb-20 pt-12 md:min-h-[620px] md:pt-16">
        <div
          className={[
            "max-w-xl rounded-3xl bg-black/10 backdrop-blur-[1px]",
            "px-6 py-6 md:px-8 md:py-8 text-white shadow-none text-center",
            "transform-gpu",
            cardOffset,
          ].join(" ")}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-200">
            {heroContent.label}
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-[0.12em] md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-4 text-sm text-gray-100 md:text-base">
            {heroContent.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link
              href={bullionHref}
              className="rounded-full bg-[#d12b2b] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md hover:bg-[#b81f1f]"
            >
              Bullion
            </Link>
            <Link
              href={giftsHref}
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-sm hover:bg-white/20"
            >
              Gift Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
