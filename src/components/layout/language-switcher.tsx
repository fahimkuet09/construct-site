"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Globe } from "lucide-react";
import { languages, type LanguageCode } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
  const [current, setCurrent] = React.useState<LanguageCode>("en");
  const active = languages.find((l) => l.code === current) ?? languages[0];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label={`Change language — currently ${active.label}`}
          className={cn(
            "flex h-11 cursor-pointer items-center gap-1.5 rounded-full px-3 transition-colors",
            invert
              ? "text-white/80 hover:bg-white/12 hover:text-white"
              : "text-body hover:bg-primary-50 hover:text-primary",
          )}
        >
          <Globe className="size-[1.15rem]" strokeWidth={2.2} aria-hidden />
          <span className="font-heading text-[0.8125rem] font-bold tracking-wide uppercase">
            {active.code}
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={12}
          className="z-100 min-w-56 rounded-2xl border border-line bg-surface p-2 shadow-[var(--shadow-lift)]"
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onSelect={() => setCurrent(lang.code)}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 outline-none",
                "transition-colors data-[highlighted]:bg-primary-50",
              )}
            >
              <span className="flex flex-col">
                <span className="font-heading text-[0.875rem] font-bold text-heading">
                  {lang.label}
                </span>
                <span className="text-[0.75rem] text-muted">{lang.region}</span>
              </span>
              {lang.code === current ? (
                <Check className="size-4 shrink-0 text-primary" aria-hidden />
              ) : null}
            </DropdownMenu.Item>
          ))}
          <p className="mt-1 border-t border-line px-3 pt-2.5 pb-1 text-[0.6875rem] leading-snug text-muted">
            Demo switcher — localisation is not wired up in this build.
          </p>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
