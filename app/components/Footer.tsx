'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const params = useParams();
  const currentYear = new Date().getFullYear();
  
  // Si NO hay params (fase de build crítica), mostramos una versión mínima.
  // Pero si hay locale, pasamos a la versión COMPLETA.
  if (!params?.locale) {
    return (
      <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div><h3 className="font-bold text-emerald-600">The Pet Bridge</h3></div>
            <div><h4 className="font-semibold mb-4">Links</h4></div>
            <div><h4 className="font-semibold mb-4">Legal</h4></div>
          </div>
          <p className="text-center text-xs">© {currentYear} The Pet Bridge.</p>
        </div>
      </footer>
    );
  }

  return <FooterContent currentYear={currentYear} />;
}

function FooterContent({ currentYear }: { currentYear: number }) {
  // 'footer' debe existir en tus archivos JSON (es.json, en.json, etc.)
  const t = useTranslations('footer');

  return (
    <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUMNA 1: BRAND */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-600">The Pet Bridge</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('brandDescription')}
            </p>
          </div>

          {/* COLUMNA 2: LINKS (Aquí están tus blogs y AdSense) */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('usefulLinks')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors">{t('about')}</Link></li>
              <li><Link href="/contacto" className="hover:text-emerald-600 transition-colors">{t('contact')}</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-600 font-bold transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* COLUMNA 3: LEGAL (Vital para AdSense) */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('legalTitle')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/aviso-legal" className="hover:text-emerald-600 transition-colors">{t('legalNotice')}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-600 transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600 transition-colors">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} The Pet Bridge.</p>
          <p className="italic">{t('affiliateDisclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}