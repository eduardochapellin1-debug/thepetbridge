"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ResourceCard from "@/app/components/ResourceCard";
import { useI18n } from "@/app/i18n/I18nProvider";

type Categoria = "spain" | "international";
type Filtro = "all" | Categoria;

type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
  category: Categoria;
  tag: string;
};

const filterOptions: Filtro[] = ["all", "spain", "international"];

export default function DirectorioClient() {
  const { messages } = useI18n();
  const [filtroActivo, setFiltroActivo] = useState<Filtro>("all");

  const resources = messages.directory.resources as Resource[];
  const filterLabels: Record<Filtro, string> = {
    all: messages.directory.filters.all,
    spain: messages.directory.filters.spain,
    international: messages.directory.filters.international,
  };

  const recursosFiltrados = useMemo(() => {
    if (filtroActivo === "all") {
      return resources;
    }

    return resources.filter((resource) => resource.category === filtroActivo);
  }, [filtroActivo, resources]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <nav className="mb-8 flex items-center gap-5 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600">
            {messages.home.header.brand}
          </Link>
          <Link href="/adopt" className="hover:text-emerald-600">
            {messages.home.header.adopt}
          </Link>
          <Link href="/services" className="hover:text-emerald-600">
            {messages.home.header.services}
          </Link>
          <Link href="/travel" className="hover:text-emerald-600">
            {messages.home.header.euTravel}
          </Link>
          <Link href="/directorio" className="text-emerald-700">
            {messages.home.header.directory}
          </Link>
        </nav>

        <section className="mb-6 rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-sm">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">{messages.directory.title}</h1>
          <p className="text-slate-600">{messages.directory.intro}</p>
        </section>

        <section className="mb-6 rounded-2xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            {messages.directory.seoTitle}
          </h2>
          <p className="leading-7 text-slate-600">{messages.directory.seoDescription}</p>
        </section>

        <section className="mb-6 flex flex-wrap gap-3">
          {filterOptions.map((filtro) => {
            const isActive = filtroActivo === filtro;
            return (
              <button
                key={filtro}
                type="button"
                onClick={() => setFiltroActivo(filtro)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-emerald-200 bg-emerald-100 text-emerald-800"
                    : "border-sky-200 bg-white text-slate-700 hover:bg-sky-50"
                }`}
              >
                {filterLabels[filtro]}
              </button>
            );
          })}
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {recursosFiltrados.map((resource) => (
            <ResourceCard
              key={resource.id}
              nombre={resource.title}
              descripcion={resource.description}
              link={resource.link}
              categoria={resource.category}
              categoriaLabel={resource.tag}
              ctaLabel={messages.directory.resourceCta}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
