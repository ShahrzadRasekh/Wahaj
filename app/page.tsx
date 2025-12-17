'use client';

import Link from 'next/link';
import { useState, useEffect } from "react";


const heroSlides = [
  {
    id: 1,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-1.jpg", // put this in public/hero/
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
/*  Example static product/category data  */
/* -------------------------------------- */

const featuredProducts = [
  {
    id: 1,
    name: 'Strength',
    price: '5,207.69',
   // badge: 'Best Seller',
    image: '/products/LionKing.jpg',
  },
  {
    id: 2,
    name: 'My Love',
    price: '1,344.29',
    badge: 'Best Seller',
    image: '/products/Bouquet.jpg',
  },
  {
    id: 3,
    name: 'Sea Queen',
    price: '10,120.50',
    //badge: 'Best Seller',
    image: '/products/Mermaid.jpg',
  },
  {
    id: 4,
    name: 'My Mother',
    price: '1,062.05',
   // badge: 'New Arrival',
    image: '/products/MyMother.jpg',
  },
  {
    id: 5,
    name: 'My Heart',
    price: '5,310.42',
    //badge: 'New Arrival',
    image: '/products/MyHeart.jpg',
  },
  {
    id: 6,
    name: 'Makkah',
    price: '720.30',
   // badge: 'New Arrival',
    image: '/products/makkahbar.jpg',
  },
  {
    id: 7,
    name: 'Moon Flower',
    price: '1,180.75',
    badge: 'New Arrival',
    image: '/products/MoonFlower.jpg',
  },
  {
    id: 8,
    name: 'Love Tree',
    price: '24,950.00',
    //badge: 'Best Seller',
    image: '/products/Love-Tree.jpg',
  },
];

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

const latestNews = [
  {
    id: 1,
    title: "Gold edges higher as dollar softens and traders eye Fed path",
    date: "Thu, 04 Dec 2025 00:00:00 GMT",
    source: "Market Insights",
    image: "/news/dollar-gold.jpg",
  },
  {
    id: 2,
    title: "Sales of investment bars and coins rise ahead of new year",
    date: "Thu, 04 Dec 2025 00:00:00 GMT",
    source: "Wahaj Research Desk",
    image: "/news/salesforce-gold.jpg",
  },
  {
    id: 3,
    title: "Central banks continue to add gold to reserves",
    date: "Wed, 03 Dec 2025 00:00:00 GMT",
    source: "Global Gold Review",
    image: "/news/central-banks.jpg",
  },
  {
    id: 4,
    title: "Silver demand hits record as solar growth accelerates",
    date: "Tue, 02 Dec 2025 00:00:00 GMT",
    source: "Energy Metals Report",
    image: "/news/silver-solar.jpg",
  },
];

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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <USPSection />
        <CategorySection />
        {/* We’ll refine below sections later, for now they keep the darker style */}
        <FeaturedSection />
        <PromoSlideshowSection />
        <WorthSection /> 
        <LatestNewsSection />
        <ContactStrip />
        <BrandMarqueeSection />
      </main>

      <Footer />
    </div>
  );
}

/* -------------------------------------- */
/*                HEADER                  */
/* -------------------------------------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/35 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-700 shadow-lg shadow-yellow-500/40">
            <span className="text-xs font-black tracking-[0.15em] text-black">
              WG
            </span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-50">
              Wahaj
              <span className="text-yellow-300"> Gold</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-slate-200">
              Gold &amp; Diamonds LLC
            </div>
          </div>
        </Link>

        {/* CENTER: NAV LINKS */}
<nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-slate-100 lg:flex">
  {[
    { label: "Bullion", href: "/bullion" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ].map((item) => (
    <Link
      key={item.label}
      href={item.href}
      className="text-[11px] text-slate-200 hover:text-yellow-300 transition"
    >
      {item.label}
    </Link>
  ))}
</nav>

        {/* RIGHT: GOLD PRICES + ICONS */}
        <div className="flex items-center gap-5 text-[11px]">
          <div className="hidden items-center gap-4 text-slate-100 md:flex">
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.16em] text-yellow-200">
                GOLD Oz
              </span>
              <span className="font-semibold text-yellow-300">4,207.26</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.16em] text-yellow-200">
                GOLD g
              </span>
              <span className="font-semibold text-yellow-300">498.74</span>
            </div>
          </div>

          {/* Very simple placeholder icons for now */}
          <div className="flex items-center gap-3 text-slate-100">
             {/*<button className="text-lg hover:text-yellow-300" aria-label="Cart">
              🛒
            </button>
            <button
              className="text-lg hover:text-yellow-300"
              aria-label="Account"
            >
              👤
            </button>*/}
            <button className="flex items-center gap-1 rounded-full border border-white/30 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-100 hover:border-yellow-300 hover:text-yellow-200">
              <span className="text-base">☰</span>
              <span className="hidden sm:inline">More</span>
            </button>
          </div>
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

  // Auto-play every 5 seconds (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Use content from first slide (or any fixed slide you like)
  const heroContent = heroSlides[0];

  return (
    <section className="relative min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0 overflow-hidden">
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

        {/* Dark overlay on top of images */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT – centered vertically a bit lower */}
      <div className="relative mx-auto flex max-w-6xl min-h-[520px] flex-col justify-center px-4 pb-20 pt-12 md:min-h-[620px] md:pt-16">
  <div className="
    max-w-xl 
    rounded-3xl 
    bg-black/10 
    backdrop-blur-[1px]
    px-6 py-6 md:px-8 md:py-8 
    text-white 
    ml-[-30px] md:ml-[-60px]
    shadow-none
    text-center
  ">
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
/*         Like RAK Gold screenshot       */
/* -------------------------------------- */

function USPSection() {
  const services = [
    {
      title: 'FAST DELIVERY',
      desc: 'Enjoy fast delivery on all orders. Receive your stunning Gold bars & jewellery quickly and securely.',
      icon: '🚚',
    },
    {
      title: 'SECURE ORDERING',
      desc: 'Shop with confidence. Our website ensures secure ordering with advanced encryption for your safety.',
      icon: '🔒',
    },
    {
      title: 'CERTIFIED PRODUCTS',
      desc: 'Our certified products guarantee authenticity and quality, providing you with genuine gold you can trust.',
      icon: '🏅',
    },
    {
      title: '100% SATISFACTION',
      desc: 'We guarantee 100% satisfaction. Enjoy worry-free shopping with us.',
      icon: '✔️',
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
      title: 'BULLION',
      image: '/category-bullion.jpg', // add to /public
    },
    {
      title: 'GIFT COLLECTIONS',
      image: '/category-gifts.jpg', // add to /public
    },
  ];

  return (
    <section className="bg-white pb-20 pt-4">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Categories
        </h2>
        <div className="mt-1 w-8 h-[2px] bg-black" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl overflow-hidden bg-[#f6f9fc] shadow-md shadow-gray-200/60"
            >
              <div
                className="h-72 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${cat.image})`,
                }}
              />
              <div className="px-6 py-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  <span className="inline-block w-5 h-[2px] bg-black mr-2" />
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- */
/*             FEATURED PRODUCTS          */
/* -------------------------------------- */

function FeaturedSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title + arrows */}
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

        {/* Product grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl bg-white shadow-[0_12px_25px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden"
            >
              {/* Top image area */}
              <div className="relative bg-[#f6f9fc] flex items-center justify-center px-6 pt-6 pb-2">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-auto object-contain"
                  />
                ) : (
                  <div className="h-40 w-full rounded-xl bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-700" />
                )}

                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#b91c1c] px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product name + price */}
              <div className="flex flex-1 flex-col px-5 pb-4 pt-3">
                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-2 text-xs text-gray-500">
                  <span className="text-[11px] uppercase tracking-[0.18em]">
                    AED
                  </span>{' '}
                  <span className="text-base font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>

                {/* bottom icons row */}
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <button
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 hover:border-red-400 hover:text-red-500"
                    aria-label="Add to favourites"
                  >
                    ♥
                  </button>
                  <button className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-red-600">
                    <span>🛒</span>
                    <span>Add</span>
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
/*   Full-width banner carousel under     */
/*          Featured Collection           */
/* -------------------------------------- */

function PromoSlideshowSection() {
  const [current, setCurrent] = useState(0);

  // Auto-play every 7 seconds
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
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: slide.image
                ? `url('${slide.image}')`
                : "linear-gradient(135deg,#0f172a,#1f2937)",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
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

            {/* Small side label / counter */}
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

          {/* Controls */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6 md:px-10">
            {/* Dots */}
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

            {/* Arrows */}
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
        {/* Title + arrows */}
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

        {/* Product row (4 cards) */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {worthProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl bg-[#f6f9fc] shadow-[0_12px_25px_rgba(15,23,42,0.06)] border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              <div className="flex items-center justify-center bg-[#f6f9fc] px-6 pt-6 pb-2">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-auto object-contain"
                  />
                ) : (
                  <div className="h-40 w-full rounded-xl bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-700" />
                )}
              </div>

              {/* Text */}
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
/*     2 big cards + arrows, responsive   */
/* -------------------------------------- */

function LatestNewsSection() {
  const [index, setIndex] = useState(0);

  const visible = latestNews.slice(index, index + 2);
  // if near the end and less than 2 left, wrap around
  if (visible.length < 2) {
    visible.push(...latestNews.slice(0, 2 - visible.length));
  }

  const next = () => setIndex((prev) => (prev + 1) % latestNews.length);
  const prev = () =>
    setIndex((prev) =>
      prev - 1 < 0 ? (latestNews.length + prev - 1) % latestNews.length : prev - 1
    );

  return (
    <section className="bg-white pb-16 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start">
        {/* LEFT: NEWS CARDS */}
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {visible.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] border border-gray-100"
            >
              {/* Image */}
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

              {/* Text */}
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

        {/* RIGHT: TITLE + ARROWS */}
        <div className="flex w-full flex-col items-start justify-between md:w-64 md:items-end">
          <div className="md:text-right">
            <h2 className="text-2xl font-semibold text-gray-900">
              Latest News
            </h2>
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
/*   Smooth infinite scrolling logos      */
/* -------------------------------------- */

function BrandMarqueeSection() {
  return (
    <section className="bg-white py-10">
      <div className="relative overflow-hidden">
        {/* Left + Right gradient fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        {/* Infinite scroll container */}
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
        <p className="mt-8 text-[10px] text-slate-500">
          © {new Date().getFullYear()} Wahaj Gold. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
