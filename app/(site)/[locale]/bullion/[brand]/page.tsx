// app/(site)/[locale]/bullion/[brand]/page.tsx
import BullionBrandPage from "@/components/pages/BullionBrandPage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  const { locale: rawLocale, brand } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";
  return <BullionBrandPage locale={locale} brand={brand} />;
}
