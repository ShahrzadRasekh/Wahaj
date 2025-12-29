import { en } from "./en";
import { ar } from "./ar";

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export function isLocale(x: string): x is Locale {
  return x === "en" || x === "ar";
}

export function getDict(locale: Locale) {
  return locale === "ar" ? ar : en;
}
