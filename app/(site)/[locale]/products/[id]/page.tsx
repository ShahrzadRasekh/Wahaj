import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";
import { featuredProducts } from "@/lib/data/homeContent";

function hrefFor(locale: Locale, path: `/${string}`) {
  return locale === "ar" ? `/ar${path}` : path;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = rawLocale === "ar" ? "ar" : "en";
  const t = getDict(locale);
  const isArabic = locale === "ar";

  const productId = Number(id);
  const product = featuredProducts.find((p) => p.id === productId);

  if (!product) notFound();

  // Minimal localized strings (can move to dictionary later if you want)
  const ui = {
    breadcrumb: isArabic ? "المنتجات المميزة" : "Featured Products",
    back: isArabic ? "العودة" : "Back",
    backHome: isArabic ? "العودة للرئيسية" : "Back to home",
  };

  return (
    <main className="min-h-screen bg-white" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-gray-500">
          <Link href={hrefFor(locale, "/")} className="hover:text-gray-800">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <Link href={hrefFor(locale, "/#featured")} className="hover:text-gray-800">
            {ui.breadcrumb}
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">{product.name}</span>
        </nav>

        <section className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="rounded-3xl border border-gray-100 bg-[#f6f9fc] p-10 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            {product.description ? (
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {product.description}
              </p>
            ) : (
              <p className="mt-4 text-sm text-gray-500">
                {isArabic ? "الوصف غير متوفر حالياً." : "Description coming soon."}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={hrefFor(locale, "/#featured")}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 hover:bg-gray-50"
              >
                {ui.back}
                <span aria-hidden>→</span>
              </Link>

              <Link
                href={hrefFor(locale, "/")}
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-gray-900"
              >
                {ui.backHome}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
