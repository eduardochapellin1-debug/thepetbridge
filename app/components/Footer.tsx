'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  // Inicializamos las variables vacías
  let legalTitle = "";
  let privacy = "";
  let cookies = "";

  try {
    // Buscamos la sección con F mayúscula exigida por tu I18nProvider
    const t = useTranslations('Footer');
    legalTitle = t('legalTitle');
    privacy = t('privacyPolicy');
    cookies = t('cookiePolicy');
  } catch (e) {
    // Respaldo por si falla el contexto en páginas especiales
    legalTitle = "Legal Information";
    privacy = "Privacy Policy";
    cookies = "Cookies Policy";
  }

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">Connecting pets and families across Europe.</p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: Totalmente dinámica */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{legalTitle}</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link href="/privacidad" className="hover:text-emerald-400 transition-colors">{privacy}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-400 transition-colors">{cookies}</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
