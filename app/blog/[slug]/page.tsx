import { BLOG_POSTS } from '../../../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 mb-10 transition-colors"
        >
          ← Volver al listado del blog
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
          </header>

          <div className="prose prose-emerald lg:prose-xl text-slate-700 leading-relaxed space-y-6">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}