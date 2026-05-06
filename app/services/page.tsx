"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import resources from "@/app/data/resources.json";

type Categoria = "Espana" | "Internacional";
type Filtro = "Todos" | Categoria;

type Resource = {
  nombre: string;
  descripcion: string;
  link: string;
  categoria: Categoria;
};

type ResourceCardProps = {
  nombre: string;
  descripcion: string;
  link: string;
  categoria: Categoria;
};

const filterOptions: Filtro[] = ["Todos", "Espana", "Internacional"];
const filterLabels: Record<Filtro, string> = {
  Todos: "Todos",
  Espana: "España",
  Internacional: "Internacional",
};

function ResourceCard({ nombre, descripcion, link, categoria }: ResourceCardProps) {
  const categoriaLabel = categoria === "Espana" ? "España" : categoria;
  const badgeClasses =
    categoria === "Espana"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-sky-200 bg-sky-50 text-sky-700";

  return (
    <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">{nombre}</h2>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeClasses}`}
        >
          {categoriaLabel}
        </span>
      </div>
      <p className="mb-4 text-sm leading-6 text-slate-600">{descripcion}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-600"
      >
        Ver recurso
      </a>
    </article>
  );
}

export default function ServicesPage() {
  const [filtroActivo, setFiltroActivo] = useState<Filtro>("Todos");

  const recursosFiltrados = useMemo(() => {
    if (filtroActivo === "Todos") {
      return resources as Resource[];
    }

    return (resources as Resource[]).filter(
      (resource) => resource.categoria === filtroActivo,
    );
  }, [filtroActivo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <nav className="mb-8 flex items-center gap-5 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link href="/adopt" className="hover:text-emerald-600">
            Adopt
          </Link>
          <Link href="/services" className="text-emerald-700">
            Services
          </Link>
          <Link href="/travel" className="hover:text-emerald-600">
            EU Travel
          </Link>
          <Link href="/directorio" className="hover:text-emerald-600">
            Directorio
          </Link>
        </nav>

        <section className="mb-6 rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-sm">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">Services</h1>
          <p className="text-slate-600">
            Recursos utiles para viajes y tramites de mascotas, filtrados por
            alcance nacional o internacional.
          </p>
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
              key={resource.nombre}
              nombre={resource.nombre}
              descripcion={resource.descripcion}
              link={resource.link}
              categoria={resource.categoria}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
