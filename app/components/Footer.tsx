'use client';
import { useI18n } from '@/app/i18n/I18nProvider';
import Link from 'next/link';

export default function Footer() {
  const { messages } = useI18n() as any;

  // Detectamos el idioma real leyendo el botón de "Inicio" del Header del JSON (que nunca falla)
  const homeText = (messages?.header?.home || messages?.home || 'home').toLowerCase();

  let description = "Connecting pets and families across Europe.";
  let linksTitle = "Links";
  let blogText = "Blog";
  let legalTitle = "Legal Information";
  let privacy = "Privacy Policy";
  let cookies = "Cookies Policy";

  if (homeText.includes('inicio') || homeText.includes('accueil') === false && homeText.includes('home') === false) {
    // Español
    description = "Conectando mascotas y familias a través de Europa.";
    linksTitle = "Enlaces";
    blogText = "Blog";
    legalTitle = "Información Legal";
    privacy = "Política de Privacidad";
    cookies = "Política de Cookies";
  } else if (homeText.includes('accueil') || homeText.includes('bienvenue')) {
    // Francés
    description = "Connecter les animaux de compagnie et les familles à travers l'Europe.";
    linksTitle = "Liens";
    blogText = "Blog";
    legalTitle = "Informations Légales";
    privacy = "Politique de Confidentialité";
    cookies = "Politique de Cookies";
  }

  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{linksTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">{blogText}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">{legalTitle}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">{privacy}</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">{cookies}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} The Pet Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
