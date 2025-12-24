import { en } from "./en";
import { ar } from "./ar";

export type Locale = "en" | "ar";

export function getDict(locale: Locale) {
  return locale === "ar" ? ar : en;
}
