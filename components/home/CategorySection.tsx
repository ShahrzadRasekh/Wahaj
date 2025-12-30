"use client";

import Link from "next/link";

type Props = {
  locale: "en" | "ar";
};

export default function CategorySection({ locale }: Props) {
  const prefix = `/${locale}`;

  const categories = [
    {
      title: "BULLION",
      subtitle: "Bars, coins & investment gold",
      href: `${prefix}/bullion`,
      image: "/products/category-bullion.jpg",
    },
    {
      title: "GIFT COLLECTIONS",
      subtitle: "Gold crafted for meaningful moments",
      href: `${prefix}/gifts`,
      image: "/products/category-gifts.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-gray-900">Categories</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow hover:shadow-lg transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-40 w-full object-cover rounded-xl"
              />
              <h3 className="mt-6 text-sm font-semibold tracking-wide">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{cat.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
