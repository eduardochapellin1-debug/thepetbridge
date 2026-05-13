'use client';
import { useI18n } from '@/app/i18n/I18nProvider';
import Link from 'next/link';

export default function Footer() {
  // Conectamos con tu sistema de traducción nativo (con bypass de TypeScript seguro)
  const { messages } = useI18n() as any;

  // 1. Diccionario de textos de contenido (Si el JSON falla o viene vacío, usa el respaldo en inglés automáticamente)
  const description = messages?.footer?.description || "Connecting pets and families across Europe.";
  const linksTitle = messages?.footer?.linksTitle || "Links";
  const blogText = messages?.footer?.blog || "Blog";

  // 2. Tus variables originales para las políticas legales (las que ya te funcionaban antes)
  const legalTitle = messages?.Footer?.legalTitle || "Legal information";
  const privacy = messages?.Footer?.privacyPolicy || "Privacy Policy";
  const cookies = messages?.Footer?.cookiePolicy || "Cookies Policy";

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1: Información de Contenido */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>

          {/* Columna 2: Enlaces de Navegación */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{linksTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  {blogText}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Documentación Obligatoria para AdSense */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{legalTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">
                  {privacy}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                  {cookies}
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