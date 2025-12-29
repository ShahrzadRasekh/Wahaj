// app/(site)/[locale]/about/page.tsx
import AboutPage from "@/components/pages/AboutPage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";
  return <AboutPage locale={locale} />;
}
