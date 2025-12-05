// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate using Zod
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      // Collect error messages
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // ✅ At this point TypeScript knows result is success
    const data = result.data;

    // Optional: extra destructuring
    const { name, email, phone, appointment, message } = data;

    // TODO: Save to DB, send email, etc.
    // e.g. await db.contact.create({ data });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
