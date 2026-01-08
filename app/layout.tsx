// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wahaj Al Jawaher",
  description: "Iraqi precious metals company producing minted gold and silver bars to internationally recognized standards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#fbfbfb] text-slate-900">
        {children}
      </body>
    </html>
  );
}
