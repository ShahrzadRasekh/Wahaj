"use client";

import type { Locale } from "@/lib/i18n";

export default function ContactStrip({ locale }: { locale: Locale }) {
  return (
    <section className="border-t border-black/5 bg-[#050609]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            Need guidance on your next purchase?
          </h3>
          <p className="mt-2 max-w-xl text-xs text-slate-300">
            Talk to a Wahaj Gold specialist to compare options &amp; find the right mix of bars and coins for you.
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
