export default function BusinessPage() {
    return (
      <main className="min-h-screen bg-[#fbfbfb] text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <header className="max-w-3xl">
            <h1 className="text-3xl font-semibold md:text-4xl">Business & Institutional Partners</h1>
            <p className="mt-4 text-slate-700">
              Wahaj Al Jawaher supports long-term partnerships through compliance-first operations, traceability principles,
              and professional documentation.
            </p>
          </header>
  
          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Supply & Distribution", "Structured engagement for partners seeking compliant minted precious metals."],
              ["Institutional Procurement", "A disciplined approach for organizations that require accountability and clarity."],
              ["Private / Corporate Enquiries", "Confidential, professional discussions aligned with responsible sourcing."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold">{t}</h2>
                <p className="mt-2 text-sm text-slate-700">{d}</p>
              </div>
            ))}
          </section>
  
          <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Why Partner with Wahaj</h2>
            <ul className="mt-4 grid list-disc gap-2 pl-6 text-slate-700 md:grid-cols-2">
              <li>Compliance-driven mindset aligned with internationally recognized standards</li>
              <li>Clean, verifiable sourcing principles and traceability posture</li>
              <li>Professional documentation and consistent communication</li>
              <li>Contemporary Iraqi identity grounded in credibility and responsibility</li>
            </ul>
          </section>
  
          <section id="enquiry" className="mt-10 rounded-2xl border bg-slate-900 p-6 text-white">
            <h2 className="text-xl font-semibold">Business Enquiry</h2>
            <p className="mt-2 text-white/80">
              Share your requirements and our team will respond with the appropriate next steps.
            </p>
  
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder="Company name" />
              <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60" placeholder="Your role / title" />
              <input className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60 md:col-span-2" placeholder="Email" />
              <textarea className="rounded-lg bg-white/10 px-4 py-3 outline-none placeholder:text-white/60 md:col-span-2" rows={5}
                placeholder="Tell us about your enquiry (e.g., partnership type, timeline, documentation needs)"/>
              <button type="button" className="rounded-lg bg-white px-5 py-2.5 text-slate-900 md:col-span-2">
                Submit Enquiry
              </button>
            </form>
  
            <p className="mt-3 text-xs text-white/70">
              Note: This form is a Phase 1 lead-capture mechanism. In Phase 2, it can be connected to email/CRM automation.
            </p>
          </section>
        </div>
      </main>
    );
  }
  