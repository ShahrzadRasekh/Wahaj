import { NextResponse } from "next/server";

export const runtime = "edge";

const TROY_OUNCE_IN_GRAMS = 31.1034768;

function format2(n: number) {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

async function fetchJson(url: string, timeoutMs = 8000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
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
  const price = Number((json as any)?.price);
  if (!Number.isFinite(price) || price <= 0) throw new Error("Gold API invalid price");
  return price;
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
    const [goldUsdPerOz, usdToAed] = await Promise.all([getGoldUsdPerOz(), getUsdToAed()]);

    const goldOzAed = goldUsdPerOz * usdToAed;
    const goldGAed = goldOzAed / TROY_OUNCE_IN_GRAMS;

    return NextResponse.json({
      provider: "gold-api + open.er-api",
      currency: "AED",
      goldOz: format2(goldOzAed),
      goldG: format2(goldGAed),
      updatedAt: new Date().toISOString(),
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
