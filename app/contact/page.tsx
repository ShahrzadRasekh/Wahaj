import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Wahaj Gold | Address & Contact Details",
  description:
    "Find Wahaj Gold’s address, contact details and business hours in Dubai, United Arab Emirates.",
};

type ContactPageProps = {
  searchParams?: {
    success?: string;
    error?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const success = searchParams?.success === "1";
  const error = searchParams?.error === "1";

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20">
        {/* BREADCRUMB */}
        <nav className="mb-6 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-800">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700">Contact</span>
        </nav>

        <section className="grid gap-10 md:grid-cols-[280px,1fr]">
          {/* LEFT COLUMN – BANNERS */}
          <div className="space-y-6">
            {/* MAIN BANNER */}
            <div className="flex h-[360px] items-center justify-center rounded-3xl bg-[#e11d48] px-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(220,38,38,0.45)]">
              <div>
                <p className="text-[11px]">Discover Wahaj Gold Collections</p>
                <p className="mt-3 text-xs font-normal tracking-normal">
                  Replace this block with your own vertical contact banner image
                  later (for example: /contact/banner-main.jpg).
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 1 */}
            <div className="flex h-[200px] items-center justify-center rounded-3xl bg-[#111827] px-6 text-center text-xs text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.6)]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Buy gold with confidence
                </p>
                <p className="mt-3 leading-relaxed text-slate-200">
                  Use this space later for a simple promo visual or message.
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 2 (empty placeholder, like RAK’s black block) */}
            <div className="hidden h-[200px] rounded-3xl bg-black/90 shadow-[0_12px_30px_rgba(0,0,0,0.7)] md:block" />
          </div>

          {/* RIGHT COLUMN – CONTACT INFO + MAP + FORM */}
          <div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Contact</h1>

            {/* SUCCESS / ERROR ALERTS */}
            {success && (
              <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                Thank you. Your message has been sent successfully.
              </div>
            )}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Sorry, something went wrong while sending your message. Please
                try again, or contact us directly by phone or email.
              </div>
            )}

            {/* ADDRESS + CONTACT DETAILS */}
            <div className="grid gap-10 md:grid-cols-2">
              {/* ADDRESS */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Address
                </h2>
                <div className="mt-4 space-y-1 text-sm text-gray-700">
                  <p>
                    <span className="mr-2 text-red-600">📍</span>
                    Wahaj Gold (example)
                  </p>
                  <p className="pl-6">Gold Souq Area</p>
                  <p className="pl-6">Dubai, United Arab Emirates</p>
                  <p className="pl-6 text-xs text-gray-500">
                    Update this section later with your exact building / shop
                    details.
                  </p>
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Contact Details
                </h2>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="mr-2 text-red-600">📞</span>
                    +971 XX XXX XXXX
                  </p>
                  <p>
                    <span className="mr-2 text-red-600">☎️</span>
                    +971 X XXX XXXX
                  </p>
                  <p>
                    <span className="mr-2 text-red-600">✉️</span>
                    support@wahajgold.com
                  </p>
                </div>
              </div>
            </div>

            {/* BUSINESS TIME */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-900">
                Business Time
              </h2>
              <p className="mt-4 text-sm text-gray-700">
                <span className="mr-2 text-red-600">🕒</span>
                Monday to Saturday: 10:00 AM – 21:00 PM (GST)
              </p>
            </div>

            {/* MAP / WORLD BACKDROP (placeholder) */}
            <div className="mt-12 rounded-3xl border border-gray-200 bg-gray-50/80 px-6 py-10">
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/60 text-xs text-gray-500">
                World map / location image placeholder.
                <br />
                Later you can replace this with a real map or branded image
                (e.g. /contact/world-map.png).
              </div>
            </div>

            {/* GET IN TOUCH FORM */}
            <section className="mt-16">
              <h2 className="text-2xl font-semibold text-gray-900">
                Get In Touch
              </h2>

              <form
                className="mt-8 space-y-5 text-sm"
                action="/api/contact"
                method="POST"
              >
                {/* Name + Email row */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <label
                    htmlFor="address"
                    className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-400"
                  />
                </div>

                {/* Button aligned right */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-[#b91c1c] px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md hover:bg-[#991b1b]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
