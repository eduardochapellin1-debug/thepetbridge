export default function CookiesPage() {
  const lastUpdate = new Date().toLocaleDateString('es-ES');

  return (
    <main className="flex-1 bg-emerald-50/40 px-4 py-12 sm:px-6 lg:px-8 pt-24">
      <section className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
          Política de Cookies
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Última actualización: {lastUpdate}
        </p>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:text-emerald-600 space-y-6 text-slate-600">
          <div>
            <h2 className="text-xl font-semibold">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestro sitio web. Ayudan a que la web funcione correctamente y a personalizar su experiencia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Técnicas:</strong> Necesarias para el funcionamiento básico del sitio.</li>
              <li><strong>De Personalización:</strong> Permiten recordar sus preferencias.</li>
              <li><strong>De Terceros (Publicidad):</strong> Utilizamos servicios como <strong>Google AdSense</strong> para mostrar anuncios. Estos proveedores pueden usar cookies para mostrar anuncios basados en sus visitas previas.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Cómo gestionar las cookies</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 italic text-sm">
            Nota: Si bloquea el uso de cookies en su navegador, es posible que algunos servicios o funciones del sitio web no estén disponibles.
          </div>
        </div>
      </section>
    </main>
  );
}