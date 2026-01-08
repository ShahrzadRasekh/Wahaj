import Link from "next/link";

function hrefFor(locale: string, path: `/${string}`) {
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            {isAr ? "مصادر نظيفة • قابلية تحقق • نمو مسؤول" : "Clean origins • Verifiable posture • Responsible growth"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            {isAr ? "التوريد المسؤول" : "Responsible Sourcing"}
          </h1>
          <p className="mt-4 text-slate-700">
            {isAr
              ? "تعتمد وهج الجواهر على مصادر نظيفة قابلة للتحقق وبنهج شفاف ومبادئ تتبع تدعم الشرعية والثقة."
              : "Wahaj Al Jawaher sources precious metals from clean, verifiable origins with a transparency-first posture and traceability principles that support legitimacy and trust."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={hrefFor(locale, "/standards-trust")} className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50">
              {isAr ? "المعايير والثقة" : "Standards & Trust"}
            </Link>
            <Link href={hrefFor(locale, "/products")} className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">
              {isAr ? "عرض المنتجات" : "View Products"}
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            [isAr ? "سياسة التوريد المسؤول" : "Responsible Sourcing Policy", isAr ? "نهج منضبط يقدّم المصادر النظيفة والمساءلة والوضوح على الادعاءات التسويقية." : "A disciplined posture that prioritizes clean origins, accountability, and clarity over marketing claims."],
            [isAr ? "تعريف الذهب النظيف" : "Clean Gold Definition", isAr ? "يعني نهجاً قابلاً للتحقق في التوريد ومبادئ شفافة في العملية تدعم الشرعية والثقة." : "Clean gold means verifiable sourcing posture and transparent process principles that support legitimacy and confidence."],
            [isAr ? "التتبع وسلاسل الإمداد الأخلاقية" : "Traceability & Ethical Supply Chains", isAr ? "مبادئ التتبع متطلبات تشغيلية تدعم الموثوقية محلياً وإقليمياً." : "Traceability principles are treated as operational requirements, supporting credibility locally and regionally."],
            [isAr ? "ماذا يعني ذلك في العراق؟" : "What this means in Iraq", isAr ? "يمكن للعميل طلب إرشادات توثيق ويتوقع مواصفات واضحة وتواصلاً متسقاً." : "Customers can request documentation guidance and should expect clear specifications and consistent communication."],
          ].map(([h, d]) => (
            <div key={String(h)} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{h}</h2>
              <p className="mt-2 text-slate-700">{d}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">{isAr ? "طلب إرشادات توثيق" : "Request Documentation Guidance"}</h2>
          <p className="mt-2 text-white/80">
            {isAr ? "المرحلة الأولى معلوماتية. استخدم نموذج التواصل لطلب التوثيق أو الاستفسار عن المعايير." : "Phase 1 is informational. Use the contact form to request documentation guidance or standards clarification."}
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
