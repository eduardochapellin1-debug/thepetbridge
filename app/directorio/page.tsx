"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ResourceCard from "@/app/components/ResourceCard";
import resources from "@/app/data/resources.json";

type Categoria = "Espana" | "Internacional";
type Filtro = "Todos" | Categoria;

type Resource = {
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

export default function DirectorioPage() {
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
          <Link href="/services" className="hover:text-emerald-600">
            Services
          </Link>
          <Link href="/travel" className="hover:text-emerald-600">
            EU Travel
          </Link>
          <Link href="/directorio" className="text-emerald-700">
            Directorio
          </Link>
        </nav>

        <section className="mb-6 rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-sm">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">Directorio</h1>
          <p className="text-slate-600">
            Recursos utiles para viajes y tramites de mascotas, filtrados por
            alcance nacional o internacional.
          </p>
        </section>

        <section className="mb-6 rounded-2xl border border-sky-100 bg-sky-50/40 p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Servicios y Cuidados para Mascotas en Espana e Internacional
          </h2>
          <p className="leading-7 text-slate-600">
            En The Pet Bridge, te ayudamos a encontrar los mejores recursos para
            tu companero. Desde <strong>residencias caninas en Madrid y Barcelona</strong>{" "}
            hasta los <strong>seguros de viaje para mascotas</strong> mas fiables
            de <strong>2026</strong>. Nuestro directorio curado incluye{" "}
            <strong>hospitales veterinarios 24h</strong> y{" "}
            <strong>servicios de cuidadores de confianza</strong> para que viajar
            por Europa con tu perro o gato sea sencillo y seguro.
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
