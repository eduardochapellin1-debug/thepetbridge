'use client';
import { useI18n } from '@/app/i18n/I18nProvider';
import Link from 'next/link';

export default function Footer() {
  // Se añade "as any" para evitar que TypeScript lance el error en Vercel
  const { messages } = useI18n() as any;

  // Sistema de respaldo con fallback por si el JSON tarda en cargar
  const description = messages?.footer?.description || "Connecting pets and families across Europe.";
  const linksTitle = messages?.footer?.linksTitle || "Links";
  const blogText = messages?.footer?.blog || "Blog";
  const legalTitle = messages?.footer?.legalTitle || "Legal Information";
  const privacyPolicy = messages?.footer?.privacyPolicy || "Privacy Policy";
  const cookiePolicy = messages?.footer?.cookiePolicy || "Cookies Policy";

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1: Info General */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{linksTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  {blogText}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información Legal */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{legalTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">
                  {privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                  {cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}