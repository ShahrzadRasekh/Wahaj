"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

function hrefFor(locale: Locale, path: `/${string}`) {
  return locale === "ar" ? `/ar${path}` : path;
}

export default function ContactPage({ locale }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";

  const ui = {
    pageTitle: isArabic ? "تواصل معنا" : "Contact",
    addressTitle: isArabic ? "العنوان" : "Address",
    contactDetailsTitle: isArabic ? "بيانات التواصل" : "Contact Details",
    businessTimeTitle: isArabic ? "ساعات العمل" : "Business Time",
    getInTouchTitle: isArabic ? "تواصل معنا" : "Get In Touch",

    banner1Title: isArabic ? "اكتشف مجموعات وهـاج جولد" : "Discover Wahaj Gold Collections",
    banner1Text: isArabic ? "سبائك مميزة، هدايا مختارة، وخدمة موثوقة." : "Premium bullion, curated gifts, and trusted service.",

    banner2Title: isArabic ? "اشترِ الذهب بثقة" : "Buy Gold With Confidence",
    banner2Text: isArabic ? "طلب آمن ودعم موثوق عند الحاجة." : "Secure ordering and reliable support when you need it.",

    banner3Title: isArabic ? "نحن هنا للمساعدة" : "Here To Help",
    banner3Text: isArabic ? "تواصل معنا للتوفر والأسعار وتفاصيل التوصيل." : "Contact us for availability, pricing, and delivery details.",

    addressLine1: isArabic ? "وهـاج جولد (مثال)" : "Wahaj Gold (example)",
    addressLine2: isArabic ? "منطقة سوق الذهب" : "Gold Souq Area",
    addressLine3: isArabic ? "دبي، الإمارات العربية المتحدة" : "Dubai, United Arab Emirates",
    addressNote: isArabic
      ? "يمكنك لاحقاً تحديث هذا القسم بتفاصيل المحل/المبنى الدقيقة."
      : "Update this section later with your exact building / shop details.",

    businessTimeText: isArabic
      ? "من الإثنين إلى السبت: 10:00 صباحاً – 9:00 مساءً (GST)"
      : "Monday to Saturday: 10:00 AM – 9:00 PM (GST)",

    mapPlaceholderTitle: isArabic ? "عنصر نائب لخريطة العالم / الموقع." : "World map / location image placeholder.",
    mapPlaceholderText: isArabic
      ? "لاحقاً يمكنك استبدال هذا بخريطة حقيقية أو صورة تحمل هوية العلامة التجارية."
      : "Later you can replace this with a real map or branded image.",
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-slate-900" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500">
          <Link href={hrefFor(locale, "/")} className="hover:text-slate-700">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">{t.common.contact}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[280px,minmax(0,1fr)]">
          {/* LEFT: BANNERS */}
          <aside className="space-y-6">
            <div className="relative h-80 overflow-hidden rounded-[32px] shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <img
                src="/contact/banner-main%20(2).jpg"
                alt={ui.banner1Title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                  {ui.banner1Title}
                </p>
                <p className="mt-2 text-xs text-white/90">{ui.banner1Text}</p>
              </div>
            </div>

            <div className="relative h-52 overflow-hidden rounded-[32px] shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <img
                src="/contact/banner-2.jpg"
                alt={ui.banner2Title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                  {ui.banner2Title}
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/90">{ui.banner2Text}</p>
              </div>
            </div>

            <div className="relative hidden h-52 overflow-hidden rounded-[32px] shadow-[0_12px_30px_rgba(15,23,42,0.16)] md:block">
              <img
                src="/contact/banner-3 (2).jpg"
                alt={ui.banner3Title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                  {ui.banner3Title}
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/90">{ui.banner3Text}</p>
              </div>
            </div>
          </aside>

          {/* RIGHT: CONTENT */}
          <section className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                {ui.pageTitle}
              </h1>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">{ui.addressTitle}</h2>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>{ui.addressLine1}</p>
                  <p>{ui.addressLine2}</p>
                  <p>{ui.addressLine3}</p>
                  <p className="pt-2 text-xs text-slate-500">{ui.addressNote}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">{ui.contactDetailsTitle}</h2>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>+971 XX XXX XXXX</p>
                  <p>+971 X XXX XXXX</p>
                  <p>support@wahajgold.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">{ui.businessTimeTitle}</h2>
              <p className="text-sm text-slate-700">{ui.businessTimeText}</p>
            </div>

            <div className="rounded-[32px] border border-dashed border-slate-200 bg-white px-10 py-20 shadow-lg shadow-slate-300/30">
              <div className="flex h-full items-center justify-center text-center text-xs text-slate-500">
                <div>
                  <p>{ui.mapPlaceholderTitle}</p>
                  <p className="mt-2">
                    {ui.mapPlaceholderText}{" "}
                    <span className="mx-1 font-mono text-[10px]">/contact/world-map.png</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {ui.getInTouchTitle}
              </h2>
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
