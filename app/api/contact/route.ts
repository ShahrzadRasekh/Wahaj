// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ensure Node runtime on Vercel

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const address = String(formData.get('address') || '').trim();
    const message = String(formData.get('message') || '').trim();

    // --- ENV VARS -------------------------------------------------
    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'support@example.com';
    const from =
      process.env.CONTACT_FROM_EMAIL || 'Wahaj Gold <onboarding@resend.dev>';

    if (!resendApiKey) {
      console.error('[CONTACT] RESEND_API_KEY is missing');
      throw new Error('Missing RESEND_API_KEY');
    }

    // --- BUILD EMAIL ----------------------------------------------
    const subject = `New contact form message from ${
      name || 'Wahaj Gold website'
    }`;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name || '-'}</p>
      <p><strong>Email:</strong> ${email || '-'}</p>
      <p><strong>Address:</strong> ${address || '-'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>') || '-'}</p>
    `;

    // --- CALL RESEND HTTP API ------------------------------------
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        // for “reply to this user”, Resend expects replyTo in the HTTP body as well
        replyTo: email || undefined,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error(
        '[CONTACT] Resend API error',
        resendResponse.status,
        errText
      );
      throw new Error('Resend API error');
    }

    console.log('[CONTACT] Email sent successfully');

    // redirect back to /contact with success flag
    return NextResponse.redirect(
      new URL('/contact?success=1', req.url),
      303 // "See Other" is safer after POST
    );
  } catch (error) {
    console.error('[CONTACT] Error in POST /api/contact:', error);

    return NextResponse.redirect(
      new URL('/contact?error=1', req.url),
      303
    );
  }
}
