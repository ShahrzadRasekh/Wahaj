// app/(site)/[locale]/layout.tsx
import type { Locale } from "@/lib/i18n";
import MainHeader from "@/components/MainHeader";
import HtmlLangDir from "@/components/HtmlLangDir";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";

  return (
    <>
      <HtmlLangDir locale={locale} />
      <MainHeader locale={locale} />
      <main className="pt-16">{children}</main>
    </>
  );
}
