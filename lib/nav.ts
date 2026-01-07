import type { Locale } from "@/lib/i18n";

export function hrefFor(locale: Locale | undefined, path: `/${string}`) {
  // Default locale = English (no prefix)
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}
