"use client";

import Link from "next/link";

export default function HeaderBrand({
  isArabic,
  href,
  heroMode,
}: {
  isArabic: boolean;
  href: string;
  heroMode: boolean;
}) {
  const brandTop = heroMode ? "text-slate-50" : "text-slate-900";
  const brandSub = heroMode ? "text-slate-200" : "text-slate-600";

  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2",
        // In Arabic we want: brand text first (right), logo on its right
        // So we reverse the row (logo goes visually to the far right)
        isArabic ? "flex-row-reverse text-right" : "flex-row text-left",
      ].join(" ")}
      aria-label="Go to home"
    >
      {/* Logo */}
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-700 shadow-lg shadow-yellow-500/40">
        <span className="text-xs font-black tracking-[0.15em] text-black">WG</span>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <div className={`text-sm font-semibold tracking-[0.25em] uppercase ${brandTop}`}>
          Wahaj <span className="text-yellow-500">Gold</span>
        </div>
        <div className={`text-[10px] uppercase tracking-[0.24em] ${brandSub}`}>
          Gold &amp; Diamonds LLC
        </div>
      </div>
    </Link>
  );
}
