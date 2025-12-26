"use client";

type LivePrices = { goldOz: string; goldG: string };

export default function HeaderPrices({
  prices,
  heroMode,
  isArabic,
}: {
  prices: LivePrices;
  heroMode: boolean;
  isArabic: boolean;
}) {
  const priceLabel = heroMode ? "text-yellow-200" : "text-slate-500";

  return (
    <div
      className={[
        "hidden items-center gap-4 md:flex",
        // In RTL we want the label/value blocks to feel natural
        isArabic ? "flex-row-reverse" : "flex-row",
      ].join(" ")}
    >
      <div className="flex flex-col leading-tight">
        <span className={`text-[10px] uppercase tracking-[0.16em] ${priceLabel}`}>GOLD Oz</span>
        <span className="font-semibold text-yellow-500 tabular-nums">{prices.goldOz}</span>
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`text-[10px] uppercase tracking-[0.16em] ${priceLabel}`}>GOLD g</span>
        <span className="font-semibold text-yellow-500 tabular-nums">{prices.goldG}</span>
      </div>
    </div>
  );
}
