// app/(site)/[locale]/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { allFeaturedProducts } from "@/lib/data/homeContent";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

import RelatedProducts from "@/components/products/RelatedProducts";

function siteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://wahajgold.com"
  );
}

function absUrl(path: string) {
  const base = siteUrl();
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "ar"];
  return locales.flatMap((locale) =>
    allFeaturedProducts.map((p) => ({
      locale,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = (params.locale === "ar" ? "ar" : "en") as Locale;
  const product = allFeaturedProducts.find((p) => p.slug === params.slug);

  if (!product) return {};

  const title = `${product.name} | Wahaj Gold`;
  const description =
    product.description ||
    (locale === "ar"
      ? "منتج مختار من وهـاج جولد."
      : "A featured product from Wahaj Gold.");

  // Canonical should be absolute for best SEO consistency
  const canonicalPath = `/${locale}/products/${product.slug}`;
  const canonicalAbs = absUrl(canonicalPath);

  return {
    title,
    description,

    alternates: {
      canonical: canonicalAbs,
      languages: {
        en: absUrl(`/en/products/${product.slug}`),
        ar: absUrl(`/ar/products/${product.slug}`),
      },
    },

    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalAbs,
      siteName: "Wahaj Gold",
      locale: locale === "ar" ? "ar_AE" : "en_US",
      images: [
        {
          url: absUrl(product.image),
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absUrl(product.image)],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params.locale === "ar" ? "ar" : "en") as Locale;
  const t = getDict(locale);

  const product = allFeaturedProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const isArabic = locale === "ar";

  const homeHref = `/${locale}`;

  // If your homepage section id changes later, this is the only line you update.
  const featuredAnchorId = "featured";
  const productsHref = `/${locale}#${featuredAnchorId}`;

  return (
    <main className="min-h-screen bg-[#f5f5f7]" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-24">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500">
          <Link href={homeHref} className="hover:text-slate-700">
            {t.common.home}
          </Link>
          <span className="mx-1">›</span>
          <Link href={productsHref} className="hover:text-slate-700">
            {isArabic ? "المنتجات المميزة" : "Featured Products"}
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[420px,1fr]">
          <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-80 w-auto object-contain"
              loading="eager"
            />
          </div>

          <section className="rounded-3xl bg-white p-10 shadow-sm">
            <h1 className="text-3xl font-semibold text-slate-900">
              {product.name}
            </h1>

            {product.description ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {product.description}
              </p>
            ) : (
              <p className="mt-4 text-sm text-slate-600">
                {isArabic
                  ? "تفاصيل المنتج ستتوفر قريباً."
                  : "More details coming soon."}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={homeHref}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-50"
              >
                {isArabic ? "العودة للرئيسية" : "Back to Home"}
              </Link>
            </div>
          </section>
        </div>

        {/* Related Products / Cross-linking */}
        <RelatedProducts
          locale={locale}
          current={{
            id: product.id,
            slug: product.slug,
            name: product.name,
            description: product.description,
            image: product.image,
            metal: product.metal,
          }}
          products={allFeaturedProducts.map((p) => ({
            id: p.id,
            slug: p.slug,
            name: p.name,
            description: p.description,
            image: p.image,
            metal: p.metal,
          }))}
        />
      </div>

      {/* JSON-LD Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: [absUrl(product.image)],
            description: product.description || "",
            brand: { "@type": "Brand", name: "Wahaj Gold" },
            url: absUrl(`/${locale}/products/${product.slug}`),
          }),
        }}
      />
    </main>
  );
}
