// app/(site)/[locale]/page.tsx
import HomePage from "@/components/pages/HomePage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";
  return <HomePage locale={locale} />;
}
