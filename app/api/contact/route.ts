import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") || "").toString();
    const email = (formData.get("email") || "").toString();
    const address = (formData.get("address") || "").toString();
    const message = (formData.get("message") || "").toString();

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!to) {
      console.error("CONTACT_TO_EMAIL is not set");
    }

    await resend.emails.send({
      from,
      to: to || "info@wahaj.com",
      subject: `New contact form message from ${name || "Wahaj Gold website"}`,
      replyTo: email || undefined,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Address:</strong> ${address || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>") || "-"}</p>
      `,
    });

    return NextResponse.redirect("/contact?success=1");
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.redirect("/contact?error=1");
  }
}
