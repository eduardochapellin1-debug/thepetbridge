'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-20 pb-12 mt-auto border-t-4 border-emerald-500 block">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1 */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-90">Connecting pets and families across Europe.</p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: LEGAL (Vital para AdSense) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('legalTitle')}</h4>
            <ul className="space-y-3">
              <li><Link href="/aviso-legal" className="hover:text-emerald-400 transition-colors">{t('legalNotice')}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-400 transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-400 transition-colors">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}