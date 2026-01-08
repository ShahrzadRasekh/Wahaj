import Link from "next/link";

function hrefFor(locale: string, path: `/${string}`) {
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            {isAr ? "معادن ثمينة عراقية • سبائك ذهب وفضة مسبوكة • نهج يعتمد على المعايير" : "Iraqi precious metals • Minted gold & silver • Standards-first"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            {isAr ? "عن وهج الجواهر" : "About Wahaj Al Jawaher"}
          </h1>
          <p className="mt-4 text-slate-700">
            {isAr
              ? "وهج الجواهر شركة عراقية للمعادن الثمينة تركز على إنتاج سبائك ذهب وفضة مسبوكة وفق معايير دولية معترف بها. تأسست على الثقة والشفافية والمسؤولية، وتعمل بمنهج واضح قائم على الشرعية والمساءلة ونزاهة المنتج."
              : "Wahaj Al Jawaher is an Iraqi precious metals company focused on the production of gold and silver minted bars that meet internationally recognized standards. Founded on trust, transparency, and responsibility, Wahaj operates with a clear emphasis on legitimacy, accountability, and product integrity."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={hrefFor(locale, "/standards-trust")} className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">
              {isAr ? "المعايير والثقة" : "Standards & Trust"}
            </Link>
            <Link href={hrefFor(locale, "/products")} className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50">
              {isAr ? "استكشف المنتجات" : "Explore Products"}
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "نظرة عامة" : "Company Overview"}</h2>
            <p className="mt-2 text-slate-700">
              {isAr
                ? "يعتمد نهج وهج التشغيلي على مصادر نظيفة قابلة للتحقق ومعايير منضبطة. التوريد المسؤول والشفافية متطلبات تشغيلية وليست ادعاءات تسويقية."
                : "Wahaj’s operational posture is defined by clean, verifiable origins and disciplined standards. Responsible sourcing and transparency are not marketing claims—they are operational necessities."}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "سياق السوق في العراق" : "Market Context: Iraq"}</h2>
            <p className="mt-2 text-slate-700">
              {isAr
                ? "في سوق يرتبط فيه مستوى الثقة بالأصالة والتوثيق، صُممت وهج لتكون مرجعاً للوضوح: نقاوة، وزن، ومعايير مقدمة بمنهجية."
                : "In a market where authenticity and documentation directly affect confidence, Wahaj is designed to be a reference point for clarity: purity, weight, and standards presented with discipline."}
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "رسالتنا" : "Mission"}</h2>
            <p className="mt-2 text-slate-700">
              {isAr
                ? "إنتاج سبائك ذهب وفضة مسبوكة وفق معايير دولية معترف بها، باستخدام مواد موردة بمسؤولية وبشفافية كاملة عبر جميع مراحل الإنتاج."
                : "To produce gold and silver minted bars that comply with internationally recognized standards, using responsibly sourced materials and operating with full transparency at every stage of production."}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "رؤيتنا" : "Vision"}</h2>
            <p className="mt-2 text-slate-700">
              {isAr
                ? "ترسيخ وهج الجواهر كاسم عراقي رائد في السبائك الممتثلة والموردة بمسؤولية، ومرجع موثوق للذهب النظيف في المنطقة."
                : "To establish Wahaj Al Jawaher as a leading Iraqi name in compliant, responsibly sourced minted gold and silver—and a reliable reference point for clean gold in the region."}
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">{isAr ? "التزاماتنا" : "Our Commitments"}</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            {isAr ? "قائمة التزامات منضبطة تعزز الموثوقية قبل المعاملة." : "A disciplined set of commitments that support credibility before transaction."}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: isAr ? "المعايير العالمية والامتثال" : "Global Standards & Compliance",
                body: isAr ? "نهج يعتمد على المعايير مع وضوح منضبط في النقاوة والوزن والنزاهة." : "A standards-first posture with disciplined communication of purity, weight, and integrity.",
              },
              {
                title: isAr ? "الشفافية والثقة" : "Transparency & Trust",
                body: isAr ? "معلومات واضحة وإرشادات توثيق منظمة — الثقة تُكتسب." : "Clear information and structured documentation guidance—confidence is earned, not claimed.",
              },
              {
                title: isAr ? "جودة المنتج" : "Product Quality",
                body: isAr ? "نزاهة السبيكة المسبوكة وتقديم مواصفات ثابتة لدعم الادخار طويل الأمد." : "Minted-bar integrity and consistent specification presentation designed for long-term value holding.",
              },
              {
                title: isAr ? "تثقيف السوق" : "Market Education",
                body: isAr ? "توضيح أسس التحقق والتوثيق والملكية المسؤولة ضمن سياق العراق." : "Clarity on verification, documentation, and responsible ownership in Iraq’s market context.",
              },
              {
                title: isAr ? "نمو مسؤول" : "Responsible Growth",
                body: isAr ? "خطة نمو قائمة على الموثوقية: المرحلة 1 بناء الثقة، المرحلة 2 تجارة آمنة، المرحلة 3 محتوى وتثقيف." : "A credibility-led expansion plan: Phase 1 trust-building, Phase 2 secure commerce, Phase 3 education & content.",
              },
              {
                title: isAr ? "مصادر نظيفة قابلة للتحقق" : "Clean, Verifiable Origins",
                body: isAr ? "نهج توريد قائم على مبادئ التتبع والمساءلة." : "Sourcing posture rooted in traceability principles and accountability expectations.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">{isAr ? "هوية العلامة" : "Brand Identity"}</h2>
          <p className="mt-2 text-slate-700">
            {isAr
              ? "ترتكز هوية وهج على الرمز السومري المسماري 𒋡 المرتبط تاريخياً بالنقاء والندرة والقداسة. ويعكس ذلك فلسفة وهج: نزاهة في المادة، ووعي في التصميم، وقيمة تدوم."
              : "Wahaj’s identity is rooted in the ancient Sumerian cuneiform sign 𒋡, historically associated with purity, preciousness, and the sacred. This reference reflects Wahaj’s philosophy: integrity in material, intention in design, and value that endures beyond trends."}
          </p>
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">{isAr ? "طلب معلومات أو إرشادات توثيق" : "Request Information or Documentation Guidance"}</h2>
          <p className="mt-2 text-white/80">
            {isAr
              ? "المرحلة الأولى معلوماتية. استخدم مسار تواصل منظم للأسئلة والتوثيق أو نقاشات الأعمال."
              : "Phase 1 is informational. Use a structured enquiry path for questions, documentation, or business discussions."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`${hrefFor(locale, "/contact")}?type=info`} className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              {isAr ? "طلب معلومات" : "Request Info"}
            </Link>
            <Link href={`${hrefFor(locale, "/contact")}?type=docs`} className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
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
