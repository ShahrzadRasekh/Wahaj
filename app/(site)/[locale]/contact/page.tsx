import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function hrefFor(locale: string, path: `/${string}`) {
  if (!locale || locale === "en") return path;
  return `/${locale}${path}`;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ type?: string }>;
}) {
  const { locale } = await params;
  const sp = (await searchParams) || {};
  const isAr = locale === "ar";

  const type = sp.type || "info";

  const preset =
    type === "docs"
      ? { heading: isAr ? "طلب توثيق" : "Request Documentation", desc: isAr ? "اطلب إرشادات التوثيق أو متطلبات التحقق أو معلومات التتبع." : "Ask for documentation guidance, verification expectations, or traceability-related information." }
      : type === "business"
      ? { heading: isAr ? "استفسار أعمال" : "Business Enquiry", desc: isAr ? "للجهات المؤسسية والشركاء: تواصل منظم ونهج امتثال أولاً." : "For institutions and partners: structured engagement and compliance-first discussions." }
      : { heading: isAr ? "تواصل مع وهج" : "Contact Wahaj", desc: isAr ? "اطلب معلومات عن السبائك أو المعايير أو التوفر ضمن المرحلة الأولى." : "Request information about minted bars, standards, or availability in Phase 1." };

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            {isAr ? "تواصل منظم • جاهزية للتوثيق • سياق العراق" : "Structured enquiries • Documentation-ready • Iraq context"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{preset.heading}</h1>
          <p className="mt-4 text-slate-700">{preset.desc}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${hrefFor(locale, "/contact")}?type=info`}
              className={`rounded-lg border px-5 py-2.5 hover:bg-slate-50 ${type === "info" ? "bg-white" : "bg-transparent"}`}
            >
              {isAr ? "طلب معلومات" : "Request Info"}
            </Link>
            <Link
              href={`${hrefFor(locale, "/contact")}?type=docs`}
              className={`rounded-lg border px-5 py-2.5 hover:bg-slate-50 ${type === "docs" ? "bg-white" : "bg-transparent"}`}
            >
              {isAr ? "طلب توثيق" : "Request Documentation"}
            </Link>
            <Link
              href={`${hrefFor(locale, "/contact")}?type=business`}
              className={`rounded-lg border px-5 py-2.5 hover:bg-slate-50 ${type === "business" ? "bg-white" : "bg-transparent"}`}
            >
              {isAr ? "استفسار أعمال" : "Business Enquiry"}
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{isAr ? "نموذج التواصل" : "Contact Form"}</h2>
            <p className="mt-2 text-sm text-slate-700">
              {isAr ? "المرحلة الأولى معلوماتية. سنرد بإرشادات وخطوات تالية ومعلومات توثيق." : "Phase 1 is informational. We will respond with guidance, documentation direction, and next steps."}
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{isAr ? "بيانات التواصل" : "Contact Details"}</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div>
                  <span className="font-medium">{isAr ? "البريد:" : "Email:"}</span> info@wahaj.com (placeholder)
                </div>
                <div>
                  <span className="font-medium">{isAr ? "الهاتف:" : "Phone:"}</span> +964 XXX XXX XXXX (placeholder)
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {isAr ? "استبدل القيم المؤقتة ببيانات العميل الرسمية." : "Replace placeholders with the client’s official channels."}
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{isAr ? "العنوان والخريطة" : "Address & Map"}</h2>
              <p className="mt-2 text-sm text-slate-700">
                {isAr ? "بغداد، العراق (مؤقت). أضف العنوان الرسمي عند تأكيده." : "Baghdad, Iraq (placeholder). Add official address once confirmed."}
              </p>
              <div className="mt-4 h-44 rounded-xl border bg-slate-50" />
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{isAr ? "ساعات العمل" : "Business Hours"}</h2>
              <p className="mt-2 text-sm text-slate-700">
                {isAr ? "الأحد–الخميس • 9:00 ص – 5:00 م (مؤقت)" : "Sunday–Thursday • 9:00 AM – 5:00 PM (placeholder)"}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">{isAr ? "تفضل مراجعة المعايير أولاً؟" : "Prefer a structured standards review?"}</h2>
          <p className="mt-2 text-white/80">
            {isAr ? "راجع المعايير والثقة والتوريد المسؤول قبل طلب التفاصيل." : "Review Standards & Trust and Responsible Sourcing before requesting details."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={hrefFor(locale, "/standards-trust")} className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              {isAr ? "المعايير والثقة" : "Standards & Trust"}
            </Link>
            <Link href={hrefFor(locale, "/responsible-sourcing")} className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
              {isAr ? "التوريد المسؤول" : "Responsible Sourcing"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
