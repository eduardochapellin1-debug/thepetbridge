export default function PostPage({ params }: { params: { slug: string } }) {
    // Aquí es donde Cursor te ayudará a escribir el contenido largo de cada post
    return (
      <main className="max-w-4xl mx-auto py-20 px-6 pt-24">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-600 capitalize">
            {params.slug.replace(/-/g, ' ')}
          </h1>
          <div className="mt-8 text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-slate-500 italic">
              Contenido en desarrollo para: {params.slug}
            </p>
            <p>
              Aquí es donde incluiremos la información detallada sobre este tema para cumplir con los requisitos de Google AdSense.
            </p>
            {/* Aquí pegaremos el texto largo que generaremos con IA */}
          </div>
        </article>
      </main>
    );
  }