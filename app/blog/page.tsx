'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '../data/posts';
import { useI18n } from '@/app/i18n/I18nProvider';

export default function BlogIndex() {
  const { messages } = useI18n() as any;
  const [locale, setLocale] = useState<'es' | 'en' | 'fr'>('es');

  useEffect(() => {
    // Detectamos el idioma real activo leyendo el botón de "Inicio"
    const homeText = (messages?.header?.home || messages?.home || 'home').toLowerCase();
    
    if (homeText.includes('inicio')) {
      setLocale('es');
    } else if (homeText.includes('accueil') || homeText.includes('bienvenue')) {
      setLocale('fr');
    } else {
      setLocale('en');
    }
  }, [messages]);

  // Convertimos el objeto de posts en un array según el idioma detectado
  const postsList = Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
    ...BLOG_POSTS[slug as keyof typeof BLOG_POSTS][locale]
  }));

  // Textos adaptables para la interfaz del blog
  const labelLeerMas = locale === 'es' ? 'Leer más →' : locale === 'fr' ? 'Lire la suite →' : 'Read more →';
  const labelBlogTitle = locale === 'es' ? 'Blog' : locale === 'fr' ? 'Blog' : 'Our Blog';

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-emerald-600 mb-12 text-left">{labelBlogTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsList.map((post) => (
          <div key={post.slug} className="border border-emerald-100 p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between h-64 text-left">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{post.title}</h2>
            <Link href={`/blog/${post.slug}`} className="text-emerald-600 font-semibold hover:underline">
              {labelLeerMas}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
