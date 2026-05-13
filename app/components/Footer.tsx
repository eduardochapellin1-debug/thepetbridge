'use client';
import { useI18n } from '@/app/i18n/I18nProvider';
import Link from 'next/link';

export default function Footer() {
  // Retornamos a tu llamada original con "as any" para evitar errores en Vercel
  const { messages } = useI18n() as any;

  // 1. Tus variables originales (las que ya te funcionaban antes)
  const legalTitle = messages?.footer?.legalTitle || "Legal information";
  const privacy = messages?.footer?.privacyPolicy || "Privacy Policy";
  const cookies = messages?.footer?.cookiePolicy || "Cookies Policy";

  // 2. Agregamos las variables del resto del contenido vinculadas a tus JSON
  const description = messages?.footer?.description || "Connecting pets and families across Europe.";
  const linksTitle = messages?.footer?.linksTitle || "Links";
  const blogText = messages?.footer?.blog || "Blog";

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1: Información de Contenido (Ahora dinámica) */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>

          {/* Columna 2: Enlaces */}
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

          {/* Columna 3: Información Legal (Tus variables originales fijadas en el HTML) */}
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
      </div>
    </footer>
  );
}
