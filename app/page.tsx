"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PawPrint, Plane, Stethoscope } from "lucide-react";
import { contentByLocale, type Locale } from "./content";

const cardKeys = ["adopt", "wellness", "travelLegal"] as const;
const cardIcons = {
  adopt: PawPrint,
  wellness: Stethoscope,
  travelLegal: Plane,
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => contentByLocale[locale], [locale]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <header className="mb-10 flex flex-col gap-4 rounded-2xl border border-sky-100 bg-white/85 p-5 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-sky-300 text-sm font-semibold text-slate-700">
              TPB
            </div>
            <p className="text-lg font-semibold">The Pet Bridge</p>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-700">
            <Link href="/adopt" className="transition hover:text-emerald-600">
              {content.nav.adopt}
            </Link>
            <Link
              href="/services"
              className="transition hover:text-emerald-600"
            >
              {content.nav.services}
            </Link>
            <Link href="/travel" className="transition hover:text-emerald-600">
              {content.nav.euTravel}
            </Link>
            <button
              type="button"
              onClick={() => setLocale((prev) => (prev === "en" ? "es" : "en"))}
              className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold tracking-wide text-sky-700 transition hover:bg-sky-100"
            >
              {content.languageButton}
            </button>
          </nav>
        </header>

        <main className="space-y-10">
          <section className="flex min-h-28 items-center justify-center rounded-xl border-2 border-dashed border-sky-200 bg-sky-50/60 text-sm font-semibold tracking-wide text-sky-700">
            Partnership Space
          </section>

          <section className="rounded-3xl border border-emerald-100 bg-white/85 px-6 py-10 shadow-sm md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {content.hero.eyebrow}
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {content.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              {content.hero.subtitle}
            </p>
          </section>

          <section className="flex min-h-28 items-center justify-center rounded-xl border-2 border-dashed border-sky-200 bg-sky-50/60 text-sm font-semibold tracking-wide text-sky-700">
            Partnership Space
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {cardKeys.map((cardKey) => {
              const Icon = cardIcons[cardKey];
              return (
                <article
                  key={cardKey}
                  className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-full bg-emerald-50 p-3 text-emerald-700">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold text-slate-900">
                    {content.cards[cardKey].title}
                  </h2>
                  <p className="text-sm leading-6 text-slate-600">
                    {content.cards[cardKey].description}
                  </p>
                </article>
              );
            })}
          </section>

        </main>

        <footer className="mt-12 space-y-6 border-t border-sky-100 pt-6 text-center text-sm text-slate-500">
          <div className="flex min-h-24 items-center justify-center rounded-xl border-2 border-dashed border-sky-200 bg-sky-50/60 text-sm font-semibold tracking-wide text-sky-700">
            Partnership Space
          </div>
          <p>{content.footer}</p>
        </footer>
      </div>
    </div>
  );
}
