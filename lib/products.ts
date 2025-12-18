export type BadgeVariant = "gold" | "ruby" | "black";

export type ProductBadge =
  | string
  | {
      label: string;
      variant?: BadgeVariant;
    };

export type FeaturedProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
  badge?: ProductBadge;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    name: "Strength",
    price: "5,207.69",
    image: "/products/LionKing.jpg",
    description:
      "Roaring with power and leadership, Strength represents the fearless ruler of the plains, guiding with wisdom and courage.",
  },
  {
    id: 2,
    name: "My Love",
    price: "1,344.29",
    badge: { label: "Best Seller", variant: "gold" },
    image: "/products/Bouquet.jpg",
    description:
      "My Love immortalizes the fleeting beauty of flowers in gold, creating an eternal symbol of affection. Just as love endures, this bouquet remains forever fresh",
  },
  {
    id: 3,
    name: "Sea Queen",
    price: "10,120.50",
    image: "/products/Mermaid.jpg",
    description:
      "Embodying the calm yet unpredictable beauty of the sea, Sea Queen exudes the strength and mystery of its ruler, the mermaid.",
  },
  {
    id: 4,
    name: "My Mother",
    price: "1,062.05",
    image: "/products/MyMother.jpg",
    description:
      "My Mother captures the essence of a mother’s embrace—the first source of love, trust, and protection a daughter feels.",
  },
  {
    id: 5,
    name: "My Heart",
    price: "5,310.42",
    image: "/products/MyHeart.jpg",
    description:
      "A tribute to the nurturing bond between mother and son, My Heart reflects the gentle wisdom and enduring care that protects and guides.",
  },
  {
    id: 6,
    name: "Makkah",
    price: "720.30",
    image: "/products/makkahbar.jpg",
    description:
      "Makkah is “the fountain head and cradle of Islam”. It’s Islam’s holiest city, as it is the birthplace of Prophet Muhmmad (PBUH) and the faith itself.",
  },
  {
    id: 7,
    name: "Moon Flower",
    price: "1,180.75",
    badge: { label: "New Arrival", variant: "gold" },
    image: "/products/MoonFlower.jpg",
    description:
      "Just like the moon, everything in life has its own cycle. The moon rises as the day ends for us and we begin our recovery from it",
  },
  {
    id: 8,
    name: "Love Tree",
    price: "24,950.00",
    image: "/products/Love-Tree.jpg",
    description:
      "Trees are used to represent life, wisdom, power, growth, and prosperity. While many believe that flowers are the only symbol that represent love",
  },
];
