"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HtmlLangDir() {
  const pathname = usePathname() || "/";
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  useEffect(() => {
    const html = document.documentElement;
    html.lang = isArabic ? "ar" : "en";
    html.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  return null;
}
