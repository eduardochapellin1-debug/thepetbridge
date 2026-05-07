export default function CookiesPage() {
  return (
    <main className="flex-1 bg-emerald-50/40 px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
          Politica de Cookies
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Ultima actualizacion: [DD/MM/AAAA]
        </p>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:text-emerald-600">
          <h2>1. Que son las cookies</h2>
          <p>
            Las cookies son pequenos archivos de texto que se almacenan en el
            dispositivo del usuario cuando visita una pagina web. Permiten
            recordar informacion sobre la navegacion para mejorar la experiencia.
          </p>

          <h2>2. Tipos de cookies utilizadas</h2>
          <p>
            Este sitio puede utilizar cookies tecnicas (necesarias para el
            funcionamiento), de analitica (medicion y estadisticas) y de terceros
            (por ejemplo, plataformas de afiliacion o publicidad).
          </p>

          <h2>3. Finalidad</h2>
          <p>
            Usamos cookies para garantizar el correcto funcionamiento del sitio,
            analizar el trafico, personalizar contenidos y medir el rendimiento
            de nuestras recomendaciones y enlaces de afiliado.
          </p>

          <h2>4. Gestion y desactivacion</h2>
          <p>
            El usuario puede configurar o rechazar el uso de cookies a traves de
            su navegador o del panel de configuracion de cookies del sitio, cuando
            este disponible. La desactivacion de algunas cookies puede afectar al
            funcionamiento de ciertas funcionalidades.
          </p>

          <h2>5. Cookies de terceros</h2>
          <p>
            Algunos servicios de terceros pueden instalar cookies en el
            dispositivo del usuario. Recomendamos revisar sus politicas para
            obtener informacion detallada sobre su uso y finalidad.
          </p>

          <h2>6. Actualizaciones de esta politica</h2>
          <p>
            Esta politica de cookies puede actualizarse para adaptarse a cambios
            normativos o tecnicos. Se recomienda revisarla periodicamente.
          </p>
        </div>
      </section>
    </main>
  );
}
