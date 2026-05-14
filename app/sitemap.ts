import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thepetbridge.com'

  return [
    // Páginas principales
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // 🇪🇸 Páginas Legales en Español
    {
      url: `${baseUrl}/legal/privacidad-es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookies-es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },

    // 🇬🇧 Páginas Legales en Inglés
    {
      url: `${baseUrl}/legal/privacy-en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookies-en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },

    // 🇫🇷 Páginas Legales en Francés
    {
      url: `${baseUrl}/legal/confidentialite-fr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/cookies-fr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },

    // 🇪🇸 Artículos del Blog en Español (4)
    {
      url: `${baseUrl}/blog/requisitos-viajar-mascota-europa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mejores-aerolineas-mascotas-europa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/guia-pasaporte-europeo-mascotas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/consejos-viaje-largo-perro-tren`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // 🇬🇧 Artículos del Blog en Inglés (2)
    {
      url: `${baseUrl}/blog/pet-travel-requirements-europe-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-airlines-flying-with-dog-eu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // 🇫🇷 Artículos del Blog en Francés (2)
    {
      url: `${baseUrl}/blog/voyager-avec-son-chien-europe-regles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/meilleures-compagnies-aeriennes-animaux`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}