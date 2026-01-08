import MintedBarsCataloguePage from "@/components/pages/MintedBarsCataloguePage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MintedBarsCataloguePage locale={locale} />;
}
