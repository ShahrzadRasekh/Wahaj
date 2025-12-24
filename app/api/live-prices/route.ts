import { NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 60;

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
      headers: { Accept: "application/json", "User-Agent": "WahajGold/1.0" },
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

  const usdPerOz = Number((json as any)?.price);
  if (!Number.isFinite(usdPerOz) || usdPerOz <= 0) throw new Error("Gold API invalid price");

  return usdPerOz; // USD per troy oz
}

async function getUsdToAed() {
  const { ok, status, json } = await fetchJson("https://open.er-api.com/v6/latest/USD");
  if (!ok) throw new Error(`FX API HTTP ${status}`);

  const usdToAed = Number((json as any)?.rates?.AED);
  if (!Number.isFinite(usdToAed) || usdToAed <= 0) throw new Error("FX API invalid AED rate");

  return usdToAed;
}

export async function GET() {
  try {
    const [usdPerOz, usdToAed] = await Promise.all([getGoldUsdPerOz(), getUsdToAed()]);

    const aedPerOz = usdPerOz * usdToAed;
    const aedPerG = aedPerOz / TROY_OUNCE_IN_GRAMS;

    return NextResponse.json({
      provider: "gold-api + open.er-api",
      currency: "AED",
      goldOz: format2(aedPerOz),
      goldG: format2(aedPerG),
      updatedAt: new Date().toISOString(),

      // Optional: keep for verification during build; remove later if you want
      debug: { usdPerOz, usdToAed },
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
