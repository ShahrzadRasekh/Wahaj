// lib/data/homeContent.ts

export type BadgeVariant = "gold" | "ruby" | "black";

export type ProductBadge =
  | string
  | {
      label: string;
      variant?: BadgeVariant;
    };

    export type FeaturedProduct = {
      id: number;
      slug: string;            // ✅ add this
      name: string;
      price: string;           // you’re not showing it now, but keep if needed later
      image: string;
      description?: string;
      badge?: ProductBadge;
    };
    

export type HeroSlide = {
  id: number;
  label: string;
  title: string;
  subtitle: string;
  image: string;
};

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

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    slug: "strength",
    name: "Strength",
    price: "5,207.69",
    image: "/products/LionKing.jpg",
    description:
      "Roaring with power and leadership, Strength represents the fearless ruler of the plains, guiding with wisdom and courage.",
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
  },
  {
    id: 3,
    slug: "sea-queen",
    name: "Sea Queen",
    price: "10,120.50",
    image: "/products/Mermaid.jpg",
    description:
      "Embodying the calm yet unpredictable beauty of the sea, Sea Queen exudes the strength and mystery of its ruler, the mermaid.",
  },
  {
    id: 4,
    slug: "my-mother",
    name: "My Mother",
    price: "1,062.05",
    image: "/products/MyMother.jpg",
    description:
      "My Mother captures the essence of a mother’s embrace—the first source of love, trust, and protection a daughter feels.",
  },
  {
    id: 5,
    slug: "my-heart",
    name: "My Heart",
    price: "5,310.42",
    image: "/products/MyHeart.jpg",
    description:
      "A tribute to the nurturing bond between mother and son, My Heart reflects the gentle wisdom and enduring care that protects and guides.",
  },
  {
    id: 6,
    slug: "makkah",
    name: "Makkah",
    price: "720.30",
    image: "/products/makkahbar.jpg",
    description:
      "Makkah is “the fountain head and cradle of Islam”. It’s Islam’s holiest city, as it is the birthplace of Prophet Muhmmad (PBUH) and the faith itself.",
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
  },
  {
    id: 8,
    slug: "love-tree",
    name: "Love Tree",
    price: "24,950.00",
    image: "/products/Love-Tree.jpg",
    description:
      "Trees are used to represent life, wisdom, power, growth, and prosperity. While many believe that flowers are the only symbol that represent love",
  },
];

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
