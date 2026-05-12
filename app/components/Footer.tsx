'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  // Aquí usamos la 'F' mayúscula que corregimos en el JSON
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-left">
          
          {/* Columna 1: Nombre */}
          <div>
            <h3 className="font-bold text-emerald-600 mb-4">The Pet Bridge</h3>
            <p className="text-xs">Connecting pets and families across Europe.</p>
          </div>

          {/* Columna 2: Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-emerald-600">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legal (LO QUE PIDE ADSENSE) */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">{t('legalTitle')}</h4>
            <ul className="space-y-2">
              <li><Link href="/aviso-legal" className="hover:text-emerald-600">{t('legalNotice')}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-600">{t('privacyPolicy')}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>

        </div>
        <div className="pt-8 border-t border-slate-100 text-center text-xs">
          © {new Date().getFullYear()} The Pet Bridge.
        </div>
      </div>
    </footer>
  );
}