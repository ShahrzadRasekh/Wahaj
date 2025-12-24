import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import HtmlLangDir from "@/components/HtmlLangDir";

export const metadata: Metadata = {
  title: "Wahaj Gold",
  description: "Wahaj Gold website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <HtmlLangDir />
        <MainHeader />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
