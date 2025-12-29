import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 60; // ISR: revalidate every 60s

const TROY_OUNCE_IN_GRAMS = 31.1034768;

function format2(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

async function fetchJson(url: string, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      // allow Next.js/Vercel to cache this request
      next: { revalidate: 60 },
    });

    const text = await res.text();
    let json: any = null;

    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = null;
    }

    return { ok: res.ok, status: res.status, json, text };
  } finally {
    clearTimeout(timer);
  }
}

async function getGoldUsdPerOz() {
  const { ok, status, json, text } = await fetchJson(
    "https://api.gold-api.com/price/XAU"
  );

  if (!ok) {
    throw new Error(`Gold API HTTP ${status}: ${text?.slice(0, 120)}`);
  }

  const usdPerOz = Number(json?.price);
  if (!Number.isFinite(usdPerOz) || usdPerOz <= 0) {
    throw new Error("Gold API invalid price");
  }

  return usdPerOz;
}

async function getUsdToAed() {
  const { ok, status, json, text } = await fetchJson(
    "https://open.er-api.com/v6/latest/USD"
  );

  if (!ok) {
    throw new Error(`FX API HTTP ${status}: ${text?.slice(0, 120)}`);
  }

  const usdToAed = Number(json?.rates?.AED);
  if (!Number.isFinite(usdToAed) || usdToAed <= 0) {
    throw new Error("FX API invalid AED rate");
  }

  return usdToAed;
}

export async function GET() {
  try {
    const [usdPerOz, usdToAed] = await Promise.all([
      getGoldUsdPerOz(),
      getUsdToAed(),
    ]);

    const aedPerOz = usdPerOz * usdToAed;
    const aedPerG = aedPerOz / TROY_OUNCE_IN_GRAMS;

    return NextResponse.json(
      {
        provider: "gold-api + open.er-api",
        currency: "AED",
        goldOz: format2(aedPerOz),
        goldG: format2(aedPerG),
        updatedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          // CDN + edge cache (very important)
          "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
        },
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        provider: "gold-api + open.er-api",
        currency: "AED",
        goldOz: "--",
        goldG: "--",
        updatedAt: new Date().toISOString(),
        error: err?.message ?? "fetch failed",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  }
}
