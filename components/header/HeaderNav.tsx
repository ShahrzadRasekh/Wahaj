"use client";

import Link from "next/link";

type NavItem = { label: string; href: string };

export default function HeaderNav({
  items,
  isActive,
  heroMode,
}: {
  items: NavItem[];
  isActive: (href: string) => boolean;
  heroMode: boolean;
}) {
  const navInactive = heroMode
    ? "text-slate-200 hover:text-yellow-300"
    : "text-slate-700 hover:text-yellow-600";

  const navActive = heroMode ? "text-yellow-300" : "text-yellow-600";

  return (
    <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] lg:flex">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={["text-[11px] transition", isActive(item.href) ? navActive : navInactive].join(" ")}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
