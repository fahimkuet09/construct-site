export const site = {
  name: "Meridian Construct",
  legalName: "Meridian Construct International PLC",
  shortName: "Meridian",
  tagline: "Engineering the Ground Beneath Progress",
  description:
    "Meridian Construct is an international civil engineering and infrastructure contractor delivering bridges, highways, tunnels, marine works and industrial facilities across 24 countries.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.meridianconstruct.com",
  locale: "en_GB",
  founded: "1974",
  email: "enquiries@meridianconstruct.com",
  careersEmail: "careers@meridianconstruct.com",
  phone: "+44 20 7946 0318",
  phoneHref: "+442079460318",
  address: {
    street: "Meridian House, 14 Blackfriars Road",
    locality: "London",
    region: "England",
    postalCode: "SE1 8NW",
    country: "GB",
    countryName: "United Kingdom",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/meridian-construct",
    x: "https://x.com/meridianconstruct",
    youtube: "https://www.youtube.com/@meridianconstruct",
    instagram: "https://www.instagram.com/meridianconstruct",
  },
  ogImage: "/images/hero/og-default.svg",
} as const;

export const languages = [
  { code: "en", label: "English", region: "United Kingdom" },
  { code: "de", label: "Deutsch", region: "Deutschland" },
  { code: "fr", label: "Français", region: "France" },
  { code: "es", label: "Español", region: "España" },
  { code: "ar", label: "العربية", region: "الإمارات" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];
