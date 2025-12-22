import { NextResponse } from "next/server";

export const runtime = "nodejs"; // (works on Vercel too)

type Cache = {
  ts: number;
  payload: {
    currency: "AED";
    gold_oz: number;
    gold_g: number;
    updated_at: string;
  };
};

// Simple in-memory cache to avoid hitting provider too often
let cache: Cache | null = null;

const OZ_TO_G = 31.1034768;

// Fetch from GoldAPI (XAU/AED), then compute per gram
async function fetchGoldAedFromGoldApi(): Promise<Cache["payload"]> {
  const key = process.env.GOLDAPI_KEY;
  if (!key) {
    throw new Error("Missing GOLDAPI_KEY in environment variables.");
  }

  const res = await fetch(`https://app.goldapi.net/price/XAU/AED?x-api-key=${key}`, {
    // do NOT cache at fetch layer; we handle caching ourselves
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GoldAPI error ${res.status}: ${text}`);
  }

  const data = (await res.json()) as { price?: number; timestamp?: number };
  const gold_oz = Number(data.price);

  if (!Number.isFinite(gold_oz)) {
    throw new Error("GoldAPI response missing numeric `price`.");
  }

  const gold_g = gold_oz / OZ_TO_G;

  return {
    currency: "AED",
    gold_oz,
    gold_g,
    updated_at: new Date().toISOString(),
  };
}

export async function GET() {
  try {
    const now = Date.now();

    // Provider refresh interval (server): 10 seconds
    const SERVER_REFRESH_MS = 10_000;

    if (cache && now - cache.ts < SERVER_REFRESH_MS) {
      return NextResponse.json(cache.payload);
    }

    const payload = await fetchGoldAedFromGoldApi();
    cache = { ts: now, payload };

    return NextResponse.json(payload);
  } catch (err: any) {
    // graceful fallback error (client can show dashes)
    return NextResponse.json(
      { error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
