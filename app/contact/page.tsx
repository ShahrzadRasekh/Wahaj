import React from "react";

export default function ContactPage({ searchParams }: any) {
  const success = searchParams?.success === "1";
  const error = searchParams?.error === "1";

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      {/* Show success or error messages */}
      {success && (
        <div className="mb-6 rounded-md bg-green-100 px-4 py-3 text-green-800">
          Your message has been sent successfully.
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-md bg-red-100 px-4 py-3 text-red-800">
          Something went wrong. Please try again later.
        </div>
      )}

      {/* Contact form */}
      <form
        action="/api/contact"
        method="POST"
        className="space-y-6 bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input name="name" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input name="email" type="email" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Address</label>
          <input name="address" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea name="message" rows={5} className="w-full border px-3 py-2 rounded"></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
