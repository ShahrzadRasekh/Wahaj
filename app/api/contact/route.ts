// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
    const address = form.get("address")?.toString();
    const message = form.get("message")?.toString();

    // SEND EMAIL
    await resend.emails.send({
      from: "Wahaj Gold <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "your@email.com",
      subject: `New contact form message from ${name}`,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // Return success and redirect to contact page
    return NextResponse.redirect(new URL("/contact?success=1", request.url));
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    return NextResponse.redirect(new URL("/contact?error=1", request.url));
  }
}
