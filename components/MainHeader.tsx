"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useFavorites } from "@/lib/useFavorites";

export default function MainHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const { count, hydrated } = useFavorites();

  // On home, switch to "light mode" after you scroll past the hero
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light mode:
  // - Home after scroll: dark text
  // - Inner pages always: dark text
  // Dark mode:
  // - Home at top: light text (over hero)
  const lightMode = !isHome || pastHero;

  // ✅ Always glassy + transparent (all pages, even before scroll)
  // The only thing that changes is the border/shadow strength to keep it visible.
  const headerSurface = useMemo(() => {
    if (!lightMode) {
      // ✅ Home BEFORE scroll → 100% transparent glass
      return [
        "bg-transparent",             // ← no color at all
        "border-white/15",
        "shadow-[0_8px_20px_rgba(0,0,0,0.35)]",
      ].join(" ");
    }
  
    // Home AFTER scroll + inner pages
    return [
      "bg-white/20",                  // light glass
      "border-black/10",
      "shadow-[0_8px_24px_rgba(15,23,42,0.08)]",
    ].join(" ");
  }, [lightMode]);
  

  // Links + brand colors
  const linkClass = lightMode
    ? "text-[11px] text-slate-700 hover:text-yellow-700 transition"
    : "text-[11px] text-white/90 hover:text-yellow-300 transition";

  const brandTop = lightMode ? "text-slate-900" : "text-white";
  const brandBottom = lightMode ? "text-slate-600" : "text-white/75";

  // Prices
  const pricesText = lightMode ? "text-slate-800" : "text-white/90";
  const priceLabel = lightMode ? "text-slate-500" : "text-white/70";
  const priceValue = lightMode ? "text-slate-900" : "text-yellow-200";

  // Favorites button
  const favBorder = lightMode ? "border-black/15" : "border-white/30";
  const favText = lightMode ? "text-slate-900" : "text-white";
  const favHover = lightMode
    ? "hover:border-red-400 hover:text-red-600"
    : "hover:border-red-300 hover:text-red-200";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[9999] border-b backdrop-blur-xl transition-all duration-300",
        headerSurface,
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2">
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
          <div className={["hidden items-center gap-4 md:flex", pricesText].join(" ")}>
            <div className="flex flex-col leading-tight">
              <span className={["text-[10px] uppercase tracking-[0.16em]", priceLabel].join(" ")}>
                GOLD Oz
              </span>
              <span className={["font-semibold", priceValue].join(" ")}>
                4,207.26
              </span>
            </div>

            <div className="flex flex-col leading-tight">
              <span className={["text-[10px] uppercase tracking-[0.16em]", priceLabel].join(" ")}>
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
              "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
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
