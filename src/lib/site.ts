export const site = {
  name: "Meghna Construct",
  nameBn: "মেঘনা কনস্ট্রাক্ট",
  legalName: "Meghna Construct Limited",
  shortName: "Meghna",
  tagline: "Engineering the Ground Beneath Bangladesh",
  taglineBn: "বাংলাদেশের ভিত গড়ছি প্রকৌশলে",
  description:
    "Meghna Construct is a Bangladeshi civil engineering and infrastructure contractor delivering river crossings, expressways, metro tunnels, deep-sea terminals and power infrastructure across all 64 districts.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.meghnaconstruct.com.bd",
  locale: "en_BD",
  founded: "1974",
  email: "enquiries@meghnaconstruct.com.bd",
  careersEmail: "careers@meghnaconstruct.com.bd",
  phone: "+880 2 5566 8100",
  phoneHref: "+880255668100",
  address: {
    street: "Meghna House, Plot 42, Road 11, Banani",
    locality: "Dhaka",
    region: "Dhaka Division",
    postalCode: "1213",
    country: "BD",
    countryName: "Bangladesh",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/meghna-construct",
    x: "https://x.com/meghnaconstruct",
    youtube: "https://www.youtube.com/@meghnaconstruct",
    facebook: "https://www.facebook.com/meghnaconstruct",
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
