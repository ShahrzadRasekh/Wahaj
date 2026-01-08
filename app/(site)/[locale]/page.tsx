import Link from "next/link";

function hrefFor(locale: string, path: `/${string}`) {
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

type FeaturedProduct = {
  id: string;
  nameEn: string;
  nameAr: string;
  metal: "gold" | "silver";
  purityEn: string;
  purityAr: string;
  weights: string[];
  badgeEn?: string;
  badgeAr?: string;
};

const FEATURED: FeaturedProduct[] = [
  {
    id: "gold-1",
    nameEn: "Gold Minted Bar",
    nameAr: "سبيكة ذهب مسبوكة",
    metal: "gold",
    purityEn: "Fine Gold (Au)",
    purityAr: "ذهب نقي (Au)",
    weights: ["5g", "10g", "20g", "50g", "100g"],
    badgeEn: "Popular",
    badgeAr: "الأكثر طلباً",
  },
  {
    id: "gold-2",
    nameEn: "Gold Minted Bar (Investment Series)",
    nameAr: "سبيكة ذهب (سلسلة الاستثمار)",
    metal: "gold",
    purityEn: "Fine Gold (Au)",
    purityAr: "ذهب نقي (Au)",
    weights: ["1oz", "50g", "100g"],
    badgeEn: "Investor",
    badgeAr: "استثمار",
  },
  {
    id: "silver-1",
    nameEn: "Silver Minted Bar",
    nameAr: "سبيكة فضة مسبوكة",
    metal: "silver",
    purityEn: "Fine Silver (Ag)",
    purityAr: "فضة نقية (Ag)",
    weights: ["100g", "250g", "500g", "1kg"],
    badgeEn: "New",
    badgeAr: "جديد",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-slate-600">
              {isAr ? "معادن ثمينة عراقية • سبائك ذهب وفضة مسبوكة" : "Iraqi Precious Metals • Minted Gold & Silver Bars"}
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              {isAr
                ? "تجربة سبائك مسبوكة بمعايير واضحة لبناء الثقة في العراق"
                : "A Standards-Led Minted Bar Experience Built for Trust in Iraq"}
            </h1>

            <p className="mt-4 text-slate-700">
              {isAr
                ? "وهج الجواهر تنتج سبائك ذهب وفضة مسبوكة ترتكز على الشفافية والتوريد المسؤول والمعايير الدولية المعترف بها—الثقة أولاً ثم المعاملة."
                : "Wahaj Al Jawaher produces minted gold and silver bars rooted in transparency, responsible sourcing, and internationally recognized standards—confidence first, transaction second."}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={hrefFor(locale, "/minted-bars")}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
              >
                {isAr ? "استكشف السبائك" : "Explore Minted Bars"}
              </Link>
              <Link
                href={hrefFor(locale, "/standards-traceability")}
                className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
              >
                {isAr ? "المعايير والتتبع" : "Standards & Traceability"}
              </Link>
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl border bg-white p-5 md:grid-cols-3">
              {[
                [isAr ? "معايير دولية" : "International standards", isAr ? "وضوح في النقاوة والوزن" : "Clarity in purity and weight"],
                [isAr ? "مبادئ تتبع" : "Traceability posture", isAr ? "مصادر نظيفة قابلة للتحقق" : "Clean, verifiable origins"],
                [isAr ? "نهج امتثال" : "Compliance mindset", isAr ? "شرعية ومساءلة" : "Accountability and legitimacy"],
              ].map(([h, d]) => (
                <div key={String(h)} className="rounded-xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold">{h}</div>
                  <div className="mt-1 text-xs text-slate-700">{d}</div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-600">
              {isAr
                ? "المرحلة الأولى: موقع معلوماتي لبناء الموثوقية. سيتم إطلاق التجارة الإلكترونية الآمنة في المرحلة الثانية."
                : "Phase 1: informational and credibility-led. Secure e-commerce launches in Phase 2."}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-600">{isAr ? "ابدأ من هنا" : "Start Here"}</div>
            <div className="mt-3 h-56 rounded-xl border bg-gradient-to-br from-slate-50 to-white" />

            <div className="mt-5 grid gap-3">
              <Link href={hrefFor(locale, "/minted-bars")} className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">{isAr ? "تصفح المنتجات" : "Browse Products"}</div>
                <div className="mt-1 text-sm text-slate-700">{isAr ? "ذهب وفضة بمواصفات واضحة." : "Gold and silver bars with clear specs."}</div>
              </Link>
              <Link href={`${hrefFor(locale, "/contact")}?type=info`} className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">{isAr ? "طلب معلومات" : "Request Information"}</div>
                <div className="mt-1 text-sm text-slate-700">{isAr ? "اطلب إرشادات ومعلومات وتوثيق." : "Get details and documentation guidance."}</div>
              </Link>
              <Link href={`${hrefFor(locale, "/business")}#enquiry`} className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">{isAr ? "استفسار أعمال" : "Business Enquiry"}</div>
                <div className="mt-1 text-sm text-slate-700">{isAr ? "للشركاء والجهات المؤسسية." : "Institutional & partner engagement."}</div>
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">{isAr ? "منتجات مميزة" : "Featured Products"}</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                {isAr ? "تجربة تركز على المنتج مع دعم معلوماتي يعتمد على المعايير." : "A product-forward experience—supported by standards-first clarity."}
              </p>
            </div>
            <Link href={hrefFor(locale, "/minted-bars")} className="hidden text-sm font-medium underline md:inline-flex">
              {isAr ? "عرض الكل" : "View all"}
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {FEATURED.map((p) => (
              <article key={p.id} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {p.metal === "gold" ? (isAr ? "ذهب" : "Gold") : (isAr ? "فضة" : "Silver")}
                    </div>
                    <h3 className="mt-1 font-semibold">{isAr ? p.nameAr : p.nameEn}</h3>
                  </div>

                  {(isAr ? p.badgeAr : p.badgeEn) ? (
                    <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {isAr ? p.badgeAr : p.badgeEn}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 h-32 rounded-xl border bg-gradient-to-br from-slate-50 to-white" />

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.weights.map((w) => (
                    <span key={w} className="rounded-full border bg-white px-3 py-1 text-xs text-slate-700">
                      {w}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-slate-700">
                  <span className="font-medium">{isAr ? "النقاوة:" : "Purity:"}</span> {isAr ? p.purityAr : p.purityEn}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${hrefFor(locale, "/contact")}?type=info&product=${encodeURIComponent(p.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    {isAr ? "طلب معلومات" : "Request Info"}
                  </Link>
                  <Link href={hrefFor(locale, "/minted-bars")} className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50">
                    {isAr ? "عرض الكتالوج" : "View Catalogue"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-12 rounded-2xl border bg-slate-900 p-7 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {isAr ? "تحقق من المعايير قبل الشراء" : "Verify Standards Before You Buy"}
              </h2>
              <p className="mt-3 text-white/80">
                {isAr
                  ? "في العراق، تُبنى الثقة عبر الوضوح. استعرض نهج وهج في المعايير والتتبع، أو اطلب إرشادات التوثيق عبر مسارات تواصل منظمة."
                  : "In Iraq, confidence is earned through clarity. Explore Wahaj’s standards and traceability posture, or request documentation guidance through our structured enquiry paths."}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={hrefFor(locale, "/standards-traceability")} className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
                  {isAr ? "مراجعة المعايير" : "Review Standards"}
                </Link>
                <Link href={`${hrefFor(locale, "/contact")}?type=docs`} className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
                  {isAr ? "طلب توثيق" : "Request Documentation"}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-sm font-semibold">{isAr ? "للأعمال والمؤسسات" : "For Business & Institutions"}</div>
              <p className="mt-2 text-sm text-white/80">
                {isAr
                  ? "تواصل منظم للشركاء الباحثين عن معادن ثمينة ممتثلة: توثيق، وضوح في العملية، ونهج يعتمد على الامتثال أولاً."
                  : "Structured engagement for partners seeking compliant minted precious metals: documentation, process clarity, and a compliance-first approach."}
              </p>
              <Link
                href={`${hrefFor(locale, "/business")}#enquiry`}
                className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm text-slate-900"
              >
                {isAr ? "استفسار أعمال" : "Business Enquiry"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
