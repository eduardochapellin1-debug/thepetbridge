'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const params = useParams();
  const currentYear = new Date().getFullYear();
  
  // Si no hay params (como en la página 404 de Vercel), evitamos usar useTranslations
  // para que no rompa el build.
  let t: any;
  try {
    t = useTranslations('footer');
  } catch (e) {
    // Plan B si falla la carga de traducciones durante el build
    t = (key: string) => key; 
  }

  return (
    <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-600">The Pet Bridge</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {params ? t('brandDescription') : 'Connecting pets and families across Europe.'}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{params ? t('usefulLinks') : 'Links'}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors">{params ? t('about') : 'About Us'}</Link></li>
              <li><Link href="/contacto" className="hover:text-emerald-600 transition-colors">{params ? t('contact') : 'Contact'}</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-600 font-bold transition-colors">{params ? t('blog') : 'Blog 🐾'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">{params ? t('legalTitle') : 'Legal'}</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/aviso-legal" className="hover:text-emerald-600 transition-colors">{params ? t('legalNotice') : 'Legal Notice'}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-600 transition-colors">{params ? t('privacyPolicy') : 'Privacy Policy'}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600 transition-colors">{params ? t('cookiePolicy') : 'Cookies'}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {currentYear} The Pet Bridge.</p>
          <p className="text-xs text-slate-400 italic">
            {params ? t('affiliateDisclaimer') : 'Affiliate Disclosure'}
          </p>
        </div>
      </div>
    </footer>
  );
}