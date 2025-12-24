import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "من نحن | وهـاج جولد",
  description:
    "تعرف على وهـاج جولد ونهجنا في المعادن الثمينة ولماذا يثق بنا العملاء في شراء السبائك والعملات والمجموعات المختارة.",
};

export default function Page() {
  return <AboutPage locale="ar" />;
}
