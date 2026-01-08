"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { hrefFor } from "@/lib/nav";

export default function MainHeader() {
  const params = useParams<{ locale?: Locale }>();
  const pathname = usePathname() || "/";

  // locale exists only on /[locale]/... routes
  const locale = params?.locale;
  const isArabic = locale === "ar";

  const navItems = [
    { label: isArabic ? "الرئيسية" : "Home", href: hrefFor(locale, "/") },

    { label: isArabic ? "عن وهج" : "About Wahaj", href: hrefFor(locale, "/about") },

    // Standards & Trust hub
    { label: isArabic ? "المعايير والثقة" : "Standards & Trust", href: hrefFor(locale, "/standards-trust") },

    { label: isArabic ? "التوريد المسؤول" : "Responsible Sourcing", href: hrefFor(locale, "/responsible-sourcing") },

    // Products hub
    { label: isArabic ? "المنتجات" : "Products", href: hrefFor(locale, "/products") },

    { label: isArabic ? "الأسئلة الشائعة" : "FAQ", href: hrefFor(locale, "/faq") },

    { label: isArabic ? "تواصل" : "Contact", href: hrefFor(locale, "/contact") },
  ];


  // Robust language toggle for your routing model:
  // - English default: /...
  // - Arabic: /ar/...
  //
  // When switching:
  // - From Arabic -> English: remove "/ar" prefix
  // - From English -> Arabic: add "/ar" prefix
  const toggleHref = (() => {
    const p = (pathname || "/").startsWith("/") ? (pathname || "/") : `/${pathname || ""}`;

    // Strip any leading locale segment first (/ar or /en)
    const stripped =
      p === "/ar" ? "/" :
      p.startsWith("/ar/") ? p.replace(/^\/ar/, "") :
      p === "/en" ? "/" :
      p.startsWith("/en/") ? p.replace(/^\/en/, "") :
      p;

    // Arabic -> English (default, no prefix)
    if (isArabic) return stripped === "" ? "/" : stripped;

    // English -> Arabic
    return stripped === "/" ? "/ar" : `/ar${stripped}`;
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
