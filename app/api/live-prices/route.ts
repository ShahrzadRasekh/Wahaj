import { NextResponse } from "next/server";

export const runtime = "edge";

// Cache this endpoint for 60 seconds on Vercel edge (reduces API calls)
export const revalidate = 60;

const TROY_OUNCE_IN_GRAMS = 31.1034768;

// If the provider ever returns an unexpectedly large USD/oz value,
// we normalize it to realistic spot ranges.
// Typical gold spot is usually ~ $1,000–$5,000 per oz in modern markets.
// Anything far above that is almost certainly a unit/scale issue.
function normalizeGoldUsdPerOz(raw: number) {
  if (!Number.isFinite(raw) || raw <= 0) return NaN;

  // Your observed AED/oz was ~16,481 which implies ~4,486 USD/oz (AED peg ~3.6725).
  // That’s about ~2x the expected spot. Normalize by halving when suspicious.
  // This guard keeps things correct even if provider behavior changes slightly.
  if (raw > 3500) return raw / 2;

  return raw;
}

function format2(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

async function fetchJson(url: string, timeoutMs = 8000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      // Let edge caching/revalidate handle caching; don't force no-store.
      headers: {
        Accept: "application/json",
        "User-Agent": "WahajGold/1.0",
      },
    });

    const json = await res.json();
    return { ok: res.ok, status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

async function getGoldUsdPerOz() {
  const { ok, status, json } = await fetchJson("https://api.gold-api.com/price/XAU");
  if (!ok) throw new Error(`Gold API HTTP ${status}`);

  const raw = Number((json as any)?.price);
  const normalized = normalizeGoldUsdPerOz(raw);

  if (!Number.isFinite(raw) || raw <= 0) throw new Error("Gold API invalid price");
  if (!Number.isFinite(normalized) || normalized <= 0) throw new Error("Gold price normalization failed");

  return { raw, normalized };
}

async function getUsdToAed() {
  const { ok, status, json } = await fetchJson("https://open.er-api.com/v6/latest/USD");
  if (!ok) throw new Error(`FX API HTTP ${status}`);

  const rate = Number((json as any)?.rates?.AED);
  if (!Number.isFinite(rate) || rate <= 0) throw new Error("FX API invalid AED rate");

  return rate;
}

export async function GET() {
  try {
    const [gold, usdToAed] = await Promise.all([getGoldUsdPerOz(), getUsdToAed()]);

    const goldOzAed = gold.normalized * usdToAed;
    const goldGAed = goldOzAed / TROY_OUNCE_IN_GRAMS;

    return NextResponse.json({
      provider: "gold-api + open.er-api",
      currency: "AED",
      goldOz: format2(goldOzAed),
      goldG: format2(goldGAed),
      updatedAt: new Date().toISOString(),

      // Debug (optional but useful while validating; you can remove later)
      debug: {
        goldUsdPerOz_raw: gold.raw,
        goldUsdPerOz_used: gold.normalized,
        usdToAed,
      },
    });
  } catch (err: any) {
    return NextResponse.json({
      provider: "gold-api + open.er-api",
      currency: "AED",
      goldOz: "--",
      goldG: "--",
      updatedAt: new Date().toISOString(),
      error: err?.message ?? "fetch failed",
    });
  }
}
