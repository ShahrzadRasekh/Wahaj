import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Wahaj Gold | Trusted Precious Metals in Dubai",
  description:
    "Learn about Wahaj Gold, our approach to precious metals, and why clients trust us for gold bars, coins and curated collections.",
};

export default function Page() {
  return <AboutPage locale="en" />;
}
