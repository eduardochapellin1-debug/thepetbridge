"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";

export type Locale = "es" | "en" | "fr";

type Messages = typeof es;

type I18nContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  messages: Messages;
};

const STORAGE_KEY = "tpb-locale";

const MESSAGES_BY_LOCALE: Record<Locale, Messages> = {
  es,
  en,
  fr,
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (
      savedLocale === "es" ||
      savedLocale === "en" ||
      savedLocale === "fr"
    ) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: MESSAGES_BY_LOCALE[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
