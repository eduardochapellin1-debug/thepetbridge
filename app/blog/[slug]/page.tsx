import { BLOG_POSTS } from '../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Hacemos la función asíncrona (async) para que espere a los params
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Esperamos a que los params lleguen
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Buscamos el post
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 mb-10 transition-colors"
        >
          ← Volver al blog
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 text-left">
              {post.title}
            </h1>
            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
          </header>

          <div className="prose prose-emerald lg:prose-xl text-slate-700 leading-relaxed text-left">
            <p className="text-lg whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}