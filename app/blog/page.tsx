import React from 'react';
import Link from 'next/link';

const POSTS = [
  { slug: "guia-viaje-europa-mascotas", title: "Guía definitiva para viajar por Europa", category: "GUÍA" },
  { slug: "como-obtener-pasaporte-europeo", title: "Pasaporte Europeo: Paso a Paso", category: "LEGAL" },
  { slug: "me-mejores-aerolineas-pet-friendly", title: "Las 5 Mejores Aerolíneas Pet-Friendly", category: "VIAJES" },
  { slug: "mejores-seguros-viaje-mascotas", title: "Seguros de Viaje: ¿Son obligatorios?", category: "BIENESTAR" },
  { slug: "requisitos-viajar-reino-unido-perro", title: "Viajar al Reino Unido tras el Brexit", category: "LEGAL" },
  { slug: "transporte-mascotas-tren-europa", title: "Guía para viajar en Tren por Europa", category: "VIAJES" },
  { slug: "mejores-hoteles-pet-friendly-madrid", title: "Top 5 Hoteles en Madrid", category: "HOTELES" },
  { slug: "botiquin-viaje-para-perros", title: "Botiquín esencial para tu perro", category: "SALUD" },
  { slug: "viajar-con-gatos-consejos", title: "Consejos para viajar con gatos", category: "GATOS" },
  { slug: "ley-bienestar-animal-viajeros", title: "Nueva Ley de Bienestar Animal", category: "LEGAL" }
];

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold text-emerald-600 mb-12 text-center text-left">Blog de The Pet Bridge</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <div key={post.slug} className="border border-emerald-100 p-8 rounded-2xl hover:shadow-lg transition-all bg-white flex flex-col justify-between border-l-4 border-l-emerald-500">
            <div>
              <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">{post.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-4 text-slate-800">{post.title}</h2>
            </div>
            <Link 
              href={`/blog/${post.slug}`} 
              className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-2"
            >
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}