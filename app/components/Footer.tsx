'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const params = useParams();
  const currentYear = new Date().getFullYear();
  
  // Si no hay parámetros (como en el build de la página 404), 
  // devolvemos un footer simple para que Vercel no falle.
  if (!params?.locale) {
    return (
      <footer className="bg-white border-t border-emerald-100 py-8 text-center text-xs text-gray-400">
        © {currentYear} The Pet Bridge.
      </footer>
    );
  }

  return <FooterContent currentYear={currentYear} />;
}

function FooterContent({ currentYear }: { currentYear: number }) {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-600">The Pet Bridge</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('brandDescription')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('usefulLinks')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors">{t('about')}</Link></li>
              <li><Link href="/contacto" className="hover:text-emerald-600 transition-colors">{t('contact')}</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-600 font-bold transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('legalTitle')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/aviso-legal" className="hover:text-emerald-600 transition-colors">{t('legalNotice')}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-600 transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600 transition-colors">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {currentYear} The Pet Bridge.</p>
          <p className="text-xs text-slate-400 italic">
            {t('affiliateDisclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}