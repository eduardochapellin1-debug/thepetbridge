import { BLOG_POSTS } from '../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: { slug: string } }) {
  // Verificamos si el slug existe en nuestra base de datos
  const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];

  // Si no existe, lanzamos el 404 de Next.js
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            {post.title}
          </h1>
          <div className="prose prose-emerald lg:prose-xl text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">{post.content}</p>
          </div>
        </article>
      </div>
    </main>
  );
}