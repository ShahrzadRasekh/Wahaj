// app/api/spot/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TROY_OUNCE_IN_GRAMS = 31.1034768;

// 1) Gold spot: Gold-API (no key)
async function fetchXauUsdPerOz(): Promise<number> {
  // Endpoint referenced publicly as: https://api.gold-api.com/price/XAU :contentReference[oaicite:2]{index=2}
  const res = await fetch("https://api.gold-api.com/price/XAU", {
    // Avoid caching stale data at the platform level
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) throw new Error(`Gold API error: ${res.status}`);
  const data = await res.json();

  // Many services return { price: number, ... } — log once if needed.
  const price = Number(data?.price);
  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("Gold API returned invalid price");
  }
  return price; // USD per troy oz
}

// 2) FX: ExchangeRate-API Open Access (no key) :contentReference[oaicite:3]{index=3}
async function fetchUsdToAed(): Promise<number> {
  const res = await fetch("https://open.er-api.com/v6/latest/USD", {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) throw new Error(`FX API error: ${res.status}`);
  const data = await res.json();

  const rate = Number(data?.rates?.AED);
  if (!Number.isFinite(rate) || rate <= 0) {
    throw new Error("FX API returned invalid AED rate");
  }
  return rate;
}

export async function GET() {
  try {
    const [xauUsdPerOz, usdToAed] = await Promise.all([
      fetchXauUsdPerOz(),
      fetchUsdToAed(),
    ]);

    const goldOzAed = xauUsdPerOz * usdToAed;
    const goldGAed = goldOzAed / TROY_OUNCE_IN_GRAMS;

    return NextResponse.json({
      ok: true,
      source: {
        gold: "gold-api.com",
        fx: "exchangerate-api.com (open access)",
      },
      currency: "AED",
      gold_oz_aed: Number(goldOzAed.toFixed(2)),
      gold_g_aed: Number(goldGAed.toFixed(2)),
      updated_at: new Date().toISOString(),
      // Optional: expose the raw numbers for debugging
      raw: {
        xau_usd_per_oz: xauUsdPerOz,
        usd_to_aed: usdToAed,
      },
    });
  } catch (err: any) {
    // Fail “softly” so your header can show "--" instead of breaking
    return NextResponse.json(
      {
        ok: false,
        currency: "AED",
        gold_oz_aed: null,
        gold_g_aed: null,
        updated_at: new Date().toISOString(),
        error: err?.message ?? "Unknown error",
      },
      { status: 200 }
    );
  }
}
