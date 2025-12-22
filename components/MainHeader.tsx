"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFavorites } from "@/lib/useFavorites";

export default function MainHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const { count, hydrated } = useFavorites();

  // Home: switch theme after scrolling so header stays visible on white sections
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme rules:
  // - Home TOP (before scroll): dark glass on hero (transparent, looks premium)
  // - Home AFTER scroll: white glass, dark text
  // - Inner pages: white glass, dark text
  const lightMode = !isHome || pastHero;

  // Header surface
  const headerClass = lightMode
    ? "bg-white/92 border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
    : "bg-black/35 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]";

  // Nav links
  const linkClass = lightMode
    ? "text-[11px] text-slate-700 hover:text-yellow-700 transition"
    : "text-[11px] text-white/90 hover:text-yellow-300 transition";

  // Brand
  const brandTop = lightMode ? "text-slate-900" : "text-white";
  const brandBottom = lightMode ? "text-slate-600" : "text-white/75";

  // Prices
  const pricesText = lightMode ? "text-slate-800" : "text-white/90";
  const priceLabel = lightMode ? "text-slate-500" : "text-white/70";
  const priceValue = lightMode ? "text-slate-900" : "text-yellow-200";

  // Favorites
  const favBorder = lightMode ? "border-black/15" : "border-white/30";
  const favText = lightMode ? "text-slate-900" : "text-white";
  const favHover = lightMode
    ? "hover:border-red-400 hover:text-red-600"
    : "hover:border-red-300 hover:text-red-200";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[9999] border-b backdrop-blur-md transition-all duration-300",
        headerClass,
      ].join(" ")}
      style={{ pointerEvents: "auto" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2 pointer-events-auto">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-700 shadow-lg shadow-yellow-500/40">
            <span className="text-xs font-black tracking-[0.15em] text-black">
              WG
            </span>
          </div>

          <div className="leading-tight">
            <div
              className={[
                "text-sm font-semibold tracking-[0.25em] uppercase",
                brandTop,
              ].join(" ")}
            >
              Wahaj <span className="text-yellow-500">Gold</span>
            </div>
            <div
              className={[
                "text-[10px] uppercase tracking-[0.24em]",
                brandBottom,
              ].join(" ")}
            >
              Gold &amp; Diamonds LLC
            </div>
          </div>
        </Link>

        {/* CENTER: NAV LINKS */}
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] lg:flex">
          {[
            { label: "Bullion", href: "/bullion" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: PRICES + FAVORITES */}
        <div className="flex items-center gap-4 text-[11px]">
          <div
            className={[
              "hidden items-center gap-4 md:flex",
              pricesText,
            ].join(" ")}
          >
            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "text-[10px] uppercase tracking-[0.16em]",
                  priceLabel,
                ].join(" ")}
              >
                GOLD Oz
              </span>
              <span className={["font-semibold", priceValue].join(" ")}>
                4,207.26
              </span>
            </div>

            <div className="flex flex-col leading-tight">
              <span
                className={[
                  "text-[10px] uppercase tracking-[0.16em]",
                  priceLabel,
                ].join(" ")}
              >
                GOLD g
              </span>
              <span className={["font-semibold", priceValue].join(" ")}>
                498.74
              </span>
            </div>
          </div>

          {/* Favorites icon */}
          <button
            type="button"
            onClick={() => router.push("/favorites")}
            className={[
              "relative pointer-events-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
              favBorder,
              favText,
              favHover,
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
