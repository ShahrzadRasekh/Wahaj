"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

type BrandKey = "pamp" | "valcambi" | "aletihad" | "sam";

type Product = {
  id: number;
  name: string;
  weight: string;
  price: string;
  badge?: string;
  image: string;
};

type BrandConfig = {
  slug: BrandKey;
  name: string;
  description: string;
  heroImage: string;
  products: Product[];
};

const brandConfigs: Record<BrandKey, BrandConfig> = {
  pamp: {
    slug: "pamp",
    name: "PAMP",
    description:
      "PAMP is a renowned precious metals refiner based in Switzerland, known for its high-quality gold bars trusted by investors worldwide.",
    heroImage: "/brands/pamp-hero.jpg",
    products: [
      {
        id: 1,
        name: "PAMP 1 Gram",
        weight: "1 g",
        price: "225.50",
        badge: "Best Seller",
        image: "/products/pamp-1g.jpg",
      },
      {
        id: 2,
        name: "PAMP 2.5 Gram",
        weight: "2.5 g",
        price: "528.20",
        image: "/products/pamp-2_5g.jpg",
      },
      {
        id: 3,
        name: "PAMP 5 Gram",
        weight: "5 g",
        price: "1,055.40",
        badge: "Best Seller",
        image: "/products/pamp-5g.jpg",
      },
    ],
  },
  valcambi: {
    slug: "valcambi",
    name: "Valcambi Suisse",
    description:
      "Valcambi Suisse bars are recognized for their precision, purity and global acceptability among investors and institutions.",
    heroImage: "/brands/valcambi-hero.jpg",
    products: [
      {
        id: 1,
        name: "Valcambi 10 Gram",
        weight: "10 g",
        price: "3,920.80",
        image: "/products/valcambi-10g.jpg",
      },
      {
        id: 2,
        name: "Valcambi 20 Gram",
        weight: "20 g",
        price: "7,810.60",
        badge: "Best Seller",
        image: "/products/valcambi-20g.jpg",
      },
    ],
  },
  aletihad: {
    slug: "aletihad",
    name: "Al Etihad",
    description:
      "Al Etihad Gold bars combine regional heritage with modern refinery standards, trusted across the GCC region.",
    heroImage: "/brands/aletihad-hero.jpg",
    products: [
      {
        id: 1,
        name: "Al Etihad 10 Gram",
        weight: "10 g",
        price: "3,880.00",
        image: "/products/aletihad-10g.jpg",
      },
    ],
  },
  sam: {
    slug: "sam",
    name: "SAM Precious Metals",
    description:
      "SAM Precious Metals offers innovative minted and cast bars, popular among both investors and jewellers.",
    heroImage: "/brands/sam-hero.jpg",
    products: [
      {
        id: 1,
        name: "SAM 1/2 Ounce Oval Pendant",
        weight: "15.55 g",
        price: "7,924.18",
        image: "/products/sam-oval-half-oz.jpg",
      },
    ],
  },
};

type PageProps = {
  params: { brand: string };
};

export default function BrandProductsPage({ params }: PageProps) {
  const brandKey = params.brand as BrandKey;
  const config = brandConfigs[brandKey];

  if (!config) {
    notFound();
  }

  const [search, setSearch] = useState("");

  const products = config.products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto flex max-w-6xl gap-8 px-4 pb-16 pt-24">
        {/* LEFT: FILTERS / COLLECTIONS */}
        <aside className="hidden w-64 flex-shrink-0 space-y-6 md:block">
          {/* Filters card */}
          <div className="rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-4">
            <h2 className="text-sm font-semibold text-gray-900">Filters</h2>

            <div className="mt-4 space-y-3 text-xs text-gray-700">
              <div>
                <p className="font-semibold">Availability</p>
                <div className="mt-2 space-y-1">
                  <label className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-[4px] bg-black" />
                    All
                  </label>
                  <label className="flex items-center gap-2 text-gray-400">
                    <span className="inline-block h-2.5 w-2.5 rounded-[4px] border border-gray-300" />
                    In Stock
                  </label>
                  <label className="flex items-center gap-2 text-gray-400">
                    <span className="inline-block h-2.5 w-2.5 rounded-[4px] border border-gray-300" />
                    Out of Stock
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Promo card */}
          <div className="h-40 rounded-xl bg-gradient-to-br from-[#7f1d1d] via-[#b91c1c] to-[#f97316] p-4 text-xs text-white shadow-lg">
            <p className="font-semibold uppercase tracking-[0.18em] opacity-90">
              Investment Flexibility
            </p>
            <p className="mt-2 text-[11px] leading-relaxed opacity-90">
              Mix and match weights to build a portfolio that fits your budget
              and strategy.
            </p>
          </div>

          {/* Collections list (other brands) */}
          <div className="rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-4">
            <h2 className="text-sm font-semibold text-gray-900">
              Collections
            </h2>
            <div className="mt-3 space-y-2 text-xs">
              {Object.values(brandConfigs).map((b) => (
                <Link
                  key={b.slug}
                  href={`/bullion/${b.slug}`}
                  className={`flex items-center gap-2 ${
                    b.slug === config.slug
                      ? "font-semibold text-gray-900"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-[4px] ${
                      b.slug === config.slug ? "bg-black" : "border border-gray-300"
                    }`}
                  />
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT: CONTENT */}
        <section className="flex-1">
          {/* Breadcrumb */}
          <nav className="mb-3 text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <span className="mx-1">›</span>
            <Link href="/bullion" className="hover:text-gray-800">
              Wahaj Catalogue
            </Link>
            <span className="mx-1">›</span>
            <span className="text-gray-700">{config.name}</span>
          </nav>

          {/* Hero banner */}
          <div className="mb-5 overflow-hidden rounded-3xl border border-gray-200 bg-gray-900 text-white shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
            <div className="relative flex min-h-[190px] items-center">
              {config.heroImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url('${config.heroImage}')` }}
                />
              )}
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative px-6 py-8 md:px-10">
                <h1 className="text-2xl font-semibold">{config.name}</h1>
                <p className="mt-2 max-w-xl text-sm text-gray-100">
                  {config.description}
                </p>
              </div>
            </div>
          </div>

          {/* Top controls */}
          <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs text-gray-600 md:flex-row md:items-center md:justify-between">
            <p>
              There are{" "}
              <span className="font-semibold text-gray-900">
                {products.length}
              </span>{" "}
              products in this collection
            </p>

            <div className="flex flex-1 items-center justify-end gap-3">
              {/* Search */}
              <div className="relative w-full max-w-xs">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search product"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-8 pr-3 text-xs text-gray-800 outline-none focus:border-gray-400"
                />
              </div>

              {/* Relevance select (static for now) */}
              <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-[11px] text-gray-700">
                Relevance
                <span>▾</span>
              </button>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-3xl bg-[#f6f9fc] shadow-[0_14px_30px_rgba(15,23,42,0.08)] border border-gray-100"
              >
                <div className="relative flex items-center justify-center bg-[#f6f9fc] px-4 pt-6 pb-2">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-auto object-contain"
                    />
                  )}

                  {product.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#b91c1c] px-3 py-1 text-[10px] font-semibold text-white">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3 text-xs">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-500">
                    {product.weight}
                  </p>

                  <div className="mt-2 text-gray-700">
                    <span className="text-[11px] uppercase tracking-[0.18em]">
                      AED
                    </span>{" "}
                    <span className="text-base font-semibold text-gray-900">
                      {product.price}
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] text-gray-400">
                    Live rate applied — indicative only.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
