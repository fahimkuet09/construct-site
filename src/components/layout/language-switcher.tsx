"use client";

import { Languages } from "lucide-react";
import { languages, type LanguageCode } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

/**
 * Two languages only — English (default) and Bangla — so this is a segmented
 * toggle rather than a dropdown. Both options stay visible, which makes the
 * alternative discoverable without a click.
 */
export function LanguageSwitcher({ invert = false }: { invert?: boolean }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t("lang.change")}
      className={cn(
        "flex items-center gap-0.5 rounded-full border p-0.5 transition-colors",
        invert ? "border-white/20 bg-white/8" : "border-line bg-background",
      )}
    >
      <Languages
        aria-hidden
        className={cn(
          "ml-2 size-4 shrink-0",
          invert ? "text-white/60" : "text-muted",
        )}
      />
      {languages.map((lang) => {
        const active = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            lang={lang.code}
            aria-pressed={active}
            onClick={() => setLocale(lang.code as LanguageCode)}
            title={`${t("lang.change")} — ${lang.nativeLabel}`}
            className={cn(
              "cursor-pointer rounded-full px-2.5 py-1.5 font-heading text-[0.8125rem] font-bold transition-all duration-300",
              lang.code === "bn" && "font-bangla",
              active
                ? invert
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
                : invert
                  ? "text-white/65 hover:text-white"
                  : "text-muted hover:text-heading",
            )}
          >
            {lang.code === "bn" ? lang.nativeLabel : "EN"}
          </button>
        );
      })}
    </div>
  );
}
