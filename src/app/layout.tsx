import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/icons/logo-mark.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0B1051",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only rounded-b-xl bg-primary px-6 py-3 font-heading text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-0 focus:left-6 focus:z-200"
        >
          Skip to main content
        </a>
        <LocaleProvider>
          <SmoothScroll />
          <ScrollProgress />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
