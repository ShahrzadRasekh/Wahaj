// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

async function verifyRecaptchaToken(token: string | null | undefined) {
  if (!recaptchaSecret) {
    console.warn("RECAPTCHA_SECRET_KEY is not set; skipping verification.");
    return true; // or false if you want to hard-fail when missing
  }

  if (!token) {
    console.warn("Missing reCAPTCHA token");
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", recaptchaSecret);
    params.append("response", token);

    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const data: any = await res.json();

    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data);
      return false;
    }

    // Optional: check score & action
    if (typeof data.score === "number" && data.score < 0.5) {
      console.warn("reCAPTCHA score too low:", data.score);
      return false;
    }

    // If you set action: "contact" on client, you can enforce it here:
    if (data.action && data.action !== "contact") {
      console.warn("Unexpected reCAPTCHA action:", data.action);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Error verifying reCAPTCHA:", err);
    return false;
  }
}

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
    const {
      name,
      email,
      address,
      message,
      recaptchaToken,
    }: {
      name?: string;
      email?: string;
      address?: string;
      message?: string;
      recaptchaToken?: string | null;
    } = body;

    // 1) Verify reCAPTCHA first
    const recaptchaOk = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaOk) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // 2) Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email and message." },
        { status: 400 }
      );
    }

    const subject = `New contact form message from ${
      name || "Wahaj Gold website"
    }`;

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
