import type { ReactNode } from "react";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import PriceTicker from "@/components/PriceTicker";

export default function DefaultSiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PriceTicker locale="en" />
      <MainHeader />
      {children}
      <Footer locale="en" />
    </>
  );
}
