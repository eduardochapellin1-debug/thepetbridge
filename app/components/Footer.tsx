'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  // Definimos textos por defecto por si falla la traducción
  let legalTitle = "Legal";
  let privacy = "Privacy Policy";
  let cookies = "Cookie Policy";
  let notice = "Legal Notice";

  try {
    const t = useTranslations('Footer');
    legalTitle = t('legalTitle');
    privacy = t('privacyPolicy');
    cookies = t('cookiePolicy');
    notice = t('legalNotice');
  } catch (e) {
    // Si falla, usará los textos por defecto de arriba
  }

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-20 block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">Connecting pets and families across Europe.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/blog" className="hover:text-emerald-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{legalTitle}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/aviso-legal" className="hover:text-emerald-400">{notice}</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-400">{privacy}</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-400">{cookies}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}