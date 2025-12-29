"use client";

import type { Locale } from "@/lib/i18n";

export default function BrandMarqueeSection({
  locale,
  logos,
}: {
  locale: Locale;
  logos: string[];
}) {
  if (!logos?.length) return null;

  return (
    <section className="bg-white py-10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-12 px-4">
          {logos.concat(logos).map((logo, i) => (
            <img
              key={`${logo}-${i}`}
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
