"use client";

import type { Locale } from "@/lib/i18n";

import HeroSection from "@/components/home/HeroSection";
import USPSection from "@/components/home/USPSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedSection from "@/components/home/FeaturedSection";
import PromoSlideshowSection from "@/components/home/PromoSlideshowSection";
import WorthSection from "@/components/home/WorthSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import ContactStrip from "@/components/home/ContactStrip";
import BrandMarqueeSection from "@/components/home/BrandMarqueeSection";

import {
  heroSlides,
  featuredProducts,
  promoSlides,
  worthProducts,
  latestNews,
  brandLogos,
} from "@/lib/data/homeContent";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  return (
    <div className="-mt-16 min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <HeroSection locale={locale} slides={heroSlides} />

        <USPSection locale={locale} />

        <CategorySection locale={locale} />

        <FeaturedSection locale={locale} products={featuredProducts} />

        <PromoSlideshowSection locale={locale} slides={promoSlides} />

        <WorthSection locale={locale} products={worthProducts} />

        <LatestNewsSection locale={locale} items={latestNews} />

        <ContactStrip locale={locale} />

        <BrandMarqueeSection locale={locale} logos={brandLogos} />
      </main>
    </div>
  );
}
