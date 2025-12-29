import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch("https://example.com", { cache: "no-store" });
    const text = await res.text();
    return NextResponse.json({
      ok: true,
      status: res.status,
      sample: text.slice(0, 40),
    });
  } catch (err: any) {
    return NextResponse.json({
      ok: false,
      error: err?.message ?? String(err),
      cause: err?.cause ? String(err.cause) : null,
    });
  }
}
