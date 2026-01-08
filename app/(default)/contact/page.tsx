import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Page({
  searchParams,
}: {
  searchParams?: { type?: string };
}) {
  const type = searchParams?.type || "info";

  const preset =
    type === "docs"
      ? { heading: "Request Documentation", desc: "Ask for documentation guidance, verification expectations, or traceability-related information." }
      : type === "business"
      ? { heading: "Business Enquiry", desc: "For institutions and partners: structured engagement and compliance-first discussions." }
      : { heading: "Contact Wahaj", desc: "Request information about minted bars, standards, or availability in Phase 1." };

  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">Structured enquiries • Documentation-ready • Iraq context</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{preset.heading}</h1>
          <p className="mt-4 text-slate-700">{preset.desc}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact?type=info" className={`rounded-lg border px-5 py-2.5 hover:bg-slate-50 ${type === "info" ? "bg-white" : "bg-transparent"}`}>
              Request Info
            </Link>
            <Link href="/contact?type=docs" className={`rounded-lg border px-5 py-2.5 hover:bg-slate-50 ${type === "docs" ? "bg-white" : "bg-transparent"}`}>
              Request Documentation
            </Link>
            <Link href="/contact?type=business" className={`rounded-lg border px-5 py-2.5 hover:bg-slate-50 ${type === "business" ? "bg-white" : "bg-transparent"}`}>
              Business Enquiry
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Contact Form</h2>
            <p className="mt-2 text-sm text-slate-700">
              Phase 1 is informational. We will respond with guidance, documentation direction, and next steps.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Contact Details</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div>
                  <span className="font-medium">Email:</span> info@wahaj.com (placeholder)
                </div>
                <div>
                  <span className="font-medium">Phone:</span> +964 XXX XXX XXXX (placeholder)
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Replace placeholders with the client’s official channels.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Address & Map</h2>
              <p className="mt-2 text-sm text-slate-700">
                Baghdad, Iraq (placeholder). Add official address once confirmed.
              </p>
              <div className="mt-4 h-44 rounded-xl border bg-slate-50" />
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Business Hours</h2>
              <p className="mt-2 text-sm text-slate-700">
                Sunday–Thursday • 9:00 AM – 5:00 PM (placeholder)
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">Prefer a structured standards review?</h2>
          <p className="mt-2 text-white/80">
            Review Standards & Trust and Responsible Sourcing before requesting details.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/standards-trust" className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              Standards & Trust
            </Link>
            <Link href="/responsible-sourcing" className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
              Responsible Sourcing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
