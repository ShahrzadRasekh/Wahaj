// components/pages/HomePage.tsx
"use client";

import type { Locale } from "@/lib/i18n";

import HeroSection from "@/components/home/HeroSection";
import BrandIntroSection from "@/components/home/BrandIntroSection";
import ValuePillarsSection from "@/components/home/ValuePillarsSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import TrustHighlightsSection from "@/components/home/TrustHighlightsSection";

import {
  heroSlides,
  featuredGoldProducts,
  featuredSilverProducts,
} from "@/lib/data/homeContent";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <main>
      {/* HERO */}
      <HeroSection locale={locale} slides={heroSlides} />

      {/* NEW sections under hero */}
      <BrandIntroSection locale={locale} />
      <ValuePillarsSection locale={locale} />

      {/* Featured Products (Gold/Silver) */}
      <FeaturedSection
        locale={locale}
        gold={featuredGoldProducts}
        silver={featuredSilverProducts}
      />

      {/* Trust & Compliance */}
      <TrustHighlightsSection locale={locale} />
    </main>
  );
}
