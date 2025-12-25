// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import HtmlLangDir from "@/components/HtmlLangDir";

export const metadata: Metadata = {
  title: "Wahaj Gold",
  description: "Wahaj Gold website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {/* 1️⃣ Sets <html lang> and <html dir> dynamically */}
        <HtmlLangDir />

        {/* 2️⃣ Header reads pathname and flips layout */}
        <MainHeader />

        {/* 3️⃣ Page content */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
