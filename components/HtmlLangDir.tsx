"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HtmlLangDir() {
  const pathname = usePathname() || "/";
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", isArabic ? "ar" : "en");
    html.setAttribute("dir", isArabic ? "rtl" : "ltr");
  }, [isArabic]);

  return null;
}
