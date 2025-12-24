import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  const homeHref = locale === "ar" ? "/ar" : "/";
  const contactHref = locale === "ar" ? "/ar/contact" : "/contact";

  // Minimal bilingual strings for now (we’ll move these to dictionary next)
  const ui = {
    pageTitle: locale === "ar" ? "تواصل معنا" : "Contact",
    addressTitle: locale === "ar" ? "العنوان" : "Address",
    contactDetailsTitle: locale === "ar" ? "بيانات التواصل" : "Contact Details",
    businessTimeTitle: locale === "ar" ? "ساعات العمل" : "Business Time",
    getInTouchTitle: locale === "ar" ? "تواصل معنا" : "Get In Touch",

    banner1Title:
      locale === "ar" ? "اكتشف مجموعات وهـاج جولد" : "Discover Wahaj Gold Collections",
    banner1Text:
      locale === "ar"
        ? "سبائك مميزة، هدايا مختارة، وخدمة موثوقة."
        : "Premium bullion, curated gifts, and trusted service.",

    banner2Title:
      locale === "ar" ? "اشترِ الذهب بثقة" : "Buy Gold With Confidence",
    banner2Text:
      locale === "ar"
        ? "طلب آمن ودعم موثوق عند الحاجة."
        : "Secure ordering and reliable support when you need it.",

    banner3Title: locale === "ar" ? "نحن هنا للمساعدة" : "Here To Help",
    banner3Text:
      locale === "ar"
        ? "تواصل معنا للتوفر والأسعار وتفاصيل التوصيل."
        : "Contact us for availability, pricing, and delivery details.",

    // Address block (placeholder)
    addressLine1: locale === "ar" ? "وهـاج جولد (مثال)" : "Wahaj Gold (example)",
    addressLine2: locale === "ar" ? "منطقة سوق الذهب" : "Gold Souq Area",
    addressLine3: locale === "ar" ? "دبي، الإمارات العربية المتحدة" : "Dubai, United Arab Emirates",
    addressNote:
      locale === "ar"
        ? "يمكنك لاحقاً تحديث هذا القسم بتفاصيل المحل/المبنى الدقيقة."
        : "Update this section later with your exact building / shop details.",

    businessTimeText:
      locale === "ar"
        ? "من الإثنين إلى السبت: 10:00 صباحاً – 9:00 مساءً (GST)"
        : "Monday to Saturday: 10:00 AM – 21:00 PM (GST)",

    mapPlaceholderTitle:
      locale === "ar"
        ? "عنصر نائب لخريطة العالم / الموقع."
        : "World map / location image placeholder.",
    mapPlaceholderText:
      locale === "ar"
        ? "لاحقاً يمكنك استبدال هذا بخريطة حقيقية أو صورة تحمل هوية العلامة التجارية."
        : "Later you can replace this with a real map or branded image.",
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500">
          <Link href={homeHref} className="hover:text-slate-700">
            {t.nav.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">{t.nav.contact}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[280px,minmax(0,1fr)]">
          {/* LEFT COLUMN – MEDIA BANNERS */}
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
                <p className="mt-2 text-[11px] leading-relaxed text-white/90">
                  {ui.banner2Text}
                </p>
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
                <p className="mt-2 text-[11px] leading-relaxed text-white/90">
                  {ui.banner3Text}
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN – CONTENT + FORM */}
          <section className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                {ui.pageTitle}
              </h1>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">
                  {ui.addressTitle}
                </h2>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>{ui.addressLine1}</p>
                  <p>{ui.addressLine2}</p>
                  <p>{ui.addressLine3}</p>
                  <p className="pt-2 text-xs text-slate-500">{ui.addressNote}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">
                  {ui.contactDetailsTitle}
                </h2>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>+971 XX XXX XXXX</p>
                  <p>+971 X XXX XXXX</p>
                  <p>support@wahajgold.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                {ui.businessTimeTitle}
              </h2>
              <p className="text-sm text-slate-700">{ui.businessTimeText}</p>
            </div>

            <div className="rounded-[32px] border border-dashed border-slate-200 bg-white px-10 py-20 shadow-lg shadow-slate-300/30">
              <div className="flex h-full items-center justify-center text-center text-xs text-slate-500">
                <div>
                  <p>{ui.mapPlaceholderTitle}</p>
                  <p className="mt-2">
                    {ui.mapPlaceholderText}{" "}
                    <span className="mx-1 font-mono text-[10px]">
                      /contact/world-map.png
                    </span>
                    .
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

