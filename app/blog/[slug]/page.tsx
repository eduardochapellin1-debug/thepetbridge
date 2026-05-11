import { BLOG_POSTS } from '../../data/posts';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // LOGICA DE IDIOMA: Aquí deberías obtener el idioma actual del sistema de tu web
  // Por ahora lo dejamos dinámico. Si usas i18n de Next.js, se saca de params o cookies.
  const currentLocale = 'es'; // Cambiar esto según tu lógica de traducción

  const postData = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];
  
  // Buscamos el contenido en el idioma actual, si no existe, mostramos español por defecto
  const post = postData ? (postData[currentLocale as keyof typeof postData] || postData['es']) : null;

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">{post.title}</h1>
        <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
          {post.content}
        </p>
      </div>
    </main>
  );
}