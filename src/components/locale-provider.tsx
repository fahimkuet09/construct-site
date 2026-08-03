"use client";

import * as React from "react";
import { defaultLocale, type LanguageCode } from "@/lib/site";
import { dictionaries, localiseDigits, type TranslationKey } from "@/lib/i18n";

const STORAGE_KEY = "meghna.locale";
const CHANGE_EVENT = "meghna:locale-change";

/* ------------------------------------------------------------------ store */
/**
 * localStorage is an external store, so it is read through
 * `useSyncExternalStore` rather than mirrored into state via an effect.
 * That keeps the value correct across tabs and avoids a cascading render
 * on every mount.
 */

function isLocale(value: unknown): value is LanguageCode {
  return value === "en" || value === "bn";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): LanguageCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : defaultLocale;
  } catch {
    // Private browsing or blocked storage — fall back to the default.
    return defaultLocale;
  }
}

/** The server has no storage, so it always renders the default language. */
function getServerSnapshot(): LanguageCode {
  return defaultLocale;
}

function writeLocale(next: LanguageCode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore write failures; the in-memory value still updates below.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/* ---------------------------------------------------------------- context */

interface LocaleContextValue {
  locale: LanguageCode;
  setLocale: (next: LanguageCode) => void;
  t: (key: TranslationKey) => string;
  /** Converts Latin digits to Bangla numerals when bn is active. */
  n: (value: string | number) => string;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Screen readers and the browser's own translation prompt key off this.
  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = React.useMemo<LocaleContextValue>(() => {
    const dict = dictionaries[locale];
    return {
      locale,
      setLocale: writeLocale,
      t: (key) => dict[key] ?? dictionaries.en[key] ?? key,
      n: (v) => localiseDigits(String(v), locale),
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return ctx;
}

/** Convenience hook when only the translate function is needed. */
export function useT() {
  return useLocale().t;
}
