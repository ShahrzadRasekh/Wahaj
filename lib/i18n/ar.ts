export const ar = {
  common: {
    home: "الرئيسية",
    bullion: "السبائك",
    gifts: "مجموعات الهدايا",
    about: "من نحن",
    contact: "تواصل معنا",
    favorites: "المفضلة",
  },

  home: {
    categories: "الفئات",
    featured: "المجموعة المميزة", // kept for backward compatibility if used elsewhere
    promo: "الخدمات",
    worth: "مختارات تستحق",
    latest: "آخر الأخبار",
    explore: "استكشف",
    ctaBullion: "السبائك",
    ctaGifts: "مجموعات الهدايا",
  },

  // NEW: used by USPSection.tsx
  usp: {
    fastDelivery: "توصيل سريع",
    fastDeliveryDesc:
      "استمتع بتوصيل سريع لجميع الطلبات. استلم سبائك الذهب والهدايا بسرعة وأمان.",

    secureOrdering: "طلب آمن",
    secureOrderingDesc:
      "تسوّق بثقة. نستخدم تشفيراً حديثاً ووسائل دفع آمنة لحماية بياناتك.",

    certifiedProducts: "منتجات معتمدة",
    certifiedProductsDesc:
      "جميع المنتجات موثّقة من حيث الأصالة والجودة لتشتري بثقة.",

    satisfaction: "رضا مضمون 100%",
    satisfactionDesc:
      "نضمن تجربة سلسة مع دعم سريع وخدمة موثوقة لكل طلب.",
  },

  // NEW: used by FeaturedSection.tsx (t.featured.title)
  featured: {
    title: "المجموعة المميزة",
  },
} as const;
