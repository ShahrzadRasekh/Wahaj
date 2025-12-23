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
          {/* LEFT COLUMN – MEDIA BANNERS */}
          <aside className="space-y-6">
            {/* MAIN BANNER (Image) */}
            <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <img
                src="/about/banner-main.jpg"
                alt="Wahaj Gold banner"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  Shop Wahaj Gold Online
                </p>
                <p className="mt-2 text-xs text-white/90">
                  Premium bullion and curated collections.
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 1 (Image) */}
            <div className="relative h-[200px] overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <img
                src="/about/banner-2.jpg"
                alt="Gold made simple"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  Gold Made Simple
                </p>
                <p className="mt-1 text-xs text-white/90">
                  Certified bars delivered securely.
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 2 (Image – optional) */}
            <div className="relative hidden h-[200px] overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(15,23,42,0.16)] md:block">
              <img
                src="/about/banner-3.jpg"
                alt="Certified brands"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  Certified Brands
                </p>
                <p className="mt-1 text-xs text-white/90">
                  PAMP, Valcambi, and more.
                </p>
              </div>
            </div>
          </aside>

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
