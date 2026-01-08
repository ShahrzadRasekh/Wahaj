import BullionBrandPage from "@/components/pages/BullionBrandPage";

export default function Page({ params }: { params: { brand: string } }) {
  return <BullionBrandPage locale="en" brand={params.brand} />;
}
