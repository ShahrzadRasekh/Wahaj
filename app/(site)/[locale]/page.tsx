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

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="bg-[#fbfbfb] text-slate-900" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-slate-600">
              {isAr ? "معادن ثمينة عراقية • سبائك ذهب وفضة مسبوكة" : "Iraqi Precious Metals • Minted Gold & Silver Bars"}
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              {isAr ? "سبائك مسبوكة بمعايير واضحة لبناء الثقة في العراق" : "Standards-led minted bars built for trust in Iraq"}
            </h1>

            <p className="mt-4 text-slate-700">
              {isAr
                ? "وهج الجواهر تنتج سبائك ذهب وفضة مسبوكة وفق معايير دولية معترف بها. التوريد المسؤول والشفافية متطلبات تشغيلية — لتعزيز الموثوقية قبل المعاملة."
                : "Wahaj Al Jawaher produces minted gold and silver bars that meet internationally recognized standards. Responsible sourcing and transparency are operational necessities—designed for credibility before transaction."}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={hrefFor(locale, "/products")}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
              >
                {isAr ? "استكشف المنتجات" : "Explore Products"}
              </Link>
              <Link
                href={hrefFor(locale, "/standards-trust")}
                className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
              >
                {isAr ? "المعايير والثقة" : "Standards & Trust"}
              </Link>
              <Link
                href={hrefFor(locale, "/responsible-sourcing")}
                className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
              >
                {isAr ? "التوريد المسؤول" : "Responsible Sourcing"}
              </Link>
            </div>

            {/* Brand intro */}
            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{isAr ? "تعريف مختصر بالعلامة" : "Brand Introduction"}</div>
              <p className="mt-2 text-sm text-slate-700">
                {isAr
                  ? "تجمع وهج بين أفضل الممارسات العالمية وهوية عراقية معاصرة قائمة على الموثوقية والاتساق ومصادر نظيفة قابلة للتحقق."
                  : "Wahaj unites global best practices with a contemporary Iraqi identity rooted in credibility, consistency, and clean, verifiable origins."}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href={hrefFor(locale, "/about")} className="text-sm font-medium underline">
                  {isAr ? "عن وهج" : "About Wahaj"}
                </Link>
                <Link href={hrefFor(locale, "/faq")} className="text-sm font-medium underline">
                  {isAr ? "الأسئلة الشائعة" : "FAQ"}
                </Link>
              </div>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="h-60 rounded-xl border bg-gradient-to-br from-slate-50 to-white" />

            <div className="mt-5 grid gap-3">
              <Link href={hrefFor(locale, "/products")} className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">{isAr ? "تصفح المنتجات" : "Browse Products"}</div>
                <div className="mt-1 text-sm text-slate-700">{isAr ? "ذهب وفضة مسبوكة بمواصفات واضحة." : "Gold and silver minted bars with clear specs."}</div>
              </Link>

              <Link href={`${hrefFor(locale, "/contact")}?type=docs`} className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">{isAr ? "طلب توثيق" : "Request Documentation"}</div>
                <div className="mt-1 text-sm text-slate-700">
                  {isAr ? "إرشادات منظمة للتحقق وتوضيح المعايير." : "Structured guidance for verification and standards clarification."}
                </div>
              </Link>

              <Link href={`${hrefFor(locale, "/business")}#enquiry`} className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">{isAr ? "استفسار أعمال" : "Business Enquiry"}</div>
                <div className="mt-1 text-sm text-slate-700">{isAr ? "للشركاء والجهات المؤسسية: نهج امتثال أولاً." : "For institutions and partners: compliance-first engagement."}</div>
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              {isAr ? "ملاحظة المرحلة الأولى: كتالوج معلوماتي. سيتم إطلاق التجارة الإلكترونية الآمنة في المرحلة الثانية." : "Phase 1 note: informational catalogue. Secure e-commerce launches in Phase 2."}
            </p>
          </div>
        </section>

        {/* PILLARS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">{isAr ? "ركائز القيمة" : "Key Value Pillars"}</h2>
              <p className="mt-2 max-w-3xl text-slate-700">
                {isAr
                  ? "تعتمد مصداقية وهج على المعايير المنضبطة ومبادئ التتبع والوضوح في مواصفات المنتجات."
                  : "Wahaj’s credibility is designed through disciplined standards, traceability posture, and clarity in product specifications."}
              </p>
            </div>
            <Link href={hrefFor(locale, "/standards-trust")} className="hidden text-sm font-medium underline md:inline-flex">
              {isAr ? "مراجعة المعايير" : "Review Standards"}
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: isAr ? "المعايير العالمية والامتثال" : "Global Standards & Compliance",
                body: isAr ? "نهج يعتمد على المعايير مع عرض واضح للنقاوة والوزن ونزاهة المنتج." : "Standards-first posture with disciplined presentation of purity, weight, and integrity.",
                href: hrefFor(locale, "/standards-trust"),
              },
              {
                title: isAr ? "الشفافية والثقة" : "Transparency & Trust",
                body: isAr ? "معلومات واضحة وإرشادات توثيق منظمة — الثقة تُكتسب." : "Clear information and structured documentation guidance—confidence is earned, not claimed.",
                href: hrefFor(locale, "/standards-trust"),
              },
              {
                title: isAr ? "التوريد المسؤول" : "Responsible Sourcing",
                body: isAr ? "مصادر نظيفة قابلة للتحقق مدعومة بمبادئ تتبع وتوقعات مساءلة." : "Clean, verifiable origins supported by traceability principles and accountability expectations.",
                href: hrefFor(locale, "/responsible-sourcing"),
              },
            ].map((p) => (
              <Link key={p.title} href={p.href} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md">
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-slate-700">{p.body}</p>
                <div className="mt-4 text-sm font-medium underline">{isAr ? "فتح" : "Open"}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">{isAr ? "منتجات مميزة" : "Featured Products"}</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                {isAr ? "تصفح يركز على المنتج مع وضوح يعتمد على المعايير. المؤشرات السعرية معلوماتية في المرحلة الأولى." : "Product-forward browsing with standards-first clarity. Pricing indicators are informational in Phase 1."}
              </p>
            </div>
            <Link href={hrefFor(locale, "/products")} className="hidden text-sm font-medium underline md:inline-flex">
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
                  <span className="font-medium">{isAr ? "النقاوة:" : "Purity:"}</span>{" "}
                  {isAr ? p.purityAr : p.purityEn}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`${hrefFor(locale, "/contact")}?type=info&product=${encodeURIComponent(p.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    {isAr ? "طلب معلومات" : "Request Info"}
                  </Link>
                  <Link href={hrefFor(locale, "/products")} className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50">
                    {isAr ? "عرض الكتالوج" : "View Catalogue"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TRUST HIGHLIGHTS */}
        <section className="mt-12 rounded-2xl border bg-white p-7 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: isAr ? "معلومات تعتمد على المعايير" : "Standards-first information",
                body: isAr ? "عرض واضح للنقاوة والوزن لدعم التقييم بثقة." : "Purity and weight are presented clearly to support confident evaluation.",
              },
              {
                title: isAr ? "مبادئ التتبع" : "Traceability posture",
                body: isAr ? "مصادر نظيفة قابلة للتحقق مدعومة بمبادئ توريد منضبطة." : "Clean, verifiable origins supported by disciplined sourcing principles.",
              },
              {
                title: isAr ? "إرشادات توثيق" : "Documentation guidance",
                body: isAr ? "مسارات تواصل منظمة لدعم التحقق ضمن سياق العراق." : "Structured enquiries to support verification expectations in Iraq.",
              },
            ].map((x) => (
              <div key={x.title} className="rounded-xl border bg-slate-50 p-5">
                <div className="font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-slate-700">{x.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-12 rounded-2xl border bg-slate-900 p-7 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">{isAr ? "تحقق من المعايير قبل الشراء" : "Verify standards before you buy"}</h2>
              <p className="mt-3 text-white/80">
                {isAr
                  ? "في العراق، تُبنى الثقة عبر الوضوح. راجع المعايير والثقة والتوريد المسؤول، أو اطلب إرشادات التوثيق عبر مسارات تواصل منظمة."
                  : "In Iraq, confidence is earned through clarity. Review Wahaj’s Standards & Trust and Responsible Sourcing posture, or request documentation guidance through our structured contact paths."}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={hrefFor(locale, "/standards-trust")} className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
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
              <Link href={`${hrefFor(locale, "/business")}#enquiry`} className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm text-slate-900">
                {isAr ? "استفسار أعمال" : "Business Enquiry"}
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL LINKS */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            [isAr ? "عن وهج" : "About Wahaj", isAr ? "هوية عراقية معاصرة قائمة على الموثوقية." : "A contemporary Iraqi identity grounded in credibility.", hrefFor(locale, "/about")],
            [isAr ? "الأسئلة الشائعة" : "FAQ", isAr ? "إجابات حول التحقق والملكية والتوفر." : "Clear answers on verification, ownership, and availability.", hrefFor(locale, "/faq")],
            [isAr ? "تواصل" : "Contact", isAr ? "طلب معلومات أو إرشادات توثيق." : "Request information or documentation guidance.", `${hrefFor(locale, "/contact")}?type=info`],
          ].map(([h, d, href]) => (
            <Link key={String(h)} href={String(href)} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md">
              <div className="text-lg font-semibold">{h}</div>
              <div className="mt-2 text-sm text-slate-700">{d}</div>
              <div className="mt-4 text-sm font-medium underline">{isAr ? "فتح" : "Open"}</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
