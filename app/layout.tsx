import "./globals.css";
import type { Metadata } from "next";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Wahaj Gold | Premium Gold Bars & Bullion in Dubai",
  description:
    "Buy certified gold bars, coins and silver with live pricing, insured UAE delivery, and secure online ordering.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f7] text-slate-900 antialiased">
        <MainHeader />
        <main className="pt-[72px]">{children}</main>
      </body>
    </html>
  );
}
