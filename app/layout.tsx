import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "Wahaj Gold",
  description: "Wahaj Gold website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {/* Padding so content doesn't go under fixed header */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
