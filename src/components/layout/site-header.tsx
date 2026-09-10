"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Logo } from "./logo";
import { SiteSearch } from "./site-search";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/locale-provider";
import type { TranslationKey } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLocale();
  const tk = (key: string | undefined, fallback: string) =>
    key ? t(key as TranslationKey) : fallback;
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every route opens on a dark hero band, so the bar sits transparent
  // until the user scrolls or opens a mega menu panel.
  const solid = scrolled || menuOpen;
  const invert = !solid;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-90 transition-all duration-400 ease-[var(--ease-out-quint)]",
        solid
          ? "border-b border-line bg-surface/95 backdrop-blur-xl shadow-[0_1px_0_0_rgb(15_23_42/0.04),0_12px_32px_-24px_rgb(15_23_42/0.28)]"
          : "border-b border-white/10 bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-shell flex items-center justify-between gap-4 transition-all duration-400",
          solid ? "h-19" : "h-22",
        )}
      >
        <Logo invert={invert} priority />

        {/* ------------------------------------------------ desktop nav */}
        <NavigationMenu.Root
          delayDuration={80}
          skipDelayDuration={240}
          onValueChange={(v) => setMenuOpen(Boolean(v))}
          className="relative hidden lg:flex"
        >
          <NavigationMenu.List className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActive(item.href);

              if (!item.columns) {
                return (
                  <NavigationMenu.Item key={item.label}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative flex h-11 items-center rounded-full px-4 font-heading text-[0.9375rem] font-bold transition-colors",
                          invert
                            ? "text-white/85 hover:bg-white/12 hover:text-white"
                            : "text-body hover:bg-primary-50 hover:text-primary",
                          active && (invert ? "text-white" : "text-primary"),
                        )}
                      >
                        {tk(item.labelKey, item.label)}
                        {active ? (
                          <span
                            aria-hidden
                            className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                          />
                        ) : null}
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                );
              }

              return (
                <NavigationMenu.Item key={item.label}>
                  <NavigationMenu.Trigger
                    className={cn(
                      "group relative flex h-11 cursor-pointer items-center gap-1.5 rounded-full px-4",
                      "font-heading text-[0.9375rem] font-bold transition-colors",
                      invert
                        ? "text-white/85 hover:bg-white/12 hover:text-white data-[state=open]:bg-white/12 data-[state=open]:text-white"
                        : "text-body hover:bg-primary-50 hover:text-primary data-[state=open]:bg-primary-50 data-[state=open]:text-primary",
                      active && (invert ? "text-white" : "text-primary"),
                    )}
                  >
                    {tk(item.labelKey, item.label)}
                    <ChevronDown
                      aria-hidden
                      className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                    {active ? (
                      <span
                        aria-hidden
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      />
                    ) : null}
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content
                    className={cn(
                      "absolute top-0 left-0 w-full",
                      "data-[motion=from-start]:animate-[fade-in_.2s_ease-out]",
                      "data-[motion=from-end]:animate-[fade-in_.2s_ease-out]",
                    )}
                  >
                    <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1fr_0.9fr]">
                      {item.columns.map((column) => (
                        <div key={column.heading}>
                          <p className="mb-4 font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-muted uppercase">
                            {tk(column.headingKey, column.heading)}
                          </p>
                          <ul className="flex flex-col gap-0.5">
                            {column.links.map((link) => (
                              <li key={link.href + link.label}>
                                <NavigationMenu.Link asChild>
                                  <Link
                                    href={link.href}
                                    className="group/link block rounded-xl px-3.5 py-3 transition-colors hover:bg-background"
                                  >
                                    <span className="flex items-center gap-1.5 font-heading text-[0.9375rem] font-bold text-heading transition-colors group-hover/link:text-primary">
                                      {link.label}
                                      <ArrowUpRight
                                        aria-hidden
                                        className="size-3.5 -translate-x-1 opacity-0 transition-all duration-250 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                                      />
                                    </span>
                                    {link.description ? (
                                      <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">
                                        {link.description}
                                      </span>
                                    ) : null}
                                  </Link>
                                </NavigationMenu.Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {item.featured ? (
                        <NavigationMenu.Link asChild>
                          <Link
                            href={item.featured.href}
                            className="group/feat relative flex min-h-64 flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-6"
                          >
                            <Image
                              src={item.featured.image}
                              alt=""
                              fill
                              sizes="360px"
                              className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover/feat:scale-105"
                            />
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-gradient-to-t from-primary-950/92 via-primary-950/45 to-primary-950/10"
                            />
                            <span className="relative">
                              <span className="font-heading text-[0.6875rem] font-bold tracking-[0.16em] text-accent uppercase">
                                {item.featured.eyebrow}
                              </span>
                              <span className="mt-2 block font-heading text-[1.25rem] leading-tight font-bold text-white">
                                {item.featured.title}
                              </span>
                              <span className="mt-2 block text-[0.8125rem] leading-snug text-white/70">
                                {item.featured.description}
                              </span>
                              <span className="mt-4 flex items-center gap-1.5 font-heading text-[0.8125rem] font-bold text-white">
                                Explore
                                <ArrowUpRight
                                  aria-hidden
                                  className="size-3.5 transition-transform duration-300 group-hover/feat:translate-x-0.5 group-hover/feat:-translate-y-0.5"
                                />
                              </span>
                            </span>
                          </Link>
                        </NavigationMenu.Link>
                      ) : null}
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>

          {/* Panel viewport — anchored under the bar, spans the shell */}
          <div className="absolute top-full left-1/2 flex w-screen max-w-[76rem] -translate-x-1/2 justify-center pt-3">
            <NavigationMenu.Viewport
              className={cn(
                "relative w-full origin-top overflow-hidden rounded-[var(--radius-card)]",
                "border border-line bg-surface shadow-[var(--shadow-deep)]",
                "h-[var(--radix-navigation-menu-viewport-height)]",
                "transition-[height] duration-300 ease-[var(--ease-out-quint)]",
                "data-[state=open]:animate-[fade-in_.22s_ease-out]",
              )}
            />
          </div>
        </NavigationMenu.Root>

        {/* ---------------------------------------------------- actions */}
        <div className="flex items-center gap-1 md:gap-1.5">
          <SiteSearch invert={invert} />
          <div className="hidden md:block">
            <LanguageSwitcher invert={invert} />
          </div>
          <Button
            asChild
            variant={invert ? "light" : "primary"}
            size="sm"
            className="ml-1 hidden md:inline-flex"
          >
            <Link href="/contact">
              {t("nav.startProject")}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Button>
          <MobileNav invert={invert} />
        </div>
      </div>
    </header>
  );
}
