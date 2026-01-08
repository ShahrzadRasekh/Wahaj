import Link from "next/link";

function hrefFor(locale: string, path: `/${string}`) {
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            {isAr ? "نهج يعتمد على المعايير • امتثال وثقة" : "Standards-led • Compliance posture • Trust by design"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            {isAr ? "المعايير والثقة" : "Standards & Trust"}
          </h1>
          <p className="mt-4 text-slate-700">
            {isAr
              ? "تعمل وهج الجواهر بمنهج واضح قائم على الشرعية والمساءلة ونزاهة المنتج. الشفافية والتوريد المسؤول متطلبات تشغيلية قبل أي عملية شراء."
              : "Wahaj Al Jawaher operates with a clear emphasis on legitimacy, accountability, and product integrity. Transparency and responsible sourcing are operational requirements—before any transaction."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={hrefFor(locale, "/products")}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
            >
              {isAr ? "استكشف المنتجات" : "Explore Products"}
            </Link>
            <Link
              href={hrefFor(locale, "/responsible-sourcing")}
              className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
            >
              {isAr ? "التوريد المسؤول" : "Responsible Sourcing"}
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            [
              isAr ? "بيان الامتثال" : "Compliance Statement",
              isAr
                ? "تعطي وهج الجواهر الأولوية للوضوح ومبادئ التتبع والإنتاج المنضبط وفق معايير دولية معترف بها."
                : "Wahaj Al Jawaher prioritizes clarity, traceability principles, and disciplined production aligned with internationally recognized standards.",
            ],
            [
              isAr ? "المواءمة التنظيمية" : "Regulatory Alignment",
              isAr
                ? "نعمل بمنهج مسؤول يدعم الشرعية والتوثيق والمساءلة."
                : "We operate with a responsibility-first posture and a commitment to legitimacy, documentation, and accountability.",
            ],
            [
              isAr ? "مبادئ AML و KYC" : "AML & KYC Principles",
              isAr
                ? "للجهات المؤسسية: تواصل منظم يدعم الأعمال المسؤولة وتوقعات التحقق والوعي بالمخاطر."
                : "For institutional discussions, Wahaj follows structured engagement principles that support responsible business, verification expectations, and risk-awareness.",
            ],
            [
              isAr ? "إخلاء المسؤولية" : "Risk & Responsibility Disclaimer",
              isAr
                ? "محتوى المرحلة الأولى معلوماتي. أي مؤشرات سعرية غير ملزمة. سيتم تفعيل الشراء الآمن في المرحلة الثانية."
                : "Phase 1 content is informational. Any pricing indicators are non-binding. Secure online purchasing will be enabled in Phase 2.",
            ],
          ].map(([t, d]) => (
            <div key={String(t)} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{t}</h2>
              <p className="mt-2 text-slate-700">{d}</p>
              {String(t).includes("Disclaimer") || String(t).includes("إخلاء") ? (
                <div className="mt-4">
                  <Link href={hrefFor(locale, "/legal/risk-disclosure")} className="text-sm font-medium underline">
                    {isAr ? "عرض إفصاح المخاطر" : "View Risk Disclosure"}
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">
            {isAr ? "هل تحتاج توثيقاً أو نقاشاً مؤسسياً؟" : "Need Documentation or Institutional Discussion?"}
          </h2>
          <p className="mt-2 text-white/80">
            {isAr
              ? "استخدم مسار تواصل منظم لطلب التوثيق وفتح نقاشات الشراكة."
              : "Use a structured enquiry path for documentation guidance and partnership discussions."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`${hrefFor(locale, "/contact")}?type=docs`} className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              {isAr ? "طلب توثيق" : "Request Documentation"}
            </Link>
            <Link href={`${hrefFor(locale, "/business")}#enquiry`} className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
              {isAr ? "استفسار أعمال" : "Business Enquiry"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
