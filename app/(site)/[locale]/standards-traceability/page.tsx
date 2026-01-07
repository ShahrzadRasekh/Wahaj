import Link from "next/link";

export default function StandardsTraceabilityPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-semibold md:text-4xl">Standards & Traceability</h1>
          <p className="mt-4 text-slate-700">
            Wahaj Al Jawaher is built on trust, transparency, and responsibility. Traceability and compliance are operational
            necessities—designed to protect value and confidence.
          </p>
        </header>

        <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Traceability in 3 Stages</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Clean, verifiable origins", "Sourcing from clean origins with a disciplined approach to verification."],
              ["Controlled production", "Precision processes aligned with internationally recognized standards."],
              ["Documentation & accountability", "Clear specifications and records that support legitimacy and trust."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border p-4">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-sm text-slate-700">{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">What “Standards” Mean</h2>
            <p className="mt-2 text-slate-700">
              We emphasize clarity in purity, weight, and minted-bar integrity—presented with precision rather than claims.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Responsible Sourcing</h2>
            <p className="mt-2 text-slate-700">
              Responsible sourcing and transparency are not marketing claims, but operational requirements.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border bg-slate-900 p-6 text-white">
          <h2 className="text-xl font-semibold">Request Documentation</h2>
          <p className="mt-2 text-white/80">
            If you need specifications or institutional information, contact us through the business enquiry path.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/business#enquiry" className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              Business Enquiry
            </Link>
            <Link href="/minted-bars" className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
              Explore Minted Bars
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
