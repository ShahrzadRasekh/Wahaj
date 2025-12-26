"use client";

import Link from "next/link";

export default function HeaderActions({
  isArabic,
  heroMode,
  favoritesHref,
  favoritesCount,
  hydrated,
  switchHref,
}: {
  isArabic: boolean;
  heroMode: boolean;
  favoritesHref: string;
  favoritesCount: number;
  hydrated: boolean;
  switchHref: string;
}) {
  const favBtn = heroMode
    ? "border-white/30 text-slate-100 hover:border-red-400 hover:text-red-300"
    : "border-black/10 text-slate-700 hover:border-red-300 hover:text-red-500 bg-white";

  const langBtn = heroMode
    ? "border-white/25 text-white/85 hover:text-yellow-300 hover:border-white/35"
    : "border-slate-300 text-slate-700 hover:text-yellow-600 hover:border-slate-400";

  return (
    <div className="flex items-center gap-3 text-[11px]">
      {/* Favorites */}
      <Link
        href={favoritesHref}
        className={[
          "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
          favBtn,
        ].join(" ")}
        aria-label="Open favourites"
      >
        <span className="text-lg leading-none">♥</span>
        {hydrated && favoritesCount > 0 && (
          <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
            {favoritesCount}
          </span>
        )}
      </Link>

      {/* Language switch */}
      <button
        type="button"
        onClick={() => window.location.assign(switchHref)}
        className={[
          "hidden sm:inline-flex h-9 items-center justify-center rounded-full border px-3",
          "text-[11px] font-medium uppercase tracking-[0.18em] transition",
          langBtn,
        ].join(" ")}
        aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      >
        {isArabic ? "EN" : "AR"}
      </button>
    </div>
  );
}
