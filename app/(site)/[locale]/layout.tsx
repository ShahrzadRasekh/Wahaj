// app/(site)/[locale]/layout.tsx
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

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
      <MainHeader locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
