import type { Metadata } from "next";
import "../globals.css";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "وهـاج جولد",
  description: "موقع وهـاج جولد",
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <MainHeader />
        {/* Padding so content doesn't go under fixed header */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
