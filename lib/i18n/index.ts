import { en } from "./en";
import { ar } from "./ar";

export type Locale = "en" | "ar";

export const dictionaries = {
  en,
  ar,
} as const;

export function getDict(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
