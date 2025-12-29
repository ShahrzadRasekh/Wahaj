// lib/data/bullionCatalogueContent.ts

export type BrandSlug = "pamp" | "valcambi" | "aletihad" | "sam";

export type CatalogueBrand = {
  id: number;
  slug: BrandSlug;
  name: string;
  description: string;
  image: string;
};

export const catalogueBrands: CatalogueBrand[] = [
  {
    id: 1,
    slug: "pamp",
    name: "PAMP",
    description:
      "PAMP is a renowned precious metals refiner based in Switzerland, known for its high-quality gold bars. PAMP gold bars are highly trusted by investors and collectors due to the refinery's strong reputation for quality and precision. Their bars are recognized and accepted globally, making them a popular choice in the precious metals market.",
    image: "/catalog/pamp-bar.jpg",
  },
  {
    id: 2,
    slug: "valcambi",
    name: "Valcambi Suisse",
    description:
      "Valcambi Suisse is a highly regarded investment piece known for its purity and quality. These gold bars are trusted by investors and collectors due to Valcambi's reputation for producing high-quality and accurately weighted bars. They are also recognized globally, making them easy to trade and liquidate.",
    image: "/catalog/valcambi-bar.jpg",
  },
  {
    id: 3,
    slug: "aletihad",
    name: "Al Etihad",
    description:
      "Al Etihad Gold is one of the UAE's leading gold refiners, offering bars that combine regional heritage with international standards. Their products are preferred by investors who value both local presence and global recognition.",
    image: "/catalog/aletihad-bar.jpg",
  },
  {
    id: 4,
    slug: "sam",
    name: "SAM Precious Metals",
    description:
      "SAM Precious Metals produces minted and cast gold bars with a focus on innovation and trust. Their brand is known for detailed design, secure packaging and reliable quality that appeals to both investors and jewellers.",
    image: "/catalog/sam-bar.jpg",
  },
];
