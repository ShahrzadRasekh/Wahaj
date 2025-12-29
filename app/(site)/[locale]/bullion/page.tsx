// app/(site)/[locale]/bullion/page.tsx
import BullionCataloguePage from "@/components/pages/BullionCataloguePage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";
  return <BullionCataloguePage locale={locale} />;
}
