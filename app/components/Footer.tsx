'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const params = useParams();
  const currentYear = new Date().getFullYear();
  
  // Si estamos en una ruta que NO tiene idioma (como la 404 de Vercel)
  // o si params aún no ha cargado, intentamos renderizar, 
  // pero si falla, mostramos el fallback.
  if (!params || !params.locale) {
    return (
      <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-gray-400">
            <div><h3 className="font-bold text-emerald-600">The Pet Bridge</h3></div>
            <div><h4 className="font-semibold mb-4">Links</h4></div>
            <div><h4 className="font-semibold mb-4">Legal</h4></div>
          </div>
          <p className="text-center text-xs">© {currentYear} The Pet Bridge.</p>
        </div>
      </footer>
    );
  }

  return <FooterContent currentYear={currentYear} locale={params.locale as string} />;
}

function FooterContent({ currentYear, locale }: { currentYear: number, locale: string }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-600">The Pet Bridge</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{t('brandDescription')}</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('usefulLinks')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href={`/${locale}/about`} className="hover:text-emerald-600 transition-colors">{t('about')}</Link></li>
              <li><Link href={`/${locale}/contacto`} className="hover:text-emerald-600 transition-colors">{t('contact')}</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-emerald-600 font-bold transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('legalTitle')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href={`/${locale}/aviso-legal`} className="hover:text-emerald-600 transition-colors">{t('legalNotice')}</Link></li>
              <li><Link href={`/${locale}/privacidad`} className="hover:text-emerald-600 transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href={`/${locale}/cookies`} className="hover:text-emerald-600 transition-colors">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} The Pet Bridge.</p>
          <p className="italic">{t('affiliateDisclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}