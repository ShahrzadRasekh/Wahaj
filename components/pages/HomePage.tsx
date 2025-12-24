"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

// Keep ONLY images here. Text comes from dictionary.
const heroImages = ["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg"];

/* -------------------------------------- */
/*               HOME PAGE                */
/* -------------------------------------- */

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  // Build hero slides from dictionary + images (bilingual, same design)
  // Use [locale] so the memo is stable even if getDict returns a new object reference.
  const heroSlides = useMemo(
    () =>
      heroImages.map((img, i) => ({
        id: i + 1,
        image: img,
        label: t.home.heroLabel,
        title: t.home.heroTitle,
        subtitle: t.home.heroSubtitle,
      })),
    [locale] // deliberate: stable, predictable
  );

  const bullionHref = locale === "ar" ? "/ar/bullion" : "/bullion";
  const giftsHref = locale === "ar" ? "/ar/gifts" : "/gifts";

  return (
    <div className="-mt-[72px]">
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">
          <HeroSection
            locale={locale}
            slides={heroSlides}
            ctaBullionLabel={t.home.ctaBullion}
            ctaGiftsLabel={t.home.ctaGifts}
            ctaBullionHref={bullionHref}
            ctaGiftsHref={giftsHref}
          />

          {/* Keep your existing sections for now (we will translate later).
              IMPORTANT: Replace stubs with your real sections to match EN/AR design. */}
          <USPSection />
          <CategorySection title={t.home.sections.categories} hrefBullion={bullionHref} hrefGifts={giftsHref} />
          <FeaturedSection title={t.home.sections.featured} />

          <PromoSlideshowSection />
          <WorthSection title={t.home.sections.worth} />
          <LatestNewsSection title={t.home.sections.latest} />
          <ContactStrip />
          <BrandMarqueeSection />
        </main>

        <Footer locale={locale} />
      </div>
    </div>
  );
}

/* -------------------------------------- */
/*               HERO SECTION             */
/* -------------------------------------- */

function HeroSection(props: {
  locale: Locale;
  slides: Array<{
    id: number;
    label: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  ctaBullionLabel: string;
  ctaGiftsLabel: string;
  ctaBullionHref: string;
  ctaGiftsHref: string;
}) {
  const [index, setIndex] = useState(0);

  // Reset slider when language changes (prevents odd stale state)
  useEffect(() => {
    setIndex(0);
  }, [props.locale]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % props.slides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [props.slides.length]);

  const active = props.slides[index];

  // RTL-safe positioning: use translate instead of ml-*
  // EN: slightly offset to the left; AR: slightly offset to the right.
  const heroCardOffset =
    props.locale === "ar"
      ? "md:translate-x-[60px] translate-x-[30px]"
      : "md:-translate-x-[60px] -translate-x-[30px]";

  return (
    <section className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
      {/* Background slides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {props.slides.map((slide, i) => (
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
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      <div className="relative mx-auto flex max-w-6xl min-h-[520px] flex-col justify-center px-4 pb-20 pt-[96px] md:min-h-[620px] md:pt-[110px]">
        <div
          className={[
            "max-w-xl rounded-3xl bg-black/10 backdrop-blur-[1px]",
            "px-6 py-6 md:px-8 md:py-8 text-white shadow-none text-center",
            "transform-gpu",
            heroCardOffset,
          ].join(" ")}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-200">
            {active.label}
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-[0.12em] md:text-5xl lg:text-6xl">
            {active.title}
          </h1>

          <p className="mt-4 text-sm text-gray-100 md:text-base">
            {active.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link
              href={props.ctaBullionHref}
              className="rounded-full bg-[#d12b2b] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md hover:bg-[#b81f1f]"
            >
              {props.ctaBullionLabel}
            </Link>
            <Link
              href={props.ctaGiftsHref}
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-sm hover:bg-white/20"
            >
              {props.ctaGiftsLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*      SERVICES SECTION (placeholder)    */
/* -------------------------------------- */

function USPSection() {
  // Replace this stub with your original USP section code.
  return <div />;
}

/* -------------------------------------- */
/*          CATEGORIES SECTION            */
/* -------------------------------------- */

function CategorySection(props: {
  title: string;
  hrefBullion: string;
  hrefGifts: string;
}) {
  return (
    <section className="bg-white pb-20 pt-6">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {props.title}
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-black" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Link
            href={props.hrefBullion}
            className="rounded-3xl border border-gray-100 bg-white px-8 py-10 shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
          >
            Bullion
          </Link>

          <Link
            href={props.hrefGifts}
            className="rounded-3xl border border-gray-100 bg-white px-8 py-10 shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
          >
            Gifts
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*          FEATURED SECTION (stub)       */
/* -------------------------------------- */

function FeaturedSection({ title }: { title: string }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {/* Replace stub with your real FeaturedSection code */}
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*      BELOW SECTIONS: keep as-is        */
/* -------------------------------------- */

function PromoSlideshowSection() {
  return <div />;
}

function WorthSection({ title }: { title: string }) {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {/* Replace stub with your real WorthSection code */}
      </div>
    </section>
  );
}

function LatestNewsSection({ title }: { title: string }) {
  return (
    <section className="bg-white pb-16 pt-6">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        {/* Replace stub with your real LatestNewsSection code */}
      </div>
    </section>
  );
}

function ContactStrip() {
  return <div />;
}

function BrandMarqueeSection() {
  return <div />;
}

/* -------------------------------------- */
/*                 FOOTER                 */
/* -------------------------------------- */

function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const ar = getDict("ar");

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 text-[11px] text-slate-400">
        {/* Your existing footer columns... */}

        {/* Compliance & pricing disclaimer */}
        <div className="mt-6 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-slate-400">
          <p className="max-w-3xl">
            <strong className="font-medium text-slate-300">
              {t.footer.disclaimerTitle}
            </strong>{" "}
            {t.footer.disclaimerText}
          </p>

          {/* If you want bilingual footer always, keep this.
              If you want Arabic disclaimer only on Arabic pages, wrap it in: locale === "ar" */}
          <p className="mt-2 max-w-3xl text-right" dir="rtl">
            <strong className="font-medium text-slate-300">
              {ar.footer.disclaimerTitle}
            </strong>{" "}
            {ar.footer.disclaimerText}
          </p>

          <p className="mt-2 text-[10px] text-slate-500">{t.footer.ratesBy}</p>
        </div>

        <p className="mt-6 text-[10px] text-slate-500">
          © {new Date().getFullYear()} Wahaj Gold. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
