'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  // Estado local para almacenar el idioma real del navegador
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Detecta el atributo 'lang' del HTML de forma directa y en tiempo real
    const htmlElement = document.documentElement;
    if (htmlElement) {
      const currentLang = htmlElement.getAttribute('lang') || 'en';
      setLang(currentLang.toLowerCase());
    }

    // Escucha cambios por si el usuario pulsa el botón multiidioma sin recargar
    const observer = new MutationObserver(() => {
      const currentLang = htmlElement.getAttribute('lang') || 'en';
      setLang(currentLang.toLowerCase());
    });

    observer.observe(htmlElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);

  // Valores estructurados por idioma (Sin usar condicionales ambiguos)
  const translations: Record<string, any> = {
    en: {
      description: "Connecting pets and families across Europe.",
      linksTitle: "Links",
      blog: "Blog",
      legalTitle: "Legal Information",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookies Policy"
    },
    es: {
      description: "Conectando mascotas y familias a través de Europa.",
      linksTitle: "Enlaces",
      blog: "Blog",
      legalTitle: "Información Legal",
      privacyPolicy: "Política de Privacidad",
      cookiePolicy: "Política de Cookies"
    },
    fr: {
      description: "Connecter les animaux de compagnie et les familles à travers l'Europe.",
      linksTitle: "Liens",
      blog: "Blog",
      legalTitle: "Informations Légales",
      privacyPolicy: "Politique de Confidentialité",
      cookiePolicy: "Politique de Cookies"
    }
  };

  // Si el idioma detectado no está en el diccionario, usamos inglés por seguridad
  const t = translations[lang] || translations['en'];

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">{t.description}</p>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.linksTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  {t.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{t.legalTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                  {t.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} The Pet Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}