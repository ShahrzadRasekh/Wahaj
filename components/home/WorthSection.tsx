"use client";

import type { Locale } from "@/lib/i18n";

type WorthProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  metal: string;
};

export default function WorthSection({
  locale,
  products,
}: {
  locale: Locale;
  products: WorthProduct[];
}) {
  if (!products?.length) return null;

  return (
    <section className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">Worth Your While</h2>
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
          {products.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-[#f6f9fc] shadow-[0_12px_25px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center justify-center bg-[#f6f9fc] px-6 pb-2 pt-6">
                <img src={p.image} alt={p.name} className="h-40 w-auto object-contain" />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-900">
                  {p.name}
                </h3>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="text-[11px] uppercase tracking-[0.18em]">AED</span>{" "}
                  <span className="text-base font-semibold text-gray-900">{p.price}</span>
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  Live {p.metal.toLowerCase()} rate applied
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
