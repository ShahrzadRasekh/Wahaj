"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      if (!data.ok) {
        throw new Error("Server responded with error");
      }

      setStatus("success");
      e.currentTarget.reset(); // clear the form
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-sm text-slate-900"
    >
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
          className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      {/* Status + Button */}
      <div className="flex items-center justify-between pt-2">
        <div className="h-5 text-xs">
          {status === "success" && (
            <span className="text-emerald-600">
              Thank you. Your message has been sent successfully.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-600">
              Sorry, something went wrong. Please try again.
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-full bg-[#b91c1c] px-10 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-md shadow-red-500/30 transition hover:bg-[#991b1b] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
