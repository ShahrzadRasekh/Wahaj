// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;          // where you receive messages
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"; // Resend sandbox

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    if (!resend || !resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured. (Missing RESEND_API_KEY)" },
        { status: 500 }
      );
    }

    if (!toEmail) {
      console.error("CONTACT_TO_EMAIL is not set");
      return NextResponse.json(
        { error: "Email destination is not configured. (Missing CONTACT_TO_EMAIL)" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, address, message } = body as {
      name?: string;
      email?: string;
      address?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email and message." },
        { status: 400 }
      );
    }

    const subject = `New contact form message from ${name || "Wahaj Gold website"}`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: `Wahaj Gold Website <${fromEmail}>`,
      to: toEmail,
      subject,
      html,
      // We can add reply_to later once everything works
      // reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected /api/contact error:", err);
    return NextResponse.json(
      { error: "Unexpected server error while sending your message." },
      { status: 500 }
    );
  }
}
