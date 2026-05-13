'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();

  // 1. Detectar el idioma actual basándonos en la ruta de la URL
  let lang = 'en'; // Idioma por defecto
  if (pathname?.startsWith('/es')) lang = 'es';
  if (pathname?.startsWith('/fr')) lang = 'fr';

  // 2. Diccionario local seguro (Evita depender de los JSON globales)
  const translations: Record<string, any> = {
    en: {
      description: "Connecting pets and families across Europe.",
      linksTitle: "Links",
      blog: "Blog",
      legalTitle: "Legal Information",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookies Policy",
      privacyUrl: "/privacy",
      cookieUrl: "/cookies"
    },
    es: {
      description: "Conectando mascotas y familias a través de Europa.",
      linksTitle: "Enlaces",
      blog: "Blog",
      legalTitle: "Información Legal",
      privacyPolicy: "Política de Privacidad",
      cookiePolicy: "Política de Cookies",
      privacyUrl: "/es/privacidad",
      cookieUrl: "/es/cookies"
    },
    fr: {
      description: "Connecter les animaux de compagnie et les familles à travers l'Europe.",
      linksTitle: "Liens",
      blog: "Blog",
      legalTitle: "Informations Légales",
      privacyPolicy: "Politique de Confidentialité",
      cookiePolicy: "Politique de Cookies",
      privacyUrl: "/fr/confidentialite",
      cookieUrl: "/fr/cookies"
    }
  };

  // Seleccionar los textos correspondientes al idioma activo
  const t = translations[lang];

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1: Información de Contenido */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">{t.description}</p>
          </div>

          {/* Columna 2: Enlaces de Navegación */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.linksTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href={lang === 'en' ? '/blog' : `/${lang}/blog`} className="hover:text-emerald-400 transition-colors">
                  {t.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Documentación Obligatoria para AdSense */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.legalTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href={t.privacyUrl} className="hover:text-emerald-400 transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={t.cookieUrl} className="hover:text-emerald-400 transition-colors">
                  {t.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Derechos Reservados */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} The Pet Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}