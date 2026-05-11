import { BLOG_POSTS } from '../../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: { slug: string } }) {
  // Buscamos el artículo en nuestra base de datos usando el slug de la URL
  const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];

  // Si el artículo no existe, enviamos al usuario a una página 404
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Botón para volver atrás */}
        <Link 
          href="/blog" 
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 mb-10 transition-colors"
        >
          ← Volver al listado del blog
        </Link>

        <article>
          {/* Cabecera del artículo */}
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
          </header>

          {/* Cuerpo del artículo con formato de lectura */}
          <div className="prose prose-emerald lg:prose-xl text-slate-700 leading-relaxed space-y-6">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pie de artículo - Útil para AdSense */}
          <div className="mt-16 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-sm text-emerald-800 font-medium">
              ¿Te ha sido útil esta información? Sigue explorando The Pet Bridge para más guías sobre viajes con mascotas en Europa.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}