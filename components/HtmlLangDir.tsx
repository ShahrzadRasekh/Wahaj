// components/HtmlLangDir.tsx
"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export default function HtmlLangDir({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  return null;
}
