"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { hrefFor } from "@/lib/nav";

export default function MainHeader() {
  const params = useParams<{ locale?: Locale }>();
  const pathname = usePathname();

  const locale = params?.locale; // undefined on default routes (English)
  const isArabic = locale === "ar";

  const navItems = [
    { label: isArabic ? "الرئيسية" : "Home", href: hrefFor(locale, "/") },
    { label: isArabic ? "السبائك" : "Minted Bars", href: hrefFor(locale, "/minted-bars") },
    { label: isArabic ? "المعايير والتتبع" : "Standards & Traceability", href: hrefFor(locale, "/standards-traceability") },
    { label: isArabic ? "عن وهج" : "About Wahaj", href: hrefFor(locale, "/about") },
    { label: isArabic ? "الأعمال" : "Business", href: hrefFor(locale, "/business") },
    { label: isArabic ? "تواصل" : "Contact", href: hrefFor(locale, "/contact") },
  ];

  // Language toggle:
  // - If currently on /ar/..., remove /ar
  // - If currently on default, add /ar
  const toggleHref = (() => {
    if (isArabic) {
      // strip leading "/ar" from pathname
      const stripped = pathname.replace(/^\/ar(\/|$)/, "/");
      return stripped === "" ? "/" : stripped;
    }
    // add /ar prefix (for Arabic)
    return pathname === "/" ? "/ar" : `/ar${pathname}`;
  })();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={hrefFor(locale, "/")} className="font-semibold tracking-tight">
          Wahaj Al Jawaher
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={toggleHref} className="rounded-lg border px-3 py-1.5 text-sm">
            {isArabic ? "EN" : "AR"}
          </Link>

          <Link
            href={`${hrefFor(locale, "/business")}#enquiry`}
            className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 md:inline-flex"
          >
            {isArabic ? "استفسار أعمال" : "Business Enquiry"}
          </Link>
        </div>
      </div>
    </header>
  );
}
