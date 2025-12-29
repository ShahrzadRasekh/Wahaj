"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

function hrefFor(locale: Locale, path: `/${string}`) {
  return locale === "ar" ? `/ar${path}` : path;
}

export default function AboutPage({ locale }: Props) {
  const t = getDict(locale);
  const isArabic = locale === "ar";

  const ui = {
    pageTitle: isArabic ? "من نحن" : "About",
    section1Title: isArabic ? "حول وهـاج جولد" : "About Wahaj Gold",
    section2Title: isArabic ? "لماذا نحن" : "Why Choose Us",
    section3Title: isArabic ? "اكتشف كتالوج السبائك" : "Discover Our Bullion Catalogue",

    banner1Title: isArabic ? "تسوق وهـاج جولد عبر الإنترنت" : "Shop Wahaj Gold Online",
    banner1Text: isArabic ? "سبائك مميزة ومجموعات مختارة." : "Premium bullion and curated collections.",

    banner2Title: isArabic ? "الذهب ببساطة" : "Gold Made Simple",
    banner2Text: isArabic ? "سبائك معتمدة وتوصيل آمن." : "Certified bars delivered securely.",

    banner3Title: isArabic ? "علامات معتمدة" : "Certified Brands",
    banner3Text: isArabic ? "PAMP وValcambi وغيرها." : "PAMP, Valcambi, and more.",

    p1: isArabic
      ? "وهـاج جولد وجهة مخصصة للمستثمرين وهواة الاقتناء الراغبين في امتلاك المعادن الثمينة بشكل واضح وموثوق. دورنا بسيط: ربطك بسبائك ذهب وعملات ومجموعات مختارة من جهات تكرير عالمية معتمدة، عبر تجربة شراء إلكترونية هادئة وشفافة."
      : "Wahaj Gold is a dedicated destination for investors and collectors who want to hold physical precious metals with clarity and confidence. Our role is simple: connect you with certified gold bars, coins and curated collections from trusted international refiners, through an online experience that feels calm and transparent.",

    p2: isArabic
      ? "نختار كل منتج وفق الجودة والسمعة وملاءمته للاحتفاظ طويل الأمد. سواء كنت تبدأ بأول سبيكة أو توسّع مخصصاتك، نهدف لجعل كل خطوة—من التصفح حتى الاستلام—سهلة ومباشرة."
      : "Every product we list is selected for its quality, reputation and suitability for long–term holding. Whether you are just starting with your first bar or growing an existing allocation, we aim to make each step – from browsing to receiving – as straightforward as possible.",

    p3: isArabic
      ? "في وهـاج جولد نركز على ثلاثة أمور: الوضوح والثقة والخدمة. نعرض الأسعار والمواصفات ومعلومات العلامات بأكبر قدر من الشفافية حتى تعرف تماماً ما تشتريه ولماذا قد يناسب أهدافك."
      : "At Wahaj Gold, we prioritize three things: clarity, trust and service. Pricing, specifications and brand information are presented as clearly as possible, so you always understand what you are buying and why it might suit your goals.",

    p4: isArabic
      ? "نعمل فقط مع جهات تكرير ودور سك معروفة، ونطوّر باستمرار الكتالوج وتجربة الموقع والدعم لتلبية توقعات المستثمرين الجادّين. عند تواصلك معنا ستجد فريقاً يقدّر أهمية هذه القرارات ويحترم وتيرتك."
      : "We work only with recognized refiners and mints, and we are continuously improving our product catalogue, website experience and support to meet the expectations of serious investors. When you reach out, you speak to a team that understands the weight of these decisions and respects your pace.",

    p5: isArabic
      ? "يجمع كتالوجنا علامات عالمية معروفة وجهات تكرير محلية، بأوزان وأشكال متعددة—من سبائك استثمارية كلاسيكية إلى مجموعات قابلة للإهداء."
      : "Our online catalogue brings together well–known international brands and local refiners, covering a range of weights and formats – from classic investment bars to giftable collections.",

    p6: isArabic
      ? "ومع نمو وهـاج جولد سنواصل توسيع المنتجات والمحتوى التعليمي والأدوات لمساعدتك على بناء وحماية مقتنياتك بثقة وراحة."
      : "As Wahaj Gold grows, we will continue expanding the range of products, educational content and tools available to you, so that building and preserving your precious metals position feels both informed and comfortable.",

    ctaBullion: isArabic ? "استعرض السبائك" : "Explore Bullion",
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7]" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-gray-500">
          <Link href={hrefFor(locale, "/")} className="hover:text-gray-800">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">{t.common.about}</span>
        </nav>

        <section className="grid gap-10 md:grid-cols-[280px,1fr]">
          {/* LEFT: BANNERS */}
          <aside className="space-y-6">
            <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <img
                src="/about/banner-main.jpg"
                alt="Wahaj Gold banner"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  {ui.banner1Title}
                </p>
                <p className="mt-2 text-xs text-white/90">{ui.banner1Text}</p>
              </div>
            </div>

            <div className="relative h-[200px] overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <img
                src="/about/banner-2.jpg"
                alt="Gold made simple"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  {ui.banner2Title}
                </p>
                <p className="mt-1 text-xs text-white/90">{ui.banner2Text}</p>
              </div>
            </div>

            <div className="relative hidden h-[200px] overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(15,23,42,0.16)] md:block">
              <img
                src="/about/banner-3.jpg"
                alt="Certified brands"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  {ui.banner3Title}
                </p>
                <p className="mt-1 text-xs text-white/90">{ui.banner3Text}</p>
              </div>
            </div>
          </aside>

          {/* RIGHT: TEXT */}
          <div>
            <h1 className="mb-6 text-3xl font-bold text-gray-900">{ui.pageTitle}</h1>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900">{ui.section1Title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{ui.p1}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{ui.p2}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900">{ui.section2Title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{ui.p3}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{ui.p4}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900">{ui.section3Title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{ui.p5}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{ui.p6}</p>

              <div className="mt-6">
                <Link
                  href={hrefFor(locale, "/bullion")}
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-gray-900"
                >
                  {ui.ctaBullion}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
