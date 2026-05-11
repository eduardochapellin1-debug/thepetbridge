'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

function FooterContent() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

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
              <li><Link href="/about" className="hover:text-emerald-600">{t('about')}</Link></li>
              <li><Link href="/contacto" className="hover:text-emerald-600">{t('contact')}</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-600 font-bold">{t('blog')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{t('legalTitle')}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/aviso-legal" className="hover:text-emerald-600">{t('legalNotice')}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-600">{t('privacyPolicy')}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600">{t('cookiePolicy')}</Link></li>
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

export default function Footer() {
  // Esta es la armadura: Si falla la traducción (en el build), no rompas la web
  try {
    return <FooterContent />;
  } catch (error) {
    return <footer className="py-8 text-center text-xs text-gray-400 border-t">© The Pet Bridge</footer>;
  }
}