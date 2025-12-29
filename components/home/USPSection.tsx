"use client";

import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function USPSection({ locale }: Props) {
  const t = getDict(locale);

  const items = [
    {
      title: t.usp.fastDelivery,
      desc: t.usp.fastDeliveryDesc,
      icon: "🚚",
    },
    {
      title: t.usp.secureOrdering,
      desc: t.usp.secureOrderingDesc,
      icon: "🔒",
    },
    {
      title: t.usp.certifiedProducts,
      desc: t.usp.certifiedProductsDesc,
      icon: "🏅",
    },
    {
      title: t.usp.satisfaction,
      desc: t.usp.satisfactionDesc,
      icon: "✔️",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white shadow-lg shadow-gray-200/60 p-6 text-center border border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-sm font-bold tracking-wide text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
