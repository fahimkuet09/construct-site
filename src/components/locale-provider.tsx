"use client";

import * as React from "react";
import { en, type TranslationKey } from "@/lib/i18n";

interface LocaleContextValue {
  t: (key: TranslationKey) => string;
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

const value: LocaleContextValue = {
  t: (key) => en[key] ?? key,
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
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
