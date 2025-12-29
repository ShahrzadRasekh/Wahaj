export const en = {
  common: {
    home: "Home",
    bullion: "Bullion",
    gifts: "Gift Collections",
    about: "About",
    contact: "Contact",
    favorites: "Favorites",
  },

  home: {
    categories: "Categories",
    featured: "Featured Collection", // kept for backward compatibility if used elsewhere
    promo: "Services",
    worth: "Worth Your While",
    latest: "Latest News",
    explore: "Explore",
    ctaBullion: "Bullion",
    ctaGifts: "Gift Collections",
  },

  // NEW: used by USPSection.tsx
  usp: {
    fastDelivery: "FAST DELIVERY",
    fastDeliveryDesc:
      "Enjoy fast delivery on all orders. Receive your gold bars and gift items quickly and securely.",

    secureOrdering: "SECURE ORDERING",
    secureOrderingDesc:
      "Shop with confidence. We use modern encryption and secure checkout to protect your details.",

    certifiedProducts: "CERTIFIED PRODUCTS",
    certifiedProductsDesc:
      "All items are verified for authenticity and quality, so you can buy with confidence.",

    satisfaction: "100% SATISFACTION",
    satisfactionDesc:
      "We stand behind every order with responsive support and a smooth experience.",
  },

  // NEW: used by FeaturedSection.tsx (t.featured.title)
  featured: {
    title: "Featured Collection",
  },
} as const;
