import { NextResponse } from "next/server";

// 1 troy ounce in grams
const OUNCE_TO_GRAM = 31.1034768;

// Simple in-memory cache for the route handler
let cache: { ts: number; data: any } | null = null;

// Adjust cache duration as desired (seconds)
const CACHE_SECONDS = 60;

async function getUsdToIqd(): Promise<number> {
  // Practical approach for Phase 1:
  // Use a public FX reference. You can swap this later to a CBI-based integration if you prefer.
  // If this endpoint ever changes, replace with your preferred provider.
  const res = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
  if (!res.ok) throw new Error("FX rate fetch failed");
  const json = await res.json();
  const rate = json?.rates?.IQD;
  if (!rate) throw new Error("IQD rate missing");
  return rate;
}

async function getGoldUsdPerOunce(): Promise<number> {
  // Preferred: GoldAPI (requires key)
  const key = process.env.GOLDAPI_KEY;
  if (!key) {
    throw new Error("Missing GOLDAPI_KEY in environment variables.");
  }

  const res = await fetch("https://www.goldapi.io/api/XAU/USD", {
    headers: { "x-access-token": key },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Gold price fetch failed");
  const json = await res.json();

  // GoldAPI returns price in `price` (USD per ounce)
  const price = json?.price;
  if (typeof price !== "number") throw new Error("Invalid gold price response");

  return price;
}

export async function GET() {
  try {
    // Serve cache if fresh
    const now = Date.now();
    if (cache && now - cache.ts < CACHE_SECONDS * 1000) {
      return NextResponse.json(cache.data);
    }

    const [usdPerOz, usdToIqd] = await Promise.all([getGoldUsdPerOunce(), getUsdToIqd()]);

    const usdPerGram = usdPerOz / OUNCE_TO_GRAM;
    const iqdPerOz = usdPerOz * usdToIqd;
    const iqdPerGram = usdPerGram * usdToIqd;

    const data = {
      updatedAt: new Date().toISOString(),
      gold: {
        usd: { ounce: usdPerOz, gram: usdPerGram },
        iqd: { ounce: iqdPerOz, gram: iqdPerGram },
      },
      fx: { usdToIqd },
    };

    cache = { ts: now, data };
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
