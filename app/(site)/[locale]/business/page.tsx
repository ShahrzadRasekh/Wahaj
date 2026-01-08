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
            {isAr ? "أعمال • شراكات مؤسسية • نهج يعتمد على الامتثال أولاً" : "B2B • Institutional partnerships • Compliance-first engagement"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            {isAr ? "الأعمال والشراكات المؤسسية" : "Business & Institutional Partners"}
          </h1>
          <p className="mt-4 text-slate-700">
            {isAr
              ? "تدعم وهج الجواهر الشراكات طويلة الأمد عبر مبادئ التتبع وانضباط الإنتاج والتوثيق المهني، بما يتماشى مع معايير دولية معترف بها."
              : "Wahaj Al Jawaher supports long-term partnerships through traceability principles, disciplined production, and professional documentation—aligned with internationally recognized standards."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={hrefFor(locale, "/standards-traceability")}
              className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
            >
              {isAr ? "مراجعة المعايير" : "Review Standards"}
            </Link>
            <Link
              href={hrefFor(locale, "/about")}
              className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
            >
              {isAr ? "عن وهج" : "About Wahaj"}
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              isAr ? "التوريد والتوزيع" : "Supply & Distribution",
              isAr ? "تواصل منظم لشركاء يبحثون عن معادن ثمينة ممتثلة." : "Structured engagement for partners seeking compliant minted precious metals.",
            ],
            [
              isAr ? "المشتريات المؤسسية" : "Institutional Procurement",
              isAr ? "نهج منضبط للجهات التي تتطلب وضوحاً ومساءلة." : "A disciplined approach for organizations that require accountability and clarity.",
            ],
            [
              isAr ? "استفسارات خاصة / شركات" : "Private / Corporate Enquiries",
              isAr ? "نقاشات مهنية تتماشى مع التوريد المسؤول والقيمة طويلة الأمد." : "Professional discussions aligned with responsible sourcing and long-term value.",
            ],
          ].map(([t, d]) => (
            <div key={String(t)} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{t}</h2>
              <p className="mt-2 text-sm text-slate-700">{d}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{isAr ? "لماذا الشراكة مع وهج؟" : "Why Partner with Wahaj"}</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            {isAr
              ? "الثقة المؤسسية تُبنى على العملية والتوثيق والاتساق. تم تصميم وهج الجواهر لدعم الموثوقية في كل مرحلة."
              : "Institutional trust is built on process, documentation, and consistency. Wahaj Al Jawaher is structured to support credibility at every stage."}
          </p>

          <ul className="mt-5 grid list-disc gap-2 pl-6 text-slate-700 md:grid-cols-2">
            <li>{isAr ? "معايير دولية معترف بها ونهج يعتمد على الامتثال" : "Internationally recognized standards and compliance-first posture"}</li>
            <li>{isAr ? "مصادر نظيفة قابلة للتحقق مع مبادئ تتبع" : "Clean, verifiable origins with traceability discipline"}</li>
            <li>{isAr ? "توثيق مهني وتواصل منظم" : "Professional documentation and structured engagement"}</li>
            <li>{isAr ? "هوية عراقية معاصرة قائمة على الموثوقية والاتساق" : "Contemporary Iraqi identity grounded in credibility and consistency"}</li>
          </ul>
        </section>

        <section id="enquiry" className="mt-10 rounded-2xl border bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-semibold">{isAr ? "استفسار أعمال" : "Business Enquiry"}</h2>
          <p className="mt-2 text-white/80">
            {isAr
              ? "شاركنا متطلباتك. هذا نموذج للمرحلة الأولى لجمع الاهتمام، ويمكن ربطه بالبريد/CRM في المرحلة الثانية."
              : "Share your requirements. This is a Phase 1 lead-capture form; in Phase 2 it can be connected to email/CRM."}
          </p>

          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder={isAr ? "اسم الشركة" : "Company name"} />
            <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder={isAr ? "المسمى الوظيفي" : "Your role / title"} />
            <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60 md:col-span-2" placeholder={isAr ? "البريد الإلكتروني" : "Email"} type="email" />
            <select className="rounded-lg bg-white/10 px-4 py-3 outline-none md:col-span-2">
              <option className="text-slate-900">{isAr ? "نوع الاستفسار" : "Enquiry type"}</option>
              <option className="text-slate-900">{isAr ? "توريد وتوزيع" : "Supply & Distribution"}</option>
              <option className="text-slate-900">{isAr ? "مشتريات مؤسسية" : "Institutional Procurement"}</option>
              <option className="text-slate-900">{isAr ? "استفسار خاص / شركات" : "Private / Corporate Enquiry"}</option>
              <option className="text-slate-900">{isAr ? "طلب توثيق" : "Documentation Request"}</option>
            </select>
            <textarea
              className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60 md:col-span-2"
              rows={5}
              placeholder={isAr ? "الرسالة (الجدول الزمني، الكميات، متطلبات التوثيق...)" : "Message (timeline, volume expectations, documentation needs, etc.)"}
            />
            <button type="button" className="rounded-lg bg-white px-5 py-2.5 text-slate-900 md:col-span-2">
              {isAr ? "إرسال" : "Submit Enquiry"}
            </button>

            <p className="text-xs text-white/70 md:col-span-2">
              {isAr
                ? "ملاحظة: هذا النموذج معلوماتي ولا يمثل عرضاً. يتم الرد عبر تواصل منظم."
                : "Note: This form is informational and does not represent an offer. Wahaj Al Jawaher responds through structured engagement."}
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
