'use client';
import React from 'react';
import Link from 'next/link';

export default function BlogIndex() {
  // Lista fija de artículos. No depende de ningún archivo externo ni de JSON.
  const posts = [
    // Artículos en Español (Tus artículos originales)
    { slug: 'guia-viajar-europa-mascota', title: 'Guía definitiva para viajar por Europa con tu mascota', lang: 'Español' },
    { slug: 'pasaporte-europeo-mascotas', title: 'Pasaporte Europeo para Mascotas: Cómo obtenerlo paso a paso', lang: 'Español' },
    { slug: 'mejores-aerolineas-pet-friendly', title: 'Las 5 mejores aerolíneas Pet-Friendly en Europa', lang: 'Español' },
    { slug: 'seguros-viaje-mascotas-obligatorios', title: 'Seguros de viaje para mascotas: ¿Son obligatorios?', lang: 'Español' },
    
    // Nuevos artículos en Inglés para Google AdSense
    { slug: 'eu-pet-passport-guide', title: 'How to Get a European Pet Passport: Step-by-Step Guide', lang: 'English' },
    { slug: 'best-pet-friendly-airlines-europe', title: 'Top 5 Pet-Friendly Airlines for Traveling in Europe', lang: 'English' },
    
    // Nuevos artículos en Francés para Google AdSense
    { slug: 'passeport-europeen-animaux-guide', title: 'Passeport Européen pour Animaux : Comment l\'obtenir étape par étape', lang: 'Français' },
    { slug: 'meilleures-compagnies-aeriennes-animaux', title: 'Top 5 des compagnies aériennes acceptant les animaux en Europe', lang: 'Français' }
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-emerald-600 mb-4 text-left">Blog & Articles</h1>
      <p className="text-sm text-slate-500 mb-12 text-left">Find practical guides and useful tips for traveling with your pets across Europe.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="border border-emerald-100 p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between h-64 text-left hover:border-emerald-300 transition-colors">
            <div>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md inline-block mb-3">
                {post.lang}
              </span>
              <h2 className="text-xl font-bold text-slate-800 leading-snug">{post.title}</h2>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-emerald-600 font-semibold hover:underline mt-4 inline-block">
              {post.lang === 'Español' ? 'Leer más →' : post.lang === 'Français' ? 'Lire la suite →' : 'Read more →'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}