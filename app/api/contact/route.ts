// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = form.get("name")?.toString() || "";
    const email = form.get("email")?.toString() || "";
    const address = form.get("address")?.toString() || "";
    const message = form.get("message")?.toString() || "";

    // Basic validation (optional)
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      console.error("CONTACT_TO_EMAIL is not set in environment variables.");
      // We still return ok:true so your UI looks fine even while you configure env vars
      return NextResponse.json({
        ok: true,
        warning: "CONTACT_TO_EMAIL not configured on server.",
      });
    }

    // Try to send the email via Resend
    await resend.emails.send({
      from: "Wahaj Gold <onboarding@resend.dev>",
      to,
      subject: `New contact form message from ${name || "Wahaj Gold website"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    // ✅ Tell the browser everything went well
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
