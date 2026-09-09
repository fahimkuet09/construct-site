export const site = {
  name: "Universal Structural Steel",
  nameBn: "ইউনিভার্সাল স্ট্রাকচারাল স্টিল",
  legalName: "Universal Structural Steel Ltd.",
  shortName: "USS",
  tagline: "Concept to Construction",
  taglineBn: "ধারণা থেকে নির্মাণ",
  description:
    "Universal Structural Steel Ltd. designs, fabricates and erects pre-engineered steel buildings across Bangladesh — industrial, commercial, residential and agro-based structures, delivered from measurement to handover under one accountable team.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.universalsteelbd.com",
  locale: "en_BD",
  founded: "2017",
  email: "info@universalsteelbd.com",
  careersEmail: "careers@universalsteelbd.com",
  phone: "+880 1729-298919",
  phoneHref: "+8801729298919",
  phoneSecondary: "+880 1537-528399",
  phoneSecondaryHref: "+8801537528399",
  address: {
    street: "House 16/6, 2nd Floor, Block B, Babor Road",
    locality: "Mohammadpur, Dhaka",
    region: "Dhaka Division",
    postalCode: "1207",
    country: "BD",
    countryName: "Bangladesh",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/universal-structural-steel",
    x: "https://x.com/universalsteelbd",
    youtube: "https://www.youtube.com/@universalsteelbd",
    facebook: "https://www.facebook.com/universalsteelbd",
  },
  ogImage: "/images/hero/og-default.svg",
} as const;

/**
 * English is the default. Bangla is the only alternate — the brief calls for
 * exactly these two, so the switcher is a toggle rather than a long list.
 */
export const languages = [
  { code: "en", label: "English", nativeLabel: "English", region: "Bangladesh" },
  { code: "bn", label: "Bangla", nativeLabel: "বাংলা", region: "বাংলাদেশ" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const defaultLocale: LanguageCode = "en";
