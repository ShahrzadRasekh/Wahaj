"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { featuredProducts } from "../lib/products";
import { useFavorites } from "../lib/useFavorites";

/* -------------------------------------- */
/*               HERO SLIDES              */
/* -------------------------------------- */

const heroSlides = [
  {
    id: 1,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-1.jpg",
  },
  {
    id: 2,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-2.jpg",
  },
  {
    id: 3,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-3.jpg",
  },
];

/* -------------------------------------- */
/*               PROMO SLIDES             */
/* -------------------------------------- */

const promoSlides = [
  {
    id: 1,
    title: "Guaranteed Buyback & Trade-In",
    description:
      "Upgrade or liquidate your bullion with transparent rates and a smooth, no-pressure process.",
    image: "/banners/buyback.jpg",
    ctaLabel: "Explore buyback options",
  },
  {
    id: 2,
    title: "Custom Gold Gifts for Every Occasion",
    description:
      "Design personalised gift bars and coins for weddings, anniversaries and corporate gifting.",
    image: "/banners/gifting.jpg",
    ctaLabel: "View gift services",
  },
  {
    id: 3,
    title: "Secure Storage & Vaulting",
    description:
      "Keep your gold in fully insured vaults with discreet access and clear reporting.",
    image: "/banners/storage.jpg",
    ctaLabel: "Discover storage plans",
  },
];

/* -------------------------------------- */
/*             WORTH PRODUCTS             */
/* -------------------------------------- */

const worthProducts = [
  {
    id: 1,
    name: "American Buffalo 2023 One Ounce",
    price: "18,394.15",
    image: "/products/buffalo-1oz.jpg",
    metal: "Gold",
  },
  {
    id: 2,
    name: "10 g Silver Bar – Emirates Gold",
    price: "158.68",
    image: "/products/emirates-silver-10g.jpg",
    metal: "Silver",
  },
  {
    id: 3,
    name: "1/2 Ounce Oval Hook Pendant",
    price: "7,924.18",
    image: "/products/oval-hook-half-oz.jpg",
    metal: "Gold",
  },
  {
    id: 4,
    name: "Etihad Bars 10 Gram",
    price: "5,085.28",
    image: "/products/etihad-10g.jpg",
    metal: "Gold",
  },
];

/* -------------------------------------- */
/*                LATEST NEWS             */
/* -------------------------------------- */

const latestNews = [
  {
    id: 1,
    title:
      "SAM Precious Metals Produces the World’s Largest Silver Bar, Weighing 1971 kgs to Represent the UAE’s Founding Year",
    date: "Thu, 04 Dec 2025 00:00:00 GMT",
    source: "Market Insights",
    image: "/news/largestsilverbar.jpg",
  },
  {
    id: 2,
    title: "Strengthening Global Academic Pathways for Francophone Communities",
    date: "Thu, 04 Dec 2025 00:00:00 GMT",
    source: "Wahaj Research Desk",
    image: "/news/spmacademy.jpg",
  },
  {
    id: 3,
    title:
      "SAM Precious Metals: Leading the Industry with Transparency, Responsible Sourcing & Education Programs",
    date: "Wed, 03 Dec 2025 00:00:00 GMT",
    source: "Global Gold Review",
    image: "/news/Magazine-ad.jpg",
  },
  {
    id: 4,
    title:
      "SAM Advances Global Academic Development Through Partnership With École de Commerce de Lyon",
    date: "Tue, 02 Dec 2025 00:00:00 GMT",
    source: "Energy Metals Report",
    image: "/news/samacademydevelopment.jpg",
  },
];

/* -------------------------------------- */
/*                BRAND LOGOS             */
/* -------------------------------------- */

const brandLogos = [
  "/brands/pamp.png",
  "/brands/aletihad.png",
  "/brands/sam.png",
  "/brands/valcambi.png",
  "/brands/perthmint.png",
];

/* -------------------------------------- */
/*               HOME PAGE                */
/* -------------------------------------- */

export default function HomePage() {
  return (
    <div className="-mt-[72px]">
    <div className="min-h-screen flex flex-col bg-white">
     
      <main className="flex-1">
        <HeroSection />
        <USPSection />
        <CategorySection />
        <FeaturedSection />
        <PromoSlideshowSection />
        <WorthSection />
        <LatestNewsSection />
        <ContactStrip />
        <BrandMarqueeSection />
        
      </main>

      <Footer />
    </div>
    </div>
  );
}

/* -------------------------------------- */
/*                HEADER                  */
/* -------------------------------------- */

function Header() {
  const { count, hydrated } = useFavorites();
  const [scrolled, setScrolled] = useState(false);

  const go = (path: string) => {
    if (typeof window !== "undefined") window.location.assign(path);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[9999] transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-black/35 backdrop-blur-md border-b border-white/10",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LEFT: LOGO */}
        <button
          type="button"
          onClick={() => go("/")}
          className="flex items-center gap-2 text-left"
          aria-label="Go to home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-700 shadow-lg shadow-yellow-500/40">
            <span className="text-xs font-black tracking-[0.15em] text-black">
              WG
            </span>
          </div>

          <div className="leading-tight">
            <div
              className={[
                "text-sm font-semibold tracking-[0.25em] uppercase",
                scrolled ? "text-slate-900" : "text-slate-50",
              ].join(" ")}
            >
              Wahaj
              <span className="text-yellow-500"> Gold</span>
            </div>
            <div
              className={[
                "text-[10px] uppercase tracking-[0.24em]",
                scrolled ? "text-slate-600" : "text-slate-200",
              ].join(" ")}
            >
              Gold &amp; Diamonds LLC
            </div>
          </div>
        </button>

        {/* CENTER: NAV LINKS */}
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] lg:flex">
          {[
            { label: "Bullion", href: "/bullion" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={[
                "text-[11px] transition",
                scrolled
                  ? "text-slate-700 hover:text-yellow-600"
                  : "text-slate-200 hover:text-yellow-300",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: PRICES + FAVORITES */}
        <div className="flex items-center gap-4 text-[11px]">
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "text-[10px] uppercase tracking-[0.16em]",
                  scrolled ? "text-slate-500" : "text-yellow-200",
                ].join(" ")}
              >
                GOLD Oz
              </span>
              <span className="font-semibold text-yellow-500">4,207.26</span>
            </div>

            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "text-[10px] uppercase tracking-[0.16em]",
                  scrolled ? "text-slate-500" : "text-yellow-200",
                ].join(" ")}
              >
                GOLD g
              </span>
              <span className="font-semibold text-yellow-500">498.74</span>
            </div>
          </div>

          {/* Favorites icon */}
          <button
            type="button"
            onClick={() => go("/favorites")}
            className={[
              "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
              scrolled
                ? "border-black/10 text-slate-700 hover:border-red-300 hover:text-red-500 bg-white"
                : "border-white/30 text-slate-100 hover:border-red-400 hover:text-red-300",
            ].join(" ")}
            aria-label="Open favourites"
          >
            <span className="text-lg leading-none">♥</span>

            {hydrated && count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}


/* -------------------------------------- */
/*               HERO SECTION             */
/* -------------------------------------- */

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroContent = heroSlides[0];

  return (
    <section className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
      {/* Background slides never capture clicks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, i) => (
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
          className="
            max-w-xl rounded-3xl bg-black/10 backdrop-blur-[1px]
            px-6 py-6 md:px-8 md:py-8 text-white
            ml-[-30px] md:ml-[-60px]
            shadow-none text-center
          "
        >
          {heroContent.label && (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-200">
              {heroContent.label}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-extrabold tracking-[0.12em] md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mt-4 text-sm text-gray-100 md:text-base">
            {heroContent.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#d12b2b] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md hover:bg-[#b81f1f]">
              Bullion
            </button>
            <button className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-sm hover:bg-white/20">
              Gift Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*      SERVICES SECTION (4 CARDS)        */
/* -------------------------------------- */

function USPSection() {
  const services = [
    {
      title: "FAST DELIVERY",
      desc:
        "Enjoy fast delivery on all orders. Receive your stunning Gold bars & jewellery quickly and securely.",
      icon: "🚚",
    },
    {
      title: "SECURE ORDERING",
      desc:
        "Shop with confidence. Our website ensures secure ordering with advanced encryption for your safety.",
      icon: "🔒",
    },
    {
      title: "CERTIFIED PRODUCTS",
      desc:
        "Our certified products guarantee authenticity and quality, providing you with genuine gold you can trust.",
      icon: "🏅",
    },
    {
      title: "100% SATISFACTION",
      desc: "We guarantee 100% satisfaction. Enjoy worry-free shopping with us.",
      icon: "✔️",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white shadow-lg shadow-gray-200/60 p-6 text-center border border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-sm font-bold tracking-wide text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*          CATEGORIES SECTION            */
/* -------------------------------------- */

function CategorySection() {
  const categories = [
    {
      title: "BULLION",
      subtitle: "Bars, coins, and certified investment pieces",
      image: "/category-bullion.jpg",
      href: "/bullion",
    },
    {
      title: "GIFT COLLECTIONS",
      subtitle: "Curated gold designs for meaningful moments",
      image: "/category-gifts.jpg",
      href: "/gifts",
    },
  ];

  return (
    <section className="bg-white pb-20 pt-6">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Categories
          </h2>
          <div className="mt-2 h-[2px] w-10 bg-black" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-3xl border border-gray-100 bg-white px-8 py-10 shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)]"
            >
              <div className="mx-auto flex h-48 w-full max-w-sm items-center justify-center">
                <div
                  className="
                    relative rounded-2xl border border-yellow-300/40 bg-white p-2
                    shadow-[0_10px_30px_rgba(234,179,8,0.15)]
                    transition-all duration-500
                    group-hover:shadow-[0_14px_45px_rgba(234,179,8,0.25)]
                  "
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="
                      h-40 w-64 object-cover rounded-xl
                      transition-transform duration-500 group-hover:scale-[1.03]
                    "
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-900">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 max-w-xs mx-auto">
                  {cat.subtitle}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-700 transition group-hover:text-yellow-800">
                  Explore
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*                BADGE                   */
/* -------------------------------------- */

function LuxuryBadge({
  label,
  variant = "gold",
}: {
  label: string;
  variant?: "gold" | "black" | "ruby";
}) {
  const styles =
    variant === "black"
      ? "bg-gradient-to-r from-[#0b0f14] via-[#111827] to-[#0b0f14] text-white border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
      : variant === "ruby"
      ? "bg-gradient-to-r from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] text-white border-white/10 shadow-[0_10px_25px_rgba(185,28,28,0.25)]"
      : "bg-gradient-to-r from-[#f7e7b0] via-[#e5b472] to-[#caa24b] text-[#1b1408] border-white/40 shadow-[0_10px_25px_rgba(229,180,114,0.25)]";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5",
        "text-[9px] font-semibold uppercase tracking-[0.20em]",
        "backdrop-blur-sm",
        styles,
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );
}

/* -------------------------------------- */
/*             FEATURED PRODUCTS          */
/* -------------------------------------- */

function FeaturedSection() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Collection
          </h2>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100">
              ←
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100">
              →
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl bg-white shadow-[0_12px_25px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden"
            >
              <div className="relative bg-[#f6f9fc] flex items-center justify-center px-6 pt-6 pb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-auto object-contain"
                />

                {product.badge && (
                  <div className="absolute right-4 top-4 z-10">
                    <LuxuryBadge
                      label={
                        typeof product.badge === "string"
                          ? product.badge
                          : product.badge.label
                      }
                      variant={
                        typeof product.badge === "string"
                          ? "gold"
                          : (product.badge.variant ?? "gold")
                      }
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col px-5 pb-4 pt-3">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-2 text-xs text-gray-500">
                  <span className="text-[11px] uppercase tracking-[0.18em]">
                    AED
                  </span>{" "}
                  <span className="text-base font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <p className="text-[12px] leading-snug text-gray-500 line-clamp-2">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Toggle favourite"
                    className={[
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
                      isFavorite(product.id)
                        ? "border-red-500 text-red-500 bg-red-50 animate-[favPop_240ms_ease-out]"
                        : "border-gray-200 text-gray-400 hover:border-red-400 hover:text-red-500",
                    ].join(" ")}
                    style={
                      isFavorite(product.id)
                        ? ({ animationName: "favPop, favGlow" } as any)
                        : undefined
                    }
                  >
                    {isFavorite(product.id) ? "♥" : "♡"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*          PROMO SLIDESHOW SECTION       */
/* -------------------------------------- */

function PromoSlideshowSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promoSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setCurrent((index + promoSlides.length) % promoSlides.length);
  };

  const slide = promoSlides[current];

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-[0_18px_40px_rgba(15,23,42,0.25)]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
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
              <p className="mt-3 text-sm text-slate-100 md:text-base max-w-xl">
                {slide.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 hover:bg-white">
                {slide.ctaLabel}
                <span>→</span>
              </button>
            </div>

            <div className="md:ml-auto md:w-1/3 flex md:justify-end">
              <div className="rounded-2xl bg-black/40 px-4 py-3 text-xs text-slate-100 backdrop-blur">
                <div className="font-semibold uppercase tracking-[0.18em] text-yellow-200">
                  Wahaj Gold
                </div>
                <div className="mt-1 text-[11px] text-slate-200">
                  {current + 1} / {promoSlides.length} · Premium services
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6 md:px-10">
            <div className="flex gap-2">
              {promoSlides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
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

/* -------------------------------------- */
/*      WORTH YOUR WHILE SECTION          */
/* -------------------------------------- */

function WorthSection() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Worth Your While
          </h2>

          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100">
              ←
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100">
              →
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {worthProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl bg-[#f6f9fc] shadow-[0_12px_25px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden"
            >
              <div className="flex items-center justify-center bg-[#f6f9fc] px-6 pt-6 pb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-auto object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-2 text-xs text-gray-500">
                  <span className="text-[11px] uppercase tracking-[0.18em]">
                    AED
                  </span>{" "}
                  <span className="text-base font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-gray-400">
                  Live {product.metal.toLowerCase()} rate applied
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*            LATEST NEWS SECTION         */
/* -------------------------------------- */

function LatestNewsSection() {
  const [index, setIndex] = useState(0);

  const visible = latestNews.slice(index, index + 2);
  if (visible.length < 2) {
    visible.push(...latestNews.slice(0, 2 - visible.length));
  }

  const next = () => setIndex((prev) => (prev + 1) % latestNews.length);
  const prev = () =>
    setIndex((prev) =>
      prev - 1 < 0
        ? (latestNews.length + prev - 1) % latestNews.length
        : prev - 1
    );

  return (
    <section className="bg-white pb-16 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start">
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {visible.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] border border-gray-100"
            >
              <div className="relative h-56 bg-gray-200">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                ) : null}

                <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  TV
                </span>
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                <p className="text-[11px] font-semibold text-gray-600">
                  {item.date}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] text-gray-500">
                  — {item.source}
                </p>

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
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
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

/* -------------------------------------- */
/*               BRAND MARQUEE            */
/* -------------------------------------- */

function BrandMarqueeSection() {
  return (
    <section className="bg-white py-10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-12 px-4">
          {brandLogos.concat(brandLogos).map((logo, i) => (
            <img
              key={i}
              src={logo}
              className="h-12 w-auto opacity-50 transition duration-300 hover:opacity-100 hover:brightness-125 hover:contrast-125 hover:saturate-[1.8]"
              alt="brand logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*           CONTACT STRIP CTA            */
/* -------------------------------------- */

function ContactStrip() {
  return (
    <section className="border-t border-black/5 bg-[#050609]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="text-sm font-semibold md:text-base text-slate-50">
            Need guidance on your next purchase?
          </h3>
          <p className="mt-2 max-w-xl text-xs text-slate-300">
            Talk to a Wahaj Gold specialist to compare options &amp; find the
            right mix of bars and coins for you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-[11px]">
          <button className="rounded-full bg-yellow-400 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-black hover:bg-yellow-300">
            Request a callback
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-slate-200 hover:border-yellow-300 hover:text-yellow-200">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*                 FOOTER                 */
/* -------------------------------------- */

function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 text-[11px] text-slate-400">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-50">
              Wahaj
              <span className="text-yellow-300"> Gold</span>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Premium bullion, coins and gift bars with secure online ordering
              and insured UAE-wide delivery.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
              Shop
            </h4>
            <ul className="mt-3 space-y-1">
              <li>Bullion Bars</li>
              <li>Coins</li>
              <li>Gift Collections</li>
              <li>Silver &amp; Platinum</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
              Company
            </h4>
            <ul className="mt-3 space-y-1">
              <li>About</li>
              <li>FAQs</li>
              <li>News &amp; Insights</li>
              <li>Terms &amp; Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
              Contact
            </h4>
            <ul className="mt-3 space-y-1">
              <li>Dubai, UAE</li>
              <li>info@wahajgold.ae</li>
              <li>+971 50 000 0000</li>
            </ul>
          </div>
        </div>
{/* Compliance & pricing disclaimer */}
<div className="mt-6 border-t border-white/10 pt-4 text-[10px] leading-relaxed text-slate-400">
  <p className="max-w-3xl">
    <strong className="font-medium text-slate-300">Indicative spot price.</strong>{" "}
    Prices are based on international gold spot rates and live FX. Final prices
    may vary due to premiums, fabrication, taxes, and market movement.
  </p>

 </div>


        <p className="mt-8 text-[10px] text-slate-500">
          © {new Date().getFullYear()} Wahaj Gold. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
