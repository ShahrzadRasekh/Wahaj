import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">
            Iraqi precious metals • Minted gold & silver • Standards-first
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">About Wahaj Al Jawaher</h1>
          <p className="mt-4 text-slate-700">
            Wahaj Al Jawaher is an Iraqi precious metals company focused on the production of gold and silver minted bars
            that meet internationally recognized standards. Founded on trust, transparency, and responsibility, Wahaj
            operates with a clear emphasis on legitimacy, accountability, and product integrity.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/standards-trust" className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">
              Standards & Trust
            </Link>
            <Link href="/products" className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50">
              Explore Products
            </Link>
          </div>
        </header>

        {/* Company Overview */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Company Overview</h2>
            <p className="mt-2 text-slate-700">
              Wahaj’s operational posture is defined by clean, verifiable origins and disciplined standards. Responsible
              sourcing and transparency are not marketing claims—they are operational necessities.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Market Context: Iraq</h2>
            <p className="mt-2 text-slate-700">
              In a market where authenticity and documentation directly affect confidence, Wahaj is designed to be a
              reference point for clarity: purity, weight, and standards presented with discipline.
            </p>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-slate-700">
              To produce gold and silver minted bars that comply with internationally recognized standards, using
              responsibly sourced materials and operating with full transparency at every stage of production.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-slate-700">
              To establish Wahaj Al Jawaher as a leading Iraqi name in compliant, responsibly sourced minted gold and
              silver—and a reliable reference point for clean gold in the region.
            </p>
          </div>
        </section>

        {/* Commitments */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Our Commitments</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Wahaj is built on a disciplined set of commitments that support credibility before transaction.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Global Standards & Compliance",
                body: "A standards-first posture with disciplined communication of purity, weight, and integrity.",
              },
              {
                title: "Transparency & Trust",
                body: "Clear information and structured documentation guidance—confidence is earned, not claimed.",
              },
              {
                title: "Product Quality",
                body: "Minted-bar integrity and consistent specification presentation designed for long-term value holding.",
              },
              {
                title: "Market Education",
                body: "Clarity on verification, documentation, and responsible ownership in Iraq’s market context.",
              },
              {
                title: "Responsible Growth",
                body: "A credibility-led expansion plan: Phase 1 trust-building, Phase 2 secure commerce, Phase 3 education & content.",
              },
              {
                title: "Clean, Verifiable Origins",
                body: "Sourcing posture rooted in traceability principles and accountability expectations.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Identity */}
        <section className="mt-10 rounded-2xl border bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">Brand Identity</h2>
          <p className="mt-2 text-slate-700">
            Wahaj’s identity is rooted in the ancient Sumerian cuneiform sign{" "}
            <span className="font-semibold">𒋡</span>, historically associated with purity, preciousness, and the sacred.
            This reference reflects Wahaj’s philosophy: integrity in material, intention in design, and value that endures
            beyond trends.
          </p>
        </section>

        {/* CTA band */}
        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">Request Information or Documentation Guidance</h2>
          <p className="mt-2 text-white/80">
            Phase 1 is informational. Use a structured enquiry path for questions, documentation, or business discussions.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact?type=info" className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
              Request Info
            </Link>
            <Link href="/contact?type=docs" className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
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
