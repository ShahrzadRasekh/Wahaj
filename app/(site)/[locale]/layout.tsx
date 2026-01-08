import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import PriceTicker from "@/components/PriceTicker";

export default function SiteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;

  return (
    <>
      <PriceTicker locale={locale} />
      <MainHeader />
      {children}
      <Footer locale={locale} />
    </>
  );
}
