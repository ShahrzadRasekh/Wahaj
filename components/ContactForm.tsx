// components/ContactForm.tsx
"use client";

import React, { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, address, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Sorry, something went wrong. Please try again."
        );
        return;
      }

      setSuccess("Thank you. Your message has been sent successfully.");
      setName("");
      setEmail("");
      setAddress("");
      setMessage("");

      // Optionally auto-hide the success message after a few seconds
      setTimeout(() => setSuccess(null), 6000);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1">
        <label
          htmlFor="address"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
        >
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      {/* Feedback messages */}
      {success && (
        <p className="text-sm text-emerald-700">{success}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-[#b91c1c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md shadow-red-500/30 transition hover:bg-[#991b1b] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </div>
    </form>
  );
}
