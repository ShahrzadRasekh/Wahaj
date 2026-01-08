import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="max-w-3xl">
          <p className="text-sm font-medium text-slate-600">Clean origins • Verifiable posture • Responsible growth</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Responsible Sourcing</h1>
          <p className="mt-4 text-slate-700">
            Wahaj Al Jawaher sources precious metals from clean, verifiable origins with a transparency-first posture and
            traceability principles that support legitimacy and trust.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/standards-trust" className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50">
              Standards & Trust
            </Link>
            <Link href="/products" className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">
              View Products
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Responsible Sourcing Policy", "A disciplined posture that prioritizes clean origins, accountability, and clarity over marketing claims."],
            ["Clean Gold Definition", "Clean gold means verifiable sourcing posture and transparent process principles that support legitimacy and confidence."],
            ["Traceability & Ethical Supply Chains", "Traceability principles are treated as operational requirements, supporting credibility locally and regionally."],
            ["What this means in Iraq", "Customers can request documentation guidance and should expect clear specifications and consistent communication."],
          ].map(([h, d]) => (
            <div key={h} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{h}</h2>
              <p className="mt-2 text-slate-700">{d}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border bg-slate-900 p-7 text-white">
          <h2 className="text-2xl font-semibold">Request Documentation Guidance</h2>
          <p className="mt-2 text-white/80">
            Phase 1 is informational. Use the contact form to request documentation guidance or standards clarification.
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
