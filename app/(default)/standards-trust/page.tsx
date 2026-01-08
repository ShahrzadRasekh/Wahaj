import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            Standards-led • Compliance posture • Trust by design
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Standards & Trust</h1>
          <p className="mt-4 text-slate-700">
            Wahaj Al Jawaher operates with a clear emphasis on legitimacy, accountability, and product integrity.
            Transparency and responsible sourcing are operational requirements—before any transaction.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">
              Explore Products
            </Link>
            <Link href="/responsible-sourcing" className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50">
              Responsible Sourcing
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Compliance Statement</h2>
            <p className="mt-2 text-slate-700">
              Wahaj Al Jawaher prioritizes clarity, traceability principles, and disciplined production aligned with
              internationally recognized standards.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Regulatory Alignment</h2>
            <p className="mt-2 text-slate-700">
              We operate with a responsibility-first posture and a commitment to legitimacy, documentation, and accountability.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">AML & KYC Principles</h2>
            <p className="mt-2 text-slate-700">
              For institutional discussions, Wahaj follows structured engagement principles that support responsible business,
              verification expectations, and risk-awareness.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Risk & Responsibility Disclaimer</h2>
            <p className="mt-2 text-slate-700">
              Phase 1 content is informational. Any pricing indicators are non-binding. Secure online purchasing will be
              enabled in Phase 2.
            </p>
            <div className="mt-4">
              <Link href="/legal/risk-disclosure" className="text-sm font-medium underline">
                View Risk Disclosure
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">Need Documentation or Institutional Discussion?</h2>
          <p className="mt-2 text-white/80">
            Use a structured enquiry path for documentation guidance and partnership discussions.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact?type=docs" className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              Request Documentation
            </Link>
            <Link href="/business#enquiry" className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
              Business Enquiry
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
