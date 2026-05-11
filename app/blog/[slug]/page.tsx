import { BLOG_POSTS } from '../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 mb-12 transition-all hover:-translate-x-1"
        >
          ← Volver al blog
        </Link>

        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100">
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>
            <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
          </header>

          <div className="prose prose-emerald prose-lg max-w-none text-slate-700 leading-relaxed">
            {/* El whitespace-pre-line respeta los saltos de línea que pongas en el archivo de texto */}
            <p className="whitespace-pre-line text-lg md:text-xl">
              {post.content}
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              ¿Te ha gustado? Comparte este artículo de <strong>The Pet Bridge</strong>.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}