"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav, legalLinks } from "@/data/navigation";
import { certifications } from "@/data/company";
import { site } from "@/lib/site";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";
import { FooterNavColumn } from "./footer-nav";
import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/social-icon";
import { useLocale } from "@/components/locale-provider";

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
  { label: "X", href: site.social.x, Icon: XIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YouTubeIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
];

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-white/70">
      <div aria-hidden className="blueprint-grid-dark absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute -top-40 -right-32 size-[34rem] rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="relative">
        {/* -------------------------------------------------- newsletter */}
        <div className="container-shell border-b border-white/10 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
            <div>
              <span className="eyebrow text-accent">
                <span aria-hidden className="h-px w-8 bg-accent/50" />
                {t("footer.briefing")}
              </span>
              <h2 className="mt-5 max-w-[16ch] text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white">
                {t("footer.briefingTitle")}
              </h2>
              <p className="mt-4 max-w-[52ch] text-[1rem] leading-relaxed text-white/60">
                Project case studies, method notes and engineering analysis from
                our delivery teams. No marketing, no sales follow-up.
              </p>
            </div>
            <div>
              <NewsletterForm />
              <p className="mt-3 text-[0.8125rem] text-white/45">
                We handle your details in line with our privacy notice.
                Unsubscribe in one click.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ nav columns */}
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_repeat(3,1fr)] lg:gap-10">
            <div className="max-w-sm">
              <Logo invert />
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-white/60">
                A Bangladeshi civil engineering and infrastructure contractor.
                Delivering river crossings, corridors, tunnels, ports and utilities
                across Bangladesh since {site.founded}.
              </p>

              <address className="mt-7 flex flex-col gap-3.5 not-italic">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="group flex items-start gap-3 text-[0.9375rem] transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-3 text-[0.9375rem] transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  {site.email}
                </a>
                <span className="flex items-start gap-3 text-[0.9375rem]">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.locality} {site.address.postalCode}
                    <br />
                    {site.address.countryName}
                  </span>
                </span>
              </address>
            </div>

            {footerNav.map((column) => (
              <FooterNavColumn key={column.heading} column={column} />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------- certifications */}
        <div className="container-shell border-t border-white/10 py-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-white/45 uppercase">
              {t("footer.certified")}
            </p>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.id}
                  className="flex items-center gap-2.5"
                  title={`${cert.standard} — ${cert.name}`}
                >
                  <Image
                    src={cert.logo}
                    alt=""
                    width={34}
                    height={34}
                    className="opacity-55 brightness-0 invert"
                  />
                  <span className="font-heading text-[0.8125rem] font-bold text-white/55">
                    {cert.standard}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------ legal */}
        <div className="container-shell border-t border-white/10 py-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[0.8125rem] text-white/45">
              © {new Date().getFullYear()} {site.legalName}. {t("footer.rights")}
            </p>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.8125rem] text-white/45 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${site.name} on ${label}`}
                    className="flex size-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary-950"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
