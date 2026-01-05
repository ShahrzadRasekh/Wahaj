// lib/data/homeContent.ts
// Single source of truth for homepage content + featured product data (Gold & Silver)

export type BadgeVariant = "gold" | "ruby" | "black";

export type ProductBadge =
  | string
  | {
      label: string;
      variant?: BadgeVariant;
    };

export type MetalType = "Gold" | "Silver";

export type FeaturedProduct = {
  id: number;
  slug: string;
  name: string;
  price: string; // keep for later (you are not rendering it now)
  image: string;
  description?: string;
  badge?: ProductBadge;
  metal: MetalType; // ✅ FIX: you are using this in data, so it must exist in type
};

export type HeroSlide = {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  image: string;
};

// -----------------------------
// CMS-ready Rich Text (simple)
// -----------------------------
export type RichTextBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type BrandIntro = {
  titleEn: string;
  titleAr: string;
  bodyEn: RichTextBlock[];
  bodyAr: RichTextBlock[];
};

export const brandIntro: BrandIntro = {
  titleEn: "Wahaj Gold",
  titleAr: "وهـاج جولد",
  bodyEn: [
    {
      type: "p",
      text:
        "Wahaj Al Jawaher is an Iraqi precious metals brand specializing in high-purity gold and silver minted bars, produced in accordance with internationally recognized standards and supported by full compliance and responsible sourcing.",
    },
    {
      type: "p",
      text:
        "We believe gold is more than a commodity. It is a store of value, a foundation of trust, and a long-term choice. Every product we offer is selected with clarity, verified integrity, and a focus on enduring worth.",
    },
    {
      type: "p",
      text:
        "By combining global best practices with a modern Iraqi identity, Wahaj Al Jawaher sets a refined standard for clean gold and trusted value.",
    },
  ],
  bodyAr: [
    {
      type: "p",
      text:
        "وهج الجواهر علامة عراقية متخصصة في سبائك الذهب والفضة المصكوكة، تقدّم معادن ثمينة عالية النقاء وفق معايير عالمية معترف بها، وبالتزام كامل بالامتثال والتوريد المسؤول.",
    },
    {
      type: "p",
      text:
        "نؤمن بأن الذهب ليس مجرد سلعة، بل قيمة تُحفظ، وثقة تُبنى، وقرار طويل الأمد. لذلك نعمل بوضوح وشفافية، ونقدّم منتجات قابلة للتحقق، مصممة بعناية، ومختارة لتدوم.",
    },
    {
      type: "p",
      text:
        "وهج الجواهر يجمع بين أفضل الممارسات العالمية وهوية عراقية حديثة، ليقدّم معيارًا جديدًا للذهب النظيف والقيمة الموثوقة.",
    },
  ],
};

// -----------------------------
// Key Value Pillars
// -----------------------------
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

// -----------------------------
// Trust & Compliance Highlights
// -----------------------------
export type TrustHighlight = {
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
};

export const trustHighlights: TrustHighlight[] = [
  {
    titleEn: "Responsible Sourcing Approach",
    titleAr: "نهج توريد مسؤول",
    bodyEn:
      "We prioritize transparency and responsible sourcing practices across the buying experience.",
    bodyAr: "نُعطي الأولوية للشفافية والممارسات المسؤولة ضمن تجربة الشراء.",
  },
  {
    titleEn: "Clear Policies & Guidance",
    titleAr: "سياسات وإرشادات واضحة",
    bodyEn:
      "Product details, ordering guidance, and customer support designed to keep decisions clear and confident.",
    bodyAr: "تفاصيل منتج واضحة وإرشادات يمكن الاعتماد عليها.",
  },
  {
    titleEn: "Secure Platform Standards",
    titleAr: "معايير منصة آمنة",
    bodyEn:
      "Built using modern security patterns and safe operational defaults for web platforms.",
    bodyAr: "مبنية وفق أنماط أمان حديثة وإعدادات تشغيل آمنة.",
  },
];

// -----------------------------
// Hero Slides (Homepage)
// -----------------------------
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

// -----------------------------
// Featured Products (Gold)
// -----------------------------
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
      "My Love immortalizes the fleeting beauty of flowers in gold, creating an eternal symbol of affection. Just as love endures, this bouquet remains forever fresh.",
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
      "Just like the moon, everything in life has its own cycle. The moon rises as the day ends for us and we begin our recovery from it.",
    metal: "Gold",
  },
  {
    id: 8,
    slug: "love-tree",
    name: "Love Tree",
    price: "24,950.00",
    image: "/products/Love-Tree.jpg",
    description:
      "Trees are used to represent life, wisdom, power, growth, and prosperity. While many believe that flowers are the only symbol that represent love.",
    metal: "Gold",
  },
];

// -----------------------------
// Featured Products (Silver)
// -----------------------------
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

// -----------------------------
// Unified “all featured” list
// (use for slug page lookups + related products)
// -----------------------------
export const allFeaturedProducts: FeaturedProduct[] = [
  ...featuredGoldProducts,
  ...featuredSilverProducts,
];

// ✅ Backward compatible alias (if any code still imports featuredProducts)
export const featuredProducts: FeaturedProduct[] = allFeaturedProducts;

// -----------------------------
// Legacy types/data (kept only if still used somewhere)
// If not used anymore, you can delete these safely.
// -----------------------------
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
