// app/(site)/[locale]/contact/page.tsx
import ContactPage from "@/components/pages/ContactPage";
import type { Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";
  return <ContactPage locale={locale} />;
}
