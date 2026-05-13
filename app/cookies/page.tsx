'use client';
import { useI18n } from '@/app/i18n/I18nProvider';

export default function CookiesPage() {
  const { messages } = useI18n() as any;
  const homeText = (messages?.header?.home || messages?.home || 'home').toLowerCase();

  let content = {
    title: "Cookies Policy",
    update: "Last updated: [DD/MM/YYYY]",
    p1: "Our website uses cookies to improve your user experience and analyze traffic. By continuing to browse, you accept our use of cookies."
  };

  if (homeText.includes('inicio')) {
    content = {
      title: "Política de Cookies",
      update: "Última actualización: [DD/MM/AAAA]",
      p1: "Nuestro sitio web utiliza cookies para mejorar su experiencia de usuario y analizar el tráfico. Al continuar navegando, acepta nuestro uso de cookies."
    };
  } else if (homeText.includes('accueil') || homeText.includes('bienvenue')) {
    content = {
      title: "Politique de Cookies",
      update: "Dernière mise à jour : [JJ/MM/AAAA]",
      p1: "Notre site web utilise des cookies pour améliorer votre expérience utilisateur et analyser le trafic. En continuant à naviguer, vous acceptez notre utilisation des cookies."
    };
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-left text-slate-800">
      <div className="bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">{content.title}</h1>
        <p className="text-xs text-slate-400 mb-8">{content.update}</p>
        <p className="text-sm leading-relaxed text-slate-600">{content.p1}</p>
      </div>
    </main>
  );
}