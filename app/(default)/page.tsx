import Link from "next/link";

type FeaturedProduct = {
  id: string;
  name: string;
  metal: "gold" | "silver";
  purity: string;
  weights: string[];
  badge?: string;
};

const FEATURED: FeaturedProduct[] = [
  {
    id: "gold-1",
    name: "Gold Minted Bar",
    metal: "gold",
    purity: "Fine Gold (Au)",
    weights: ["5g", "10g", "20g", "50g", "100g"],
    badge: "Popular",
  },
  {
    id: "gold-2",
    name: "Gold Minted Bar (Investment Series)",
    metal: "gold",
    purity: "Fine Gold (Au)",
    weights: ["1oz", "50g", "100g"],
    badge: "Investor",
  },
  {
    id: "silver-1",
    name: "Silver Minted Bar",
    metal: "silver",
    purity: "Fine Silver (Ag)",
    weights: ["100g", "250g", "500g", "1kg"],
    badge: "New",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#fbfbfb] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-slate-600">
              Iraqi Precious Metals • Minted Gold & Silver Bars
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Standards-led minted bars built for trust in Iraq
            </h1>

            <p className="mt-4 text-slate-700">
              Wahaj Al Jawaher produces minted gold and silver bars that meet internationally recognized standards.
              Responsible sourcing and transparency are operational necessities—designed for credibility before transaction.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
              >
                Explore Products
              </Link>
              <Link
                href="/standards-trust"
                className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
              >
                Standards & Trust
              </Link>
              <Link
                href="/responsible-sourcing"
                className="rounded-lg border bg-white px-5 py-2.5 hover:bg-slate-50"
              >
                Responsible Sourcing
              </Link>
            </div>

            {/* Brand intro (short) */}
            <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Brand Introduction</div>
              <p className="mt-2 text-sm text-slate-700">
                Wahaj unites global best practices with a contemporary Iraqi identity rooted in credibility, consistency,
                and clean, verifiable origins.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/about" className="text-sm font-medium underline">
                  About Wahaj
                </Link>
                <Link href="/faq" className="text-sm font-medium underline">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            {/* Visual placeholder (swap to bar image/video later) */}
            <div className="h-60 rounded-xl border bg-gradient-to-br from-slate-50 to-white" />

            <div className="mt-5 grid gap-3">
              <Link href="/products" className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">Browse Products</div>
                <div className="mt-1 text-sm text-slate-700">Gold and silver minted bars with clear specs.</div>
              </Link>

              <Link href="/contact?type=docs" className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">Request Documentation</div>
                <div className="mt-1 text-sm text-slate-700">
                  Structured guidance for verification and standards clarification.
                </div>
              </Link>

              <Link href="/business#enquiry" className="rounded-xl border bg-slate-50 p-4 hover:bg-white">
                <div className="font-semibold">Business Enquiry</div>
                <div className="mt-1 text-sm text-slate-700">For institutions and partners: compliance-first engagement.</div>
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Phase 1 note: informational catalogue. Secure e-commerce launches in Phase 2.
            </p>
          </div>
        </section>

        {/* KEY VALUE PILLARS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Key Value Pillars</h2>
              <p className="mt-2 max-w-3xl text-slate-700">
                Wahaj’s credibility is designed through disciplined standards, traceability posture, and clarity in product specifications.
              </p>
            </div>
            <Link href="/standards-trust" className="hidden text-sm font-medium underline md:inline-flex">
              Review Standards
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Global Standards & Compliance",
                body: "Standards-first posture with disciplined presentation of purity, weight, and integrity.",
                href: "/standards-trust",
              },
              {
                title: "Transparency & Trust",
                body: "Clear information and structured documentation guidance—confidence is earned, not claimed.",
                href: "/standards-trust",
              },
              {
                title: "Responsible Sourcing",
                body: "Clean, verifiable origins supported by traceability principles and accountability expectations.",
                href: "/responsible-sourcing",
              },
            ].map((p) => (
              <Link key={p.title} href={p.href} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md">
                <div className="text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-slate-700">{p.body}</p>
                <div className="mt-4 text-sm font-medium underline">Open</div>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Featured Products</h2>
              <p className="mt-2 max-w-2xl text-slate-700">
                Product-forward browsing with standards-first clarity. Pricing indicators are informational in Phase 1.
              </p>
            </div>
            <Link href="/products" className="hidden text-sm font-medium underline md:inline-flex">
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {FEATURED.map((p) => (
              <article key={p.id} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {p.metal === "gold" ? "Gold" : "Silver"}
                    </div>
                    <h3 className="mt-1 font-semibold">{p.name}</h3>
                  </div>
                  {p.badge ? (
                    <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {p.badge}
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
                  <span className="font-medium">Purity:</span> {p.purity}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/contact?type=info&product=${encodeURIComponent(p.id)}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                  >
                    Request Info
                  </Link>
                  <Link href="/products" className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50">
                    View Catalogue
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TRUST & COMPLIANCE HIGHLIGHTS */}
        <section className="mt-12 rounded-2xl border bg-white p-7 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Standards-first information",
                body: "Purity and weight are presented clearly to support confident evaluation.",
              },
              {
                title: "Traceability posture",
                body: "Clean, verifiable origins supported by disciplined sourcing principles.",
              },
              {
                title: "Documentation guidance",
                body: "Structured enquiries to support verification expectations in Iraq.",
              },
            ].map((x) => (
              <div key={x.title} className="rounded-xl border bg-slate-50 p-5">
                <div className="font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-slate-700">{x.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MID-PAGE CTA BANNER (Wahaj strategy) */}
        <section className="mt-12 rounded-2xl border bg-slate-900 p-7 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Verify standards before you buy</h2>
              <p className="mt-3 text-white/80">
                In Iraq, confidence is earned through clarity. Review Wahaj’s Standards & Trust and Responsible Sourcing
                posture, or request documentation guidance through our structured contact paths.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/standards-trust" className="rounded-lg bg-white px-5 py-2.5 text-slate-900">
                  Review Standards
                </Link>
                <Link href="/contact?type=docs" className="rounded-lg border border-white/30 px-5 py-2.5 text-white">
                  Request Documentation
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-sm font-semibold">For Business & Institutions</div>
              <p className="mt-2 text-sm text-white/80">
                Structured engagement for partners seeking compliant minted precious metals: documentation, process clarity,
                and a compliance-first approach.
              </p>
              <Link href="/business#enquiry" className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm text-slate-900">
                Business Enquiry
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["About Wahaj", "A contemporary Iraqi identity grounded in credibility.", "/about"],
            ["FAQ", "Clear answers on verification, ownership, and availability.", "/faq"],
            ["Contact", "Request information or documentation guidance.", "/contact?type=info"],
          ].map(([h, d, href]) => (
            <Link key={h} href={href} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md">
              <div className="text-lg font-semibold">{h}</div>
              <div className="mt-2 text-sm text-slate-700">{d}</div>
              <div className="mt-4 text-sm font-medium underline">Open</div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
