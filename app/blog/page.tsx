import React from 'react';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-emerald-600 mb-10 text-center">Blog de The Pet Bridge</h1>
      <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
        <div className="border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-shadow bg-white text-left">
          <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">Guía de Viaje</span>
          <h2 className="text-2xl font-bold mt-2 mb-4 text-gray-800 text-left">Guía definitiva para viajar por Europa con tu mascota</h2>
          <p className="text-gray-600 mb-6 text-left">Todo lo que necesitas saber sobre pasaportes, vacunas y normativa de la UE para viajar sin problemas este 2024.</p>
          <Link href="/blog/guia-viaje-europa-mascotas" className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition">
            Leer artículo completo →
          </Link>
        </div>
      </div>
    </div>
  );
}