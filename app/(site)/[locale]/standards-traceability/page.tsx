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
            {isAr ? "نهج يعتمد على الامتثال • التتبع كمتطلب تشغيلي" : "Compliance-first • Traceability as an operational requirement"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            {isAr ? "المعايير والتتبع" : "Standards & Traceability"}
          </h1>
          <p className="mt-4 text-slate-700">
            {isAr
              ? "وهج الجواهر شركة عراقية للمعادن الثمينة تركز على سبائك الذهب والفضة المسبوكة وفق معايير دولية معترف بها. الشفافية والتوريد المسؤول ليست شعارات تسويقية، بل متطلبات تشغيلية."
              : "Wahaj Al Jawaher is an Iraqi precious metals company focused on minted gold and silver bars that meet internationally recognized standards. Transparency and responsible sourcing are not marketing claims, but operational necessities."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={hrefFor(locale, "/minted-bars")}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
            >
              {isAr ? "استكشف السبائك" : "Explore Minted Bars"}
            </Link>
            <Link
              href={`${hrefFor(locale, "/business")}#enquiry`}
              className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
            >
              {isAr ? "استفسار أعمال" : "Business Enquiry"}
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-3 rounded-2xl border bg-white p-5 md:grid-cols-4">
          {[
            isAr ? "معايير دولية معترف بها" : "Internationally recognized standards",
            isAr ? "مصادر نظيفة قابلة للتحقق" : "Clean, verifiable origins",
            isAr ? "انضباط في الإنتاج" : "Discipline in production",
            isAr ? "توثيق ومساءلة" : "Documentation & accountability",
          ].map((item) => (
            <div key={item} className="text-sm text-slate-700">
              {item}
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{isAr ? "التتبع عبر 3 مراحل" : "Traceability in 3 Stages"}</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            {isAr
              ? "في العراق، يجب إثبات الثقة لا افتراضها. يعتمد عمل وهج الجواهر على الوضوح والشرعية والمساءلة في كل مرحلة."
              : "In Iraq, trust must be demonstrated—not assumed. Wahaj Al Jawaher is structured around clarity, legitimacy, and accountability at every stage."}
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                isAr ? "١) توريد من مصادر نظيفة" : "1) Clean origin sourcing",
                isAr
                  ? "توريد المعادن الثمينة من مصادر نظيفة وقابلة للتحقق وفق مبادئ تتبع واضحة."
                  : "Precious metals are sourced exclusively from clean, verifiable origins with disciplined traceability principles.",
              ],
              [
                isAr ? "٢) إنتاج مضبوط" : "2) Controlled production",
                isAr
                  ? "إنتاج السبائك المسبوكة وفق عمليات دقيقة ومتسقة مع معايير وجودة معترف بها."
                  : "Minted bars are produced with precision processes aligned with rigorous quality expectations and recognized standards.",
              ],
              [
                isAr ? "٣) توثيق ومساءلة" : "3) Documentation & accountability",
                isAr
                  ? "مواصفات واضحة وفحوصات نزاهة تعزز الثقة للأفراد والمؤسسات."
                  : "Specifications, integrity checks, and accountability reinforce confidence for both individuals and institutions.",
              ],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl border bg-slate-50 p-4">
                <div className="font-semibold">{h}</div>
                <div className="mt-1 text-sm text-slate-700">{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "ماذا تعني المعايير؟" : "What “Standards” Mean"}</h2>
            <p className="mt-2 text-slate-700">
              {isAr
                ? "تركز وهج الجواهر على وضوح النقاوة والوزن ونزاهة السبيكة المسبوكة، مع لغة دقيقة دون مبالغة."
                : "Wahaj Al Jawaher emphasizes clarity in purity, weight, and minted-bar integrity. We communicate specifications precisely, and we avoid exaggerated claims."}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-700">
              <li>{isAr ? "مواصفات واضحة للنقاوة والوزن" : "Clear purity and weight specifications"}</li>
              <li>{isAr ? "اتساق وانضباط في الإنتاج" : "Consistent production discipline"}</li>
              <li>{isAr ? "ثقة مبنية على العملية والمساءلة" : "Trust built on process and accountability"}</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "التوريد المسؤول" : "Responsible Sourcing"}</h2>
            <p className="mt-2 text-slate-700">
              {isAr
                ? "تلتزم وهج الجواهر بالتوريد من مصادر نظيفة وقابلة للتحقق، وفق متطلبات الامتثال والأنظمة ذات الصلة."
                : "Wahaj Al Jawaher sources metals from clean, verifiable origins with traceability principles and adherence to regulatory and compliance requirements."}
            </p>
            <p className="mt-3 text-sm text-slate-700">
              {isAr
                ? "الهدف هو تعزيز الثقة في سوق المعادن الثمينة بالعراق من خلال مزج أفضل الممارسات العالمية مع هوية عراقية معاصرة."
                : "The objective is to strengthen confidence in the Iraqi precious metals market by combining global best practices with a contemporary Iraqi identity grounded in credibility and consistency."}
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{isAr ? "أسئلة شائعة" : "Common Questions"}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              [
                isAr ? "كيف أتحقق من الأصالة؟" : "How can I verify authenticity?",
                isAr
                  ? "نعتمد نهجاً واضحاً يعتمد على المعايير والمساءلة. التوثيق والمعلومات المنظمة يعززان الثقة."
                  : "Wahaj emphasizes standards-first clarity and accountability. Documentation and structured information reinforce confidence.",
              ],
              [
                isAr ? "هل هذه صفحة بيع؟" : "Is this a selling page?",
                isAr
                  ? "المرحلة الأولى معلوماتية. سيتم تفعيل التجارة الإلكترونية الآمنة في المرحلة الثانية."
                  : "Phase 1 is informational. Secure e-commerce will be enabled in Phase 2 through a controlled implementation.",
              ],
              [
                isAr ? "هل تدعمون شراكات أعمال؟" : "Do you support business partnerships?",
                isAr
                  ? "نعم. صفحة الأعمال توفر مساراً مخصصاً للنقاشات المؤسسية وطلبات التوثيق."
                  : "Yes. The Business page provides a dedicated path for institutional discussions and documentation requests.",
              ],
              [
                isAr ? "ماذا يعني التتبع عملياً؟" : "What does traceability mean in practice?",
                isAr
                  ? "يعني توريداً منضبطاً وإنتاجاً مضبوطاً وتوثيقاً يدعم الشرعية والثقة."
                  : "It means disciplined sourcing, controlled production, and documentation that supports legitimacy and trust.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="rounded-xl border bg-slate-50 p-4">
                <div className="font-semibold">{q}</div>
                <div className="mt-1 text-sm text-slate-700">{a}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${hrefFor(locale, "/contact")}?type=docs`}
              className="rounded-lg border bg-white px-4 py-2 text-sm hover:bg-slate-50"
            >
              {isAr ? "طلب توثيق" : "Request Documentation"}
            </Link>
            <Link href={hrefFor(locale, "/about")} className="rounded-lg border bg-white px-4 py-2 text-sm hover:bg-slate-50">
              {isAr ? "عن وهج" : "About Wahaj"}
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-semibold">{isAr ? "ملاحظة المرحلة الأولى" : "Phase 1 Note"}</h2>
          <p className="mt-2 text-white/80">
            {isAr
              ? "هذه الصفحة مصممة لبناء الموثوقية والشرعية. سيتم تفعيل الشراء عبر الإنترنت في المرحلة الثانية عبر نظام تجارة إلكترونية آمن."
              : "This page is designed to establish authority and legitimacy. Online purchasing will be enabled in Phase 2 through a secure e-commerce implementation."}
          </p>
        </section>
      </div>
    </main>
  );
}
