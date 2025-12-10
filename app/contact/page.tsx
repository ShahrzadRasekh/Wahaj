// app/contact/page.tsx
import React from "react";
// If you don't use path aliases, change this to "../../components/ContactForm"
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-4 text-xs text-slate-500">
          <span className="cursor-pointer hover:text-slate-700">Home</span>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">Contact</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px,minmax(0,1fr)]">
          {/* LEFT COLUMN – vertical cards / banners */}
          <aside className="space-y-6">
            {/* Main pink banner */}
            <div className="flex h-80 items-center justify-center rounded-[32px] bg-[#f51f4d] px-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-xl shadow-[#f51f4d]/40">
              <div className="space-y-4">
                <p className="text-[10px] tracking-[0.28em]">
                  Discover Wahaj Gold Collections
                </p>
                <p className="text-[11px] leading-relaxed normal-case tracking-normal">
                  Replace this block later with your own vertical contact banner
                  image (for example: <br />
                  <span className="font-mono text-[10px]">
                    /contact/banner-main.jpg
                  </span>
                  ).
                </p>
              </div>
            </div>

            {/* Dark navy promo card */}
            <div className="flex h-52 items-center justify-center rounded-[32px] bg-[#050b18] px-8 text-center text-[11px] tracking-[0.18em] text-slate-100 shadow-2xl shadow-black/40">
              <div>
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Buy Gold With Confidence
                </div>
                <p className="text-[11px] leading-relaxed tracking-normal text-slate-300 normal-case">
                  Use this space later for a simple promo message or highlight.
                </p>
              </div>
            </div>

            {/* Plain dark card placeholder */}
            <div className="h-52 rounded-[32px] bg-[#16181c] shadow-2xl shadow-black/40" />
          </aside>

          {/* RIGHT COLUMN – content + form */}
          <section className="space-y-10">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Contact
              </h1>
            </div>

            {/* Address + contact details */}
            <div className="grid gap-10 md:grid-cols-2">
              {/* Address */}
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">
                  Address
                </h2>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>Wahaj Gold (example)</p>
                  <p>Gold Souq Area</p>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="pt-2 text-xs text-slate-500">
                    Update this section later with your exact building / shop
                    details.
                  </p>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">
                  Contact Details
                </h2>
                <div className="space-y-1 text-sm text-slate-700">
                  <p>+971 XX XXX XXXX</p>
                  <p>+971 X XXX XXXX</p>
                  <p>support@wahajgold.com</p>
                </div>
              </div>
            </div>

            {/* Business time */}
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                Business Time
              </h2>
              <p className="text-sm text-slate-700">
                Monday to Saturday: 10:00 AM – 21:00 PM (GST)
              </p>
            </div>

            {/* Map / world image placeholder */}
            <div className="rounded-[32px] border border-dashed border-slate-200 bg-white px-10 py-20 shadow-lg shadow-slate-300/30">
              <div className="flex h-full items-center justify-center text-center text-xs text-slate-500">
                <div>
                  <p>World map / location image placeholder.</p>
                  <p className="mt-2">
                    Later you can replace this with a real map or branded image
                    (e.g.
                    <span className="mx-1 font-mono text-[10px]">
                      /contact/world-map.png
                    </span>
                    ).
                  </p>
                </div>
              </div>
            </div>

            {/* Get In Touch form (client-side, uses /api/contact) */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Get In Touch
              </h2>

              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
