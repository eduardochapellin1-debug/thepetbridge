import React from 'react';
import Link from 'next/link';

// Esta es la lista de artículos. Para añadir más, solo copias un bloque {} y lo pegas debajo.
const POSTS = [
  {
    title: "Guía definitiva para viajar por Europa con tu mascota",
    description: "Todo lo que necesitas saber sobre pasaportes, vacunas y normativa de la UE para viajar sin problemas este 2024.",
    category: "GUÍA DE VIAJE",
    slug: "guia-viaje-europa-mascotas"
  },
  {
    title: "Pasaporte Europeo para Mascotas: Cómo obtenerlo paso a paso",
    description: "Evita problemas en la frontera conociendo los requisitos exactos de los veterinarios colegiados en la Unión Europea.",
    category: "LEGAL",
    slug: "como-obtener-pasaporte-europeo"
  },
  {
    title: "Las 5 mejores aerolíneas Pet-Friendly en Europa",
    description: "Comparamos pesos máximos, precios de cabina y condiciones de transporte para que elijas la mejor opción.",
    category: "VIAJES",
    slug: "mejores-aerolineas-pet-friendly"
  },
  {
    title: "Seguros de viaje para mascotas: ¿Son obligatorios?",
    description: "Analizamos la nueva Ley de Bienestar Animal y qué coberturas son realmente necesarias para cruzar fronteras.",
    category: "BIENESTAR",
    slug: "mejores-seguros-viaje-mascotas"
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 pt-24">
      <h1 className="text-4xl font-bold text-emerald-600 mb-10 text-center">Blog de The Pet Bridge</h1>
      
      {/* El diseño se ajusta solo: 1 columna en móvil, 2 en tablet, 3 en PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <div key={post.slug} className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-shadow bg-white text-left flex flex-col justify-between">
            <div>
              <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">{post.category}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-800 leading-tight">{post.title}</h2>
              <p className="text-gray-600 mb-6 text-left line-clamp-3">{post.description}</p>
            </div>
            <Link 
              href={`/blog/${post.slug}`} 
              className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-center hover:bg-emerald-700 transition"
            >
              Leer artículo completo →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}