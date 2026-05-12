'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  let t;
  try {
    t = useTranslations('Footer');
  } catch (error) {
    return (
      <footer className="w-full bg-slate-900 py-8 text-center text-xs text-white">
        © {new Date().getFullYear()} The Pet Bridge.
      </footer>
    );
  }

  return (
    <footer className="w-full bg-slate-900 pt-16 pb-12 mt-20 block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1 */}
          <div>
            <h3 className="font-bold text-emerald-400 mb-4 text-lg">The Pet Bridge</h3>
            <p className="text-xs opacity-80">Connecting pets and families across Europe.</p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/blog" className="hover:text-emerald-400">Blog</Link></li>
            </ul>
          </div>

          {/* Columna 3: LEGAL (Vital para AdSense) */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">{t('legalTitle')}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/aviso-legal" className="hover:text-emerald-400">{t('legalNotice')}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-400">{t('privacyPolicy')}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-400">{t('cookiePolicy')}</Link></li>
            </ul>
          </div>

        </div>
        <div className="pt-8 mt-8 border-t border-slate-700 text-center text-xs opacity-60">
          © {new Date().getFullYear()} The Pet Bridge.
        </div>
      </div>
    </footer>
  );
}