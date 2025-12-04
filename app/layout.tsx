import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wahaj Gold | Premium Gold Bars & Bullion in Dubai',
  description:
    'Buy certified gold bars, coins and silver with live pricing, insured UAE delivery, and secure online ordering.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050609] text-slate-50 antialiased">{children}</body>
    </html>
  );
}
