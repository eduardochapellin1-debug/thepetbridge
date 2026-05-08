import React from 'react';
import Link from 'next/link';

export default function PostSeguros() {
  return (
    <article className="max-w-4xl mx-auto py-20 px-6 text-left">
      <header className="mb-12 text-center">
        <Link href="/blog" className="text-emerald-600 hover:underline mb-4 inline-block">← Volver al Blog</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Los 3 Mejores Seguros de Viaje para Mascotas en 2024
        </h1>
        <p className="text-xl text-gray-500 italic">Comparamos coberturas, precios y servicios de asistencia internacional.</p>
      </header>

      <div className="prose prose-emerald lg:prose-xl text-gray-700 leading-relaxed">
        <p className="mb-8">
          Viajar con tu mascota por Europa es una experiencia increíble, pero un pequeño problema de salud en el extranjero puede costar miles de euros. Aquí analizamos las mejores opciones para viajar tranquilo.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Barkibu: La opción más completa</h2>
        <p className="mb-6">
          Barkibu se ha consolidado como el líder gracias a su cobertura total en veterinarios de toda la UE y su facilidad de uso a través de la App.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. IATI Escapadas: Ideal para viajes cortos</h2>
        <p className="mb-6">
          Si vas a hacer una escapada de fin de semana, IATI ofrece precios muy competitivos que cubren tanto al dueño como a la mascota.
        </p>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 my-10 rounded-r-xl">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">Consejo de Experto 🐾</h3>
          <p className="text-emerald-800">
            Asegúrate siempre de que el seguro incluya <strong>Responsabilidad Civil</strong>, especialmente si viajas a países como Alemania donde es obligatoria para todos los perros.
          </p>
          <Link href="/directorio" className="mt-4 inline-block font-bold text-emerald-600 hover:text-emerald-700">
            Ver todas las ofertas en el Directorio →
          </Link>
        </div>
      </div>
    </article>
  );
}