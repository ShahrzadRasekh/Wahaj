// app/contact/page.tsx
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">Contact</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[280px,minmax(0,1fr)]">
          {/* LEFT COLUMN – MEDIA BANNERS */}
          <aside className="space-y-6">
            {/* MAIN BANNER (Image) */}
            <div className="relative h-80 overflow-hidden rounded-[32px] shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <img
                src="/contact/banner-main%20(2).jpg"
                alt="Discover Wahaj Gold Collections"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                  Discover Wahaj Gold Collections
                </p>
                <p className="mt-2 text-xs text-white/90">
                  Premium bullion, curated gifts, and trusted service.
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 1 (Image) */}
            <div className="relative h-52 overflow-hidden rounded-[32px] shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <img
                src="/contact/banner-2.jpg"
                alt="Buy gold with confidence"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                  Buy Gold With Confidence
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/90">
                  Secure ordering and reliable support when you need it.
                </p>
              </div>
            </div>

            {/* SECONDARY BANNER 2 (Image – optional) */}
            <div className="relative hidden h-52 overflow-hidden rounded-[32px] shadow-[0_12px_30px_rgba(15,23,42,0.16)] md:block">
              <img
                src="/contact/banner-3 (2).jpg"
                alt="Visit or contact Wahaj Gold"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                  Here To Help
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-white/90">
                  Contact us for availability, pricing, and delivery details.
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN – CONTENT + FORM */}
          <section className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Contact
              </h1>
            </div>

            {/* Address + contact details */}
            <div className="grid gap-10 md:grid-cols-2">
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

            {/* Get In Touch */}
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
