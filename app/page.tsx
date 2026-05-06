"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const content = useMemo(() => contentByLocale[locale], [locale]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/directorio");
  };

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
            <Link
              href="/directorio"
              className="transition hover:text-emerald-600"
            >
              Directorio
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
            <form onSubmit={handleSearch} className="mt-6 w-full max-w-3xl">
              <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-2 shadow-md sm:flex-row">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="¿Qué servicio buscas? (ej: seguros, Madrid, clínicas...)"
                  className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 sm:min-w-28"
                >
                  Buscar
                </button>
              </div>
            </form>
          </section>

          <section className="rounded-3xl border border-sky-100 bg-white/90 px-6 py-10 shadow-sm md:px-10">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
              Todo lo que tu mascota necesita para viajar
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1000&q=80"
                  alt="Mascota viajando con seguridad"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    Seguros de Viaje
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    Proteccion total en Europa
                  </p>
                  <Link
                    href="/directorio"
                    className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    Comparar Seguros
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
                  alt="Perro feliz en un jardin"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    Residencias Caninas
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    Los mejores hoteles pet-friendly
                  </p>
                  <Link
                    href="/directorio"
                    className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    Buscar Hotel
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                  alt="Clinica veterinaria y estetoscopio"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    Clinicas 24h
                  </h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">
                    Asistencia veterinaria inmediata
                  </p>
                  <Link
                    href="/directorio"
                    className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                  >
                    Ver Clinicas
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <section className="flex min-h-28 items-center justify-center rounded-xl border-2 border-dashed border-sky-200 bg-sky-50/60 text-sm font-semibold tracking-wide text-sky-700">
            Partnership Space
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
                    {content.cards[cardKey].title}
                  </h2>
                  <p className="text-sm leading-6 text-slate-600">
                    {content.cards[cardKey].description}
                  </p>
                  {isDirectoryCard ? (
                    <p className="mt-4 text-sm font-semibold text-emerald-700">
                      Ver servicios
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
