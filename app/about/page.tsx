import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Wahaj Gold | Trusted Precious Metals in Dubai",
  description:
    "Learn about Wahaj Gold, our approach to precious metals, and why clients trust us for gold bars, coins and curated collections.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20">
        {/* BREADCRUMB */}
        <nav className="mb-6 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-800">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">About</span>
        </nav>

        <section className="grid gap-10 md:grid-cols-[280px,1fr]">
          {/* LEFT COLUMN – PROMO BANNERS (simple boxes you can later replace with real images) */}
          <div className="space-y-6">
            {/* MAIN BANNER */}
            <div className="flex h-[360px] items-center justify-center rounded-3xl bg-[#e11d48] px-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(220,38,38,0.45)]">
              <div>
                <p className="text-[11px]">Shop Wahaj Gold Online</p>
                <p className="mt-3 text-xs font-normal tracking-normal">
                  Replace this block with your own vertical banner image later
                  (for example: /about/banner-main.jpg).
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 1 */}
            <div className="flex h-[200px] items-center justify-center rounded-3xl bg-[#111827] px-6 text-center text-xs text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.6)]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Gold Made Simple
                </p>
                <p className="mt-3 leading-relaxed text-slate-200">
                  Show a simple visual about buying certified bars with a few
                  taps.
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 2 – optional extra */}
            <div className="hidden h-[200px] items-center justify-center rounded-3xl bg-gray-900/90 px-6 text-center text-xs text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.6)] md:flex">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Certified Brands
                </p>
                <p className="mt-3 leading-relaxed text-slate-200">
                  You can later replace this with logos of PAMP, Valcambi,
                  SAM, etc.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – TEXT CONTENT */}
          <div>
            <h1 className="mb-6 text-3xl font-bold text-gray-900">About</h1>

            {/* SECTION 1 */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900">
                About Wahaj Gold
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Wahaj Gold is a dedicated destination for investors and
                collectors who want to hold physical precious metals with
                clarity and confidence. Our role is simple: connect you with
                certified gold bars, coins and curated collections from trusted
                international refiners, through an online experience that feels
                calm and transparent.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Every product we list is selected for its quality, reputation
                and suitability for long–term holding. Whether you are just
                starting with your first bar or growing an existing allocation,
                we aim to make each step – from browsing to receiving – as
                straightforward as possible.
              </p>
            </section>

            {/* SECTION 2 */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900">
                Why Choose Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                At Wahaj Gold, we prioritize three things:{" "}
                <span className="font-semibold">clarity</span>,{" "}
                <span className="font-semibold">trust</span> and{" "}
                <span className="font-semibold">service</span>. Pricing,
                specifications and brand information are presented as clearly as
                possible, so you always understand what you are buying and why
                it might suit your goals.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                We work only with recognized refiners and mints, and we are
                continuously improving our product catalogue, website experience
                and support to meet the expectations of serious investors. When
                you reach out, you speak to a team that understands the weight
                of these decisions and respects your pace.
              </p>
            </section>

            {/* SECTION 3 */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900">
                Discover Our Bullion Catalogue
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Our online catalogue brings together well–known international
                brands and local refiners, covering a range of weights and
                formats – from classic investment bars to giftable collections.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                As Wahaj Gold grows, we will continue expanding the range of
                products, educational content and tools available to you, so
                that building and preserving your precious metals position feels
                both informed and comfortable.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
