"use client";

import React, { useEffect, useMemo, useState, FormEvent } from "react";
import { usePathname } from "next/navigation";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

type UiText = {
  name: string;
  email: string;
  address: string;
  message: string;
  sending: string;
  send: string;
  success: string;
  networkError: string;
  genericError: string;
};

export default function ContactForm() {
  const pathname = usePathname() || "/";
  const isArabic = pathname === "/ar" || pathname.startsWith("/ar/");

  const ui: UiText = useMemo(
    () =>
      isArabic
        ? {
            name: "الاسم",
            email: "البريد الإلكتروني",
            address: "العنوان",
            message: "الرسالة",
            sending: "جارٍ الإرسال...",
            send: "إرسال الرسالة",
            success: "شكراً لك. تم إرسال رسالتك بنجاح.",
            networkError: "خطأ في الشبكة. تحقق من الاتصال وحاول مرة أخرى.",
            genericError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
          }
        : {
            name: "Name",
            email: "Email",
            address: "Address",
            message: "Message",
            sending: "SENDING...",
            send: "SEND MESSAGE",
            success: "Thank you. Your message has been sent successfully.",
            networkError: "Network error. Please check your connection and try again.",
            genericError: "Sorry, something went wrong. Please try again.",
          },
    [isArabic]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load reCAPTCHA script on mount
  useEffect(() => {
    if (!siteKey) {
      console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set");
      return;
    }
    if (document.querySelector("#recaptcha-v3-script")) return;

    const script = document.createElement("script");
    script.id = "recaptcha-v3-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  async function getRecaptchaToken(): Promise<string | null> {
    if (!siteKey) return null;
    if (!window.grecaptcha) return null;

    try {
      const token = await window.grecaptcha.execute(siteKey, { action: "contact" });
      return token;
    } catch {
      return null;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, address, message, recaptchaToken }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : ui.genericError);
        return;
      }

      setSuccess(ui.success);
      setName("");
      setEmail("");
      setAddress("");
      setMessage("");

      setTimeout(() => setSuccess(null), 6000);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setError(ui.networkError);
    } finally {
      setSubmitting(false);
    }
  }

  // Labels remain uppercase for EN, but not for AR (uppercase has no meaning in Arabic)
  const labelClass = isArabic
    ? "text-xs font-semibold tracking-[0.06em] text-slate-600"
    : "text-xs font-semibold uppercase tracking-[0.18em] text-slate-600";

  // Inputs should keep LTR for email, but RTL for Arabic text
  const textDir = isArabic ? "rtl" : "ltr";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className={labelClass}>
            {ui.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            dir={textDir}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className={labelClass}>
            {ui.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            dir="ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1">
        <label htmlFor="address" className={labelClass}>
          {ui.address}
        </label>
        <input
          id="address"
          name="address"
          type="text"
          dir={textDir}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className={labelClass}>
          {ui.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          dir={textDir}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      {/* Feedback messages */}
      {success && <p className="text-sm text-emerald-700">{success}</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-[#b91c1c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md shadow-red-500/30 transition hover:bg-[#991b1b] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? ui.sending : ui.send}
        </button>
      </div>
    </form>
  );
}
