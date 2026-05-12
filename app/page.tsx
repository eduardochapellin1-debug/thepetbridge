"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PawPrint, Plane, Stethoscope } from "lucide-react";
import { useI18n, type Locale } from "@/app/i18n/I18nProvider";

const cardKeys = ["adopt", "wellness", "travelLegal"] as const;
const cardIcons = {
  adopt: PawPrint,
  wellness: Stethoscope,
  travelLegal: Plane,
} as const;

export default function Home() {
  const { locale, setLocale, messages } = useI18n();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/directorio");
  };

  const localeOptions: Locale[] = ["es", "en", "fr"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <header className="mb-10 flex flex-col gap-4 rounded-2xl border border-sky-100 bg-white/85 p-5 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-sky-300 text-sm font-semibold text-slate-700">
              TPB
            </div>
            <p className="text-lg font-semibold">{messages.home.header.brand}</p>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-700">
            <Link href="/adopt" className="transition hover:text-emerald-600">
              {messages.home.header.adopt}
            </Link>
            <Link
              href="/services"
              className="transition hover:text-emerald-600"
            >
              {messages.home.header.services}
            </Link>
            <Link href="/travel" className="transition hover:text-emerald-600">
              {messages.home.header.euTravel}
            </Link>
            <Link
              href="/directorio"
              className="transition hover:text-emerald-600"
            >
              {messages.home.header.directory}
            </Link>
            <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
              <span className="text-[11px] uppercase tracking-wide">
                {messages.home.header.language}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-bold">
                {localeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLocale(option)}
                    className={`rounded px-1.5 py-0.5 transition ${
                      locale === option
                        ? "bg-emerald-600 text-white"
                        : "text-sky-700 hover:bg-sky-100"
                    }`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="space-y-10">
          <section className="flex min-h-28 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/80 px-4 py-5 text-center">
            <p className="text-sm font-semibold text-slate-700">
              {messages.home.partner.question}
            </p>
            <a
              href="mailto:tuemail@ejemplo.com?subject=Inter%C3%A9s%20en%20Partnership%20-%20The%20Pet%20Bridge"
              className="mt-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600"
            >
              {messages.home.partner.cta}
            </a>
          </section>

          <section className="rounded-3xl border border-emerald-100 bg-white/85 px-6 py-10 shadow-sm md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {messages.home.hero.eyebrow}
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {messages.home.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              {messages.home.hero.subtitle}
            </p>
            <form onSubmit={handleSearch} className="mt-6 w-full max-w-3xl">
              <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-2 shadow-md sm:flex-row">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={messages.home.search.placeholder}
                  className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 sm:min-w-28"
                >
                  {messages.home.search.button}
                </button>
              </div>
            </form>
          </section>

          <section className="rounded-3xl border border-sky-100 bg-white/90 px-6 py-10 shadow-sm md:px-10">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
              {messages.home.services.title}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1000&q=80"
                  alt={messages.home.services.items.insurance.imageAlt}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {messages.home.services.items.insurance.title}
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    {messages.home.services.items.insurance.description}
                  </p>
                  <Link
                    href="/directorio"
                    className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    {messages.home.services.items.insurance.button}
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
                  alt={messages.home.services.items.boarding.imageAlt}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {messages.home.services.items.boarding.title}
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    {messages.home.services.items.boarding.description}
                  </p>
                  <Link
                    href="/directorio"
                    className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    {messages.home.services.items.boarding.button}
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                  alt={messages.home.services.items.clinics.imageAlt}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {messages.home.services.items.clinics.title}
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    {messages.home.services.items.clinics.description}
                  </p>
                  <Link
                    href="/directorio"
                    className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    {messages.home.services.items.clinics.button}
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <section className="flex min-h-28 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/80 px-4 py-5 text-center">
            <p className="text-sm font-semibold text-slate-700">
              {messages.home.partner.question}
            </p>
            <a
              href="mailto:tuemail@ejemplo.com?subject=Inter%C3%A9s%20en%20Partnership%20-%20The%20Pet%20Bridge"
              className="mt-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600"
            >
              {messages.home.partner.cta}
            </a>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {cardKeys.map((cardKey) => {
              const Icon = cardIcons[cardKey];
              const isDirectoryCard = cardKey === "adopt" || cardKey === "wellness";

              const cardContent = (
                <>
                  <div className="mb-4 inline-flex rounded-full bg-emerald-50 p-3 text-emerald-700">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="mb-3 text-xl font-semibold text-slate-900">
                    {messages.home.featureCards[cardKey].title}
                  </h2>
                  <p className="text-sm leading-6 text-slate-600">
                    {messages.home.featureCards[cardKey].description}
                  </p>
                  {isDirectoryCard ? (
                    <p className="mt-4 text-sm font-semibold text-emerald-700">
                      {messages.home.featureCards.viewServices}
                    </p>
                  ) : null}
                </>
              );

              if (isDirectoryCard) {
                return (
                  <Link
                    key={cardKey}
                    href="/services"
                    className="block rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article
                  key={cardKey}
                  className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
                >
                  {cardContent}
                </article>
              );
            })}
          </section>

        </main>
      </div>
    </div>
  );
}
