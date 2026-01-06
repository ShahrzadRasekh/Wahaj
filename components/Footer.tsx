// components/Footer.tsx
"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const prefix = `/${locale}`;

  const ui = {
    aboutTitle: isArabic ? "نبذة عن وهـاج" : "About Wahaj Gold",
    aboutText: isArabic
      ? "وهـاج جولد علامة متخصصة في الذهب والفضة عالية النقاء، ملتزمة بالشفافية والمعايير الدولية والتوريد المسؤول."
      : "Wahaj Gold is a precious metals brand focused on high-purity gold and silver, built on transparency, international standards, and responsible sourcing.",

    linksTitle: isArabic ? "روابط سريعة" : "Quick Links",
    complianceTitle: isArabic ? "الامتثال والثقة" : "Compliance & Trust",
    complianceText: isArabic
      ? "جميع المنتجات معروضة لأغراض معلوماتية فقط. الأسعار والمؤشرات غير ملزمة وقد تخضع للتغيير."
      : "All products are presented for informational purposes only. Prices and indicators are non-binding and subject to change.",

    follow: isArabic ? "تابعنا" : "Follow Us",
  };

  const links = [
    { href: `${prefix}`, labelEn: "Home", labelAr: "الرئيسية" },
    { href: `${prefix}/bullion`, labelEn: "Bullion", labelAr: "السبائك" },
    { href: `${prefix}/about`, labelEn: "About", labelAr: "من نحن" },
    { href: `${prefix}/contact`, labelEn: "Contact", labelAr: "تواصل معنا" },
  ];

  return (
    <footer
      className="mt-20 border-t border-black/5 bg-[#0f172a] text-slate-200"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* ABOUT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              {ui.aboutTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {ui.aboutText}
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              {ui.linksTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-300 transition hover:text-yellow-400"
                  >
                    {isArabic ? l.labelAr : l.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPLIANCE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              {ui.complianceTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {ui.complianceText}
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              {ui.follow}
            </h3>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                IN
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Wahaj Gold & Diamonds LLC.{" "}
          {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
