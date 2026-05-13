'use client';
import { useI18n } from '@/app/i18n/I18nProvider';

export default function PrivacidadPage() {
  const { messages } = useI18n() as any;

  // Detectamos el idioma actual basándonos en el título del Footer que ya sabemos que funciona
  const legalTitle = messages?.Footer?.legalTitle || "Legal information";
  const legalLower = legalTitle.toLowerCase();

  // Idioma por defecto: Español (tal como lo tenías)
  let content = {
    title: "Política de Privacidad",
    update: "Última actualización: [DD/MM/AAAA]",
    sections: [
      {
        t: "1. Responsable del tratamiento",
        p: "El responsable del tratamiento de los datos personales recabados en este sitio web es [NOMBRE O RAZÓN SOCIAL], con correo de contacto [EMAIL]."
      },
      {
        t: "2. Datos que recopilamos",
        p: "Podemos recopilar datos identificativos y de contacto que el usuario facilite de forma voluntaria, así como datos técnicos de navegación (dirección IP, tipo de navegador, páginas visitadas y tiempos de acceso)."
      },
      {
        t: "3. Finalidad del tratamiento",
        p: "Los datos se utilizan para gestionar consultas, mejorar la experiencia de usuario, elaborar estadísticas de uso y cumplir obligaciones legales. En su caso, también para el envío de comunicaciones informativas cuando exista consentimiento."
      },
      {
        t: "4. Base jurídica",
        p: "La base jurídica del tratamiento es el consentimiento del interesado, la ejecución de medidas precontractuales o contractuales y el cumplimiento de obligaciones legales aplicables."
      },
      {
        t: "5. Cesión de datos y terceros",
        p: "No se cederán datos a terceros salvo obligación legal. Determinados proveedores tecnológicos pueden acceder a datos como encargados del tratamiento, bajo los contratos y garantías exigidos por la normativa."
      },
      {
        t: "6. Derechos del usuario",
        p: "El usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando una solicitud a [EMAIL], acreditando su identidad."
      },
      {
        t: "7. Conservación",
        p: "Los datos se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recabados y, posteriormente, durante los plazos legalmente establecidos."
      }
    ]
  };

  // Si el usuario cambia a Francés
  if (legalLower.includes('informations') || legalLower.includes('légales')) {
    content = {
      title: "Politique de Confidentialité",
      update: "Dernière mise à jour : [JJ/MM/AAAA]",
      sections: [
        {
          t: "1. Responsable du traitement",
          p: "Le responsable du traitement des données personnelles collectées sur ce site internet est [NOM OU RAISON SOCIALE], avec l'adresse e-mail de contact [EMAIL]."
        },
        {
          t: "2. Données collectées",
          p: "Nous pouvons collecter des données d'identification et de contact fournies volontairement par l'utilisateur, ainsi que des données de navigation techniques (adresse IP, type de navigateur, pages visitées et temps d'accès)."
        },
        {
          t: "3. Finalité du traitement",
          p: "Les données sont utilisées pour gérer les demandes, améliorer l'expérience utilisateur, établir des statistiques d'utilisation et respecter les obligations légales. Le cas échéant, elles servent aussi à l'envoi de communications informatives lorsqu'un consentement existe."
        },
        {
          t: "4. Base juridique",
          p: "La base juridique du traitement est le consentement de la personne concernée, l'exécution de mesures précontractuelles ou contractuelles et le respect des obligations légales applicables."
        },
        {
          t: "5. Transmission des données à des tiers",
          p: "Aucune donnée ne sera transmise à des tiers, sauf obligation légale. Certains fournisseurs technologiques peuvent accéder aux données en tant que sous-traitants, en vertu des contrats et des garanties exigés par la réglementation."
        },
        {
          t: "6. Droits de l'utilisateur",
          p: "L'utilisateur peut exercer ses droits d'accès, de rectification, de suppression, d'opposition, de limitation et de portabilité en envoyant une demande à [EMAIL], en prouvant son identité."
        },
        {
          t: "7. Conservation",
          p: "Les données seront conservées pendant le temps nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, puis pendant les durées légalement établies."
        }
      ]
    };
  }

  // Si el usuario cambia a Inglés
  if (legalLower.includes('information') && !legalLower.includes('información')) {
    content = {
      title: "Privacy Policy",
      update: "Last updated: [DD/MM/YYYY]",
      sections: [
        {
          t: "1. Data Controller",
          p: "The person responsible for processing the personal data collected on this website is [NAME OR COMPANY NAME], with contact email [EMAIL]."
        },
        {
          t: "2. Data We Collect",
          p: "We may collect identification and contact data voluntarily provided by the user, as well as technical browsing data (IP address, browser type, pages visited, and access times)."
        },
        {
          t: "3. Purpose of Processing",
          p: "The data is used to manage inquiries, improve user experience, compile usage statistics, and comply with legal obligations. Where applicable, it is also used to send informative communications when consent is granted."
        },
        {
          t: "4. Legal Basis",
          p: "The legal basis for processing is the consent of the data subject, the execution of pre-contractual or contractual measures, and compliance with applicable legal obligations."
        },
        {
          t: "5. Data Disclosure and Third Parties",
          p: "No data will be disclosed to third parties unless required by law. Certain technological providers may access data as data processors, under the contracts and guarantees required by regulations."
        },
        {
          t: "6. User Rights",
          p: "The user can exercise the rights of access, rectification, erasure, objection, restriction, and portability by sending a request to [EMAIL], proving their identity."
        },
        {
          t: "7. Data Retention",
          p: "Data will be retained for the time necessary to fulfill the purpose for which it was collected and, subsequently, during the legally established periods."
        }
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