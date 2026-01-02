import { notFound, permanentRedirect } from "next/navigation";
import type { Locale } from "@/lib/i18n";
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

  const productId = Number(id);
  const product = featuredProducts.find((p) => p.id === productId);
  if (!product) notFound();

  permanentRedirect(hrefFor(locale, `/products/${product.slug}`));
}
