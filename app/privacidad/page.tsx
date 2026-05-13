'use client';
import { useI18n } from '@/app/i18n/I18nProvider';

export default function PrivacidadPage() {
  const { messages } = useI18n() as any;
  const homeText = (messages?.header?.home || messages?.home || 'home').toLowerCase();

  let content = {
    title: "Privacy Policy",
    update: "Last updated: [DD/MM/YYYY]",
    sections: [
      { t: "1. Data Controller", p: "The person responsible for processing the personal data collected on this website is [NAME OR COMPANY NAME], with contact email [EMAIL]." },
      { t: "2. Data We Collect", p: "We may collect identification and contact data voluntarily provided by the user, as well as technical browsing data (IP address, browser type, pages visited, and access times)." },
      { t: "3. Purpose of Processing", p: "The data is used to manage inquiries, improve user experience, compile usage statistics, and comply with legal obligations." }
    ]
  };

  if (homeText.includes('inicio')) {
    content = {
      title: "Política de Privacidad",
      update: "Última actualización: [DD/MM/AAAA]",
      sections: [
        { t: "1. Responsable del tratamiento", p: "El responsable del tratamiento de los datos personales recabados en este sitio web es [NOMBRE O RAZÓN SOCIAL], con correo de contacto [EMAIL]." },
        { t: "2. Datos que recopilamos", p: "Podemos recopilar datos identificativos y de contacto que el usuario facilite de forma voluntaria, así como datos técnicos de navegación." },
        { t: "3. Finalidad del tratamiento", p: "Los datos se utilizan para gestionar consultas, mejorar la experiencia de usuario, elaborar estadísticas de uso y cumplir obligaciones legales." }
      ]
    };
  } else if (homeText.includes('accueil') || homeText.includes('bienvenue')) {
    content = {
      title: "Politique de Confidentialité",
      update: "Dernière mise à jour : [JJ/MM/AAAA]",
      sections: [
        { t: "1. Responsable du traitement", p: "Le responsable du traitement des données personnelles collectées sur ce site internet est [NOM OU RAISON SOCIALE], avec l'adresse e-mail de contact [EMAIL]." },
        { t: "2. Données collectées", p: "Nous pouvons collecter des données d'identification et de contact fournies volontairement par l'utilisateur, ainsi que des données de navigation techniques." },
        { t: "3. Finalité du traitement", p: "Les données sont utilisées pour gérer les demandes, améliorer l'expérience utilisateur, établir des statistiques d'utilisation et respecter les obligations légales." }
      ]
    };
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-left text-slate-800">
      <div className="bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">{content.title}</h1>
        <p className="text-xs text-slate-400 mb-8">{content.update}</p>
        <div className="space-y-6">
          {content.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-lg font-bold text-slate-900 mb-2">{section.t}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{section.p}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}