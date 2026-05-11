import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '../data/posts';

export default function BlogIndex() {
  // Aquí definimos el idioma. 
  // Para AdSense, lo ideal es que esto venga de la URL o del estado global de tu app.
  const locale = 'es'; 

  // Convertimos el objeto de posts en un array para poder listarlos
  const postsList = Object.keys(BLOG_POSTS).map(slug => ({
    slug,
    ...BLOG_POSTS[slug as keyof typeof BLOG_POSTS][locale as 'es' | 'en' | 'fr']
  }));

  return (
    <div className="max-w-6xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold text-emerald-600 mb-12 text-left">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsList.map((post) => (
          <div key={post.slug} className="border border-emerald-100 p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} className="text-emerald-600 font-semibold hover:underline">
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}