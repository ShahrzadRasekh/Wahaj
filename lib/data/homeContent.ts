// lib/data/content.ts
// New unified content file (clean + compatible with your current structures)

export type BadgeVariant = "gold" | "ruby" | "black";

export type ProductBadge =
  | string
  | {
      label: string;
      variant?: BadgeVariant;
    };

// ✅ Featured products (now supports Gold/Silver tabs on homepage)
export type FeaturedProduct = {
  id: number;
  slug: string;
  name: string;
  price: string; // keep for later (not shown now)
  image: string;
  description?: string;
  badge?: ProductBadge;
  metal: "Gold" | "Silver";
};

// ✅ Hero (keep, since your site uses it now)
export type HeroSlide = {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  image: string;
};

// ✅ Keeping these for backward compatibility (even if Home won’t use them)
export type PromoSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
};

export type WorthProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  metal: "Gold" | "Silver" | "Platinum";
};

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  source: string;
  image: string;
};

// ✅ NEW: Brand intro section data
export type BrandIntro = {
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
};

export const brandIntro: BrandIntro = {
  titleEn: "Wahaj Gold",
  titleAr: "وهـاج جولد",
  bodyEn:
    "A modern bullion destination built for clarity, trust, and convenience. Explore thoughtfully curated bars and gift-ready pieces with a premium experience from browsing to delivery.",
  bodyAr:
    "وجهة حديثة للسبائك مبنية على الوضوح والثقة وسهولة الشراء. اكتشف سبائك مختارة بعناية وقطعًا مناسبة للهدايا ضمن تجربة مميزة من التصفح حتى التسليم.",
};

// ✅ NEW: Key value pillars
export type ValuePillarIcon = "delivery" | "secure" | "certified" | "support";

export type ValuePillar = {
  icon: ValuePillarIcon;
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
};

export const valuePillars: ValuePillar[] = [
  {
    icon: "delivery",
    titleEn: "Fast Delivery",
    titleAr: "توصيل سريع",
    bodyEn: "Reliable delivery flow designed for speed and peace of mind.",
    bodyAr: "عملية توصيل موثوقة مصممة للسرعة وراحة البال.",
  },
  {
    icon: "secure",
    titleEn: "Secure Ordering",
    titleAr: "طلب آمن",
    bodyEn: "A clean checkout journey with security-first best practices.",
    bodyAr: "تجربة شراء سلسة مع أفضل ممارسات الأمان.",
  },
  {
    icon: "certified",
    titleEn: "Certified Products",
    titleAr: "منتجات معتمدة",
    bodyEn: "Carefully selected items with clear product presentation.",
    bodyAr: "اختيارات مدروسة مع عرض واضح لمواصفات المنتج.",
  },
  {
    icon: "support",
    titleEn: "Customer Support",
    titleAr: "دعم العملاء",
    bodyEn: "A responsive team ready to assist throughout your purchase.",
    bodyAr: "فريق متجاوب لمساعدتك خلال رحلة الشراء.",
  },
];

// ✅ NEW: Trust & compliance highlights
export type TrustHighlight = {
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
};

export const trustHighlights: TrustHighlight[] = [
  {
    titleEn: "Responsible sourcing mindset",
    titleAr: "نهج توريد مسؤول",
    bodyEn:
      "We prioritize transparency and responsible practices across the experience.",
    bodyAr: "نُعطي الأولوية للشفافية والممارسات المسؤولة ضمن تجربة الشراء.",
  },
  {
    titleEn: "Clear policies & guidance",
    titleAr: "سياسات وإرشادات واضحة",
    bodyEn: "Straightforward product details and customer guidance you can rely on.",
    bodyAr: "تفاصيل منتج واضحة وإرشادات يمكن الاعتماد عليها.",
  },
  {
    titleEn: "Secure platform standards",
    titleAr: "معايير منصة آمنة",
    bodyEn: "Built with modern web security patterns and safe operational defaults.",
    bodyAr: "مبنية وفق أنماط أمان حديثة وإعدادات تشغيل آمنة.",
  },
];

// -------------------------
// EXISTING CONTENT (kept)
// -------------------------

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-1.jpg",
  },
  {
    id: 2,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-2.jpg",
  },
  {
    id: 3,
    label: "Invest in your future with trusted bullion",
    title: "WAHAJ GOLD",
    subtitle:
      "Secure, simple and transparent buying online. Discover certified gold bars & gift collections crafted for investors and collectors.",
    image: "/hero/hero-3.jpg",
  },
];

// ✅ Gold featured (your existing ones, now marked as Gold)
export const featuredGoldProducts: FeaturedProduct[] = [
  {
    id: 1,
    slug: "strength",
    name: "Strength",
    price: "5,207.69",
    image: "/products/LionKing.jpg",
    description:
      "Roaring with power and leadership, Strength represents the fearless ruler of the plains, guiding with wisdom and courage.",
    metal: "Gold",
  },
  {
    id: 2,
    slug: "my-love",
    name: "My Love",
    price: "1,344.29",
    badge: { label: "Best Seller", variant: "gold" },
    image: "/products/Bouquet.jpg",
    description:
      "My Love immortalizes the fleeting beauty of flowers in gold, creating an eternal symbol of affection. Just as love endures, this bouquet remains forever fresh",
    metal: "Gold",
  },
  {
    id: 3,
    slug: "sea-queen",
    name: "Sea Queen",
    price: "10,120.50",
    image: "/products/Mermaid.jpg",
    description:
      "Embodying the calm yet unpredictable beauty of the sea, Sea Queen exudes the strength and mystery of its ruler, the mermaid.",
    metal: "Gold",
  },
  {
    id: 4,
    slug: "my-mother",
    name: "My Mother",
    price: "1,062.05",
    image: "/products/MyMother.jpg",
    description:
      "My Mother captures the essence of a mother’s embrace—the first source of love, trust, and protection a daughter feels.",
    metal: "Gold",
  },
  {
    id: 5,
    slug: "my-heart",
    name: "My Heart",
    price: "5,310.42",
    image: "/products/MyHeart.jpg",
    description:
      "A tribute to the nurturing bond between mother and son, My Heart reflects the gentle wisdom and enduring care that protects and guides.",
    metal: "Gold",
  },
  {
    id: 6,
    slug: "makkah",
    name: "Makkah",
    price: "720.30",
    image: "/products/makkahbar.jpg",
    description:
      "Makkah is “the fountain head and cradle of Islam”. It’s Islam’s holiest city, as it is the birthplace of Prophet Muhmmad (PBUH) and the faith itself.",
    metal: "Gold",
  },
  {
    id: 7,
    slug: "moon-flower",
    name: "Moon Flower",
    price: "1,180.75",
    badge: { label: "New Arrival", variant: "gold" },
    image: "/products/MoonFlower.jpg",
    description:
      "Just like the moon, everything in life has its own cycle. The moon rises as the day ends for us and we begin our recovery from it",
    metal: "Gold",
  },
  {
    id: 8,
    slug: "love-tree",
    name: "Love Tree",
    price: "24,950.00",
    image: "/products/Love-Tree.jpg",
    description:
      "Trees are used to represent life, wisdom, power, growth, and prosperity. While many believe that flowers are the only symbol that represent love",
    metal: "Gold",
  },
];

// ✅ Silver featured (add more later; for now, at least one real one you already have)
export const featuredSilverProducts: FeaturedProduct[] = [
  {
    id: 101,
    slug: "emirates-silver-10g",
    name: "10 g Silver Bar – Emirates Gold",
    price: "158.68",
    image: "/products/emirates-silver-10g.jpg",
    description:
      "A refined silver bar designed for collectors and investors who value clean form and clarity.",
    metal: "Silver",
  },
];

// ✅ Use this everywhere for product pages / slug routes (Gold + Silver)
export const allFeaturedProducts: FeaturedProduct[] = [
  ...featuredGoldProducts,
  ...featuredSilverProducts,
];

// --------- Backward-compatible exports (optional but safe) ---------

// Keeps old import paths working if any file still uses `featuredProducts`
export const featuredProducts: FeaturedProduct[] = allFeaturedProducts;

// Kept for compatibility (not used on new homepage)
export const promoSlides: PromoSlide[] = [
  {
    id: 1,
    title: "Guaranteed Buyback & Trade-In",
    description:
      "Upgrade or liquidate your bullion with transparent rates and a smooth, no-pressure process.",
    image: "/banners/buyback.jpg",
    ctaLabel: "Explore buyback options",
  },
  {
    id: 2,
    title: "Custom Gold Gifts for Every Occasion",
    description:
      "Design personalised gift bars and coins for weddings, anniversaries and corporate gifting.",
    image: "/banners/gifting.jpg",
    ctaLabel: "View gift services",
  },
  {
    id: 3,
    title: "Secure Storage & Vaulting",
    description:
      "Keep your gold in fully insured vaults with discreet access and clear reporting.",
    image: "/banners/storage.jpg",
    ctaLabel: "Discover storage plans",
  },
];

export const worthProducts: WorthProduct[] = [
  {
    id: 1,
    name: "American Buffalo 2023 One Ounce",
    price: "18,394.15",
    image: "/products/buffalo-1oz.jpg",
    metal: "Gold",
  },
  {
    id: 2,
    name: "10 g Silver Bar – Emirates Gold",
    price: "158.68",
    image: "/products/emirates-silver-10g.jpg",
    metal: "Silver",
  },
  {
    id: 3,
    name: "1/2 Ounce Oval Hook Pendant",
    price: "7,924.18",
    image: "/products/oval-hook-half-oz.jpg",
    metal: "Gold",
  },
  {
    id: 4,
    name: "Etihad Bars 10 Gram",
    price: "5,085.28",
    image: "/products/etihad-10g.jpg",
    metal: "Gold",
  },
];

export const latestNews: NewsItem[] = [
  {
    id: 1,
    title:
      "SAM Precious Metals Produces the World’s Largest Silver Bar, Weighing 1971 kgs to Represent the UAE’s Founding Year",
    date: "Thu, 04 Dec 2025 00:00:00 GMT",
    source: "Market Insights",
    image: "/news/largestsilverbar.jpg",
  },
  {
    id: 2,
    title: "Strengthening Global Academic Pathways for Francophone Communities",
    date: "Thu, 04 Dec 2025 00:00:00 GMT",
    source: "Wahaj Research Desk",
    image: "/news/spmacademy.jpg",
  },
  {
    id: 3,
    title:
      "SAM Precious Metals: Leading the Industry with Transparency, Responsible Sourcing & Education Programs",
    date: "Wed, 03 Dec 2025 00:00:00 GMT",
    source: "Global Gold Review",
    image: "/news/Magazine-ad.jpg",
  },
  {
    id: 4,
    title:
      "SAM Advances Global Academic Development Through Partnership With École de Commerce de Lyon",
    date: "Tue, 02 Dec 2025 00:00:00 GMT",
    source: "Energy Metals Report",
    image: "/news/samacademydevelopment.jpg",
  },
];

export const brandLogos: string[] = [
  "/brands/pamp.png",
  "/brands/aletihad.png",
  "/brands/sam.png",
  "/brands/valcambi.png",
  "/brands/perthmint.png",
];
