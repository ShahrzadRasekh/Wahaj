// app/(site)/[locale]/gifts/page.tsx
import GiftCollectionsPage from "@/components/pages/GiftCollectionsPage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";

  return <GiftCollectionsPage locale={locale} />;
}
