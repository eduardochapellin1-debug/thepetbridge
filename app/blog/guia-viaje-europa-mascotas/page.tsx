import React from 'react';
import Link from 'next/link';

export default function PostViajeEuropa() {
  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      <header className="mb-12 text-center">
        <Link href="/blog" className="text-emerald-600 hover:underline mb-4 inline-block">← Volver al Blog</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Guía definitiva para viajar por Europa con tu mascota en 2024
        </h1>
        <p className="text-xl text-gray-500 italic">Todo lo que necesitas saber sobre pasaportes, vacunas y normativa UE.</p>
      </header>

      <div className="prose prose-emerald lg:prose-xl text-gray-700 leading-relaxed">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. El Pasaporte Europeo para Animales de Compañía</h2>
          <p className="mb-4">
            Este es el documento más importante. Es un documento estándar de la UE que es esencial para viajar entre países miembros. 
            Contiene la descripción de tu mascota, los detalles del microchip y el historial de vacunación contra la rabia.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 font-medium text-emerald-800">
            Nota: Este pasaporte solo lo puede emitir un veterinario autorizado en la UE.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Requisitos de Vacunación</h2>
          <p className="mb-4">
            La vacuna contra la <strong>rabia</strong> es obligatoria. Debes asegurarte de que tu mascota tenga al menos 12 semanas antes de ser vacunada y que la vacuna se administre después de la implantación del microchip.
          </p>
        </section>

        {/* BLOQUE DE MONETIZACIÓN (Clave para AdSense) */}
        <section className="my-12 p-8 bg-gray-900 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Tu mascota está protegida?</h3>
          <p className="mb-6 text-gray-300">Los imprevistos en el extranjero pueden ser muy caros. Compara los mejores seguros antes de salir.</p>
          <Link href="/directorio" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-full transition">
            Ver Seguros Recomendados
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Transporte y Seguridad</h2>
          <p>
            Ya sea en avión, tren o coche, cada compañía tiene sus reglas. En coche, es obligatorio el uso de arneses de seguridad o transportines homologados para evitar multas y garantizar la seguridad de todos.
          </p>
        </section>
      </div>
    </article>
  );
}