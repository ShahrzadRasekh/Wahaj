"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useFavorites } from "@/lib/useFavorites";

type NavItem = { label: string; href: string };
type LivePrices = { goldOz: string; goldG: string };

export default function MainHeader() {
  const pathname = usePathname() || "/";
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");
  const isHome = pathname === "/" || pathname === "/ar";

  const navItemsEn: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Bullion", href: "/bullion" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  const navItemsAr: NavItem[] = useMemo(
    () => [
      { label: "الرئيسية", href: "/ar" },
      { label: "السبائك", href: "/ar/bullion" },
      { label: "من نحن", href: "/ar/about" },
      { label: "تواصل", href: "/ar/contact" },
    ],
    []
  );

  const navItems = isArabic ? navItemsAr : navItemsEn;

  const { count, hydrated } = useFavorites();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [prices, setPrices] = useState<LivePrices>({ goldOz: "--", goldG: "--" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    let alive = true;

    async function loadPrices() {
      try {
        const res = await fetch("/api/live-prices", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as Partial<LivePrices>;
        if (!alive) return;
        setPrices({
          goldOz: data.goldOz ?? "--",
          goldG: data.goldG ?? "--",
        });
      } catch {
        // keep "--"
      }
    }

    loadPrices();
    const id = window.setInterval(loadPrices, 60_000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && !isArabic) return pathname === "/";
    if (href === "/ar" && isArabic) return pathname === "/ar";
    return pathname.startsWith(href);
  };

  const switchTo = (toArabic: boolean) => {
    const current = pathname || "/";
    if (toArabic) {
      if (current === "/") return "/ar";
      if (current.startsWith("/ar")) return current;
      return `/ar${current}`;
    } else {
      if (current === "/ar") return "/";
      if (current.startsWith("/ar/")) return current.replace("/ar", "");
      return current;
    }
  };

  const switchHref = isArabic ? switchTo(false) : switchTo(true);

  // IMPORTANT: hero mode for BOTH homepages
  const heroMode = isHome && !scrolled;

  const headerClass = heroMode
    ? "bg-black/35 backdrop-blur-md border-b border-white/10"
    : "bg-white/95 backdrop-blur-md border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]";

  const brandTop = heroMode ? "text-slate-50" : "text-slate-900";
  const brandSub = heroMode ? "text-slate-200" : "text-slate-600";

  const navInactive = heroMode
    ? "text-slate-200 hover:text-yellow-300"
    : "text-slate-700 hover:text-yellow-600";

  const navActive = heroMode ? "text-yellow-300" : "text-yellow-600";

  const priceLabel = heroMode ? "text-yellow-200" : "text-slate-500";

  const favBtn = heroMode
    ? "border-white/30 text-slate-100 hover:border-red-400 hover:text-red-300"
    : "border-black/10 text-slate-700 hover:border-red-300 hover:text-red-500 bg-white";

  const langBtn = heroMode
    ? "border-white/25 text-white/85 hover:text-yellow-300 hover:border-white/35"
    : "border-slate-300 text-slate-700 hover:text-yellow-600 hover:border-slate-400";

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      {/* MAIN ROW: MUST MIRROR IN AR */}
      <div
        className={[
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
          isArabic ? "flex-row-reverse" : "flex-row",
        ].join(" ")}
      >
        {/* LOGO */}
        <Link
          href={isArabic ? "/ar" : "/"}
          className={[
            "flex items-center gap-2 text-left",
            isArabic ? "text-right" : "text-left",
          ].join(" ")}
          aria-label="Go to home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-700 shadow-lg shadow-yellow-500/40">
            <span className="text-xs font-black tracking-[0.15em] text-black">WG</span>
          </div>

          <div className="leading-tight">
            <div className={`text-sm font-semibold tracking-[0.25em] uppercase ${brandTop}`}>
              Wahaj <span className="text-yellow-500">Gold</span>
            </div>
            <div className={`text-[10px] uppercase tracking-[0.24em] ${brandSub}`}>
              Gold &amp; Diamonds LLC
            </div>
          </div>
        </Link>

        {/* NAV (Desktop) */}
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={["text-[11px] transition", isActive(item.href) ? navActive : navInactive].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT GROUP (in English) / LEFT GROUP (in Arabic) */}
        <div className="flex items-center gap-3 text-[11px]">
          {/* Prices (desktop) */}
          <div
            className={[
              "hidden items-center gap-4 md:flex",
              // make the order feel natural in RTL
              isArabic ? "flex-row-reverse" : "flex-row",
            ].join(" ")}
          >
            <div className="flex flex-col leading-tight">
              <span className={`text-[10px] uppercase tracking-[0.16em] ${priceLabel}`}>GOLD Oz</span>
              <span className="font-semibold text-yellow-500 tabular-nums">{prices.goldOz}</span>
            </div>

            <div className="flex flex-col leading-tight">
              <span className={`text-[10px] uppercase tracking-[0.16em] ${priceLabel}`}>GOLD g</span>
              <span className="font-semibold text-yellow-500 tabular-nums">{prices.goldG}</span>
            </div>
          </div>

          {/* Favorites */}
          <Link
            href={isArabic ? "/ar/favorites" : "/favorites"}
            className={[
              "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition",
              favBtn,
            ].join(" ")}
            aria-label="Open favourites"
          >
            <span className="text-lg leading-none">♥</span>
            {hydrated && count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                {count}
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

          {/* Mobile menu */}
          <button
            type="button"
            className={[
              "lg:hidden rounded-md border px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition",
              heroMode
                ? "border-white/25 text-white/85 hover:text-yellow-300 hover:border-white/35"
                : "border-slate-300 text-slate-700 hover:text-yellow-600 hover:border-slate-400",
            ].join(" ")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-200",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div
            className={
              heroMode
                ? "rounded-xl border border-white/15 bg-slate-950/55 backdrop-blur p-3"
                : "rounded-xl border border-slate-200 bg-white/95 backdrop-blur p-3"
            }
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition",
                    isActive(item.href)
                      ? heroMode
                        ? "text-yellow-300 bg-white/10"
                        : "text-yellow-600 bg-slate-100"
                      : heroMode
                      ? "text-white/85 hover:text-yellow-300 hover:bg-white/10"
                      : "text-slate-700 hover:text-yellow-600 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              className={[
                "mt-3 flex items-center justify-between gap-3",
                isArabic ? "flex-row-reverse" : "flex-row",
              ].join(" ")}
            >
              <div className="flex flex-1 items-center justify-between rounded-lg border border-black/5 bg-black/5 px-3 py-2 text-[11px]">
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">GOLD Oz</span>
                  <span className="font-semibold text-yellow-600 tabular-nums">{prices.goldOz}</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">GOLD g</span>
                  <span className="font-semibold text-yellow-600 tabular-nums">{prices.goldG}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => window.location.assign(switchHref)}
                className="inline-flex h-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700 hover:text-yellow-600 hover:border-slate-400 transition"
              >
                {isArabic ? "EN" : "AR"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
