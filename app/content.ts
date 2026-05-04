export type Locale = "en" | "es";

type CardContent = {
  title: string;
  description: string;
};

type SiteContent = {
  nav: {
    adopt: string;
    services: string;
    euTravel: string;
  };
  languageButton: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  cards: {
    adopt: CardContent;
    wellness: CardContent;
    travelLegal: CardContent;
  };
  adLabel: string;
  footer: string;
};

export const contentByLocale: Record<Locale, SiteContent> = {
  en: {
    nav: {
      adopt: "Adopt",
      services: "Services",
      euTravel: "EU Travel",
    },
    languageButton: "ES",
    hero: {
      eyebrow: "Welcome to The Pet Bridge",
      title: "Your European Pet Connection",
      subtitle:
        "Helping families adopt, care for, and travel with pets across Europe.",
    },
    cards: {
      adopt: {
        title: "Adopt",
        description:
          "Discover trusted resources and practical tips for finding pets and adoption opportunities throughout Europe.",
      },
      wellness: {
        title: "Wellness",
        description:
          "Browse a growing directory of veterinarians, clinics, and pet wellness services near your destination.",
      },
      travelLegal: {
        title: "Travel & Legal",
        description:
          "Learn how EU pet passports work, what documents you need, and how to follow local pet regulations with confidence.",
      },
    },
    adLabel: "Advertisement",
    footer: "Connecting pets and people across Europe.",
  },
  es: {
    nav: {
      adopt: "Adoptar",
      services: "Servicios",
      euTravel: "Viaje UE",
    },
    languageButton: "EN",
    hero: {
      eyebrow: "Bienvenido a The Pet Bridge",
      title: "Tu conexion europea para mascotas",
      subtitle:
        "Ayudamos a las familias a adoptar, cuidar y viajar con mascotas por toda Europa.",
    },
    cards: {
      adopt: {
        title: "Adoptar",
        description:
          "Descubre recursos confiables y consejos practicos para encontrar mascotas y oportunidades de adopcion en Europa.",
      },
      wellness: {
        title: "Bienestar",
        description:
          "Consulta un directorio en crecimiento de veterinarios, clinicas y servicios de bienestar para mascotas.",
      },
      travelLegal: {
        title: "Viaje y Legal",
        description:
          "Aprende como funciona el pasaporte europeo para mascotas, que documentos necesitas y como cumplir las normas locales.",
      },
    },
    adLabel: "Publicidad",
    footer: "Conectando mascotas y familias en toda Europa.",
  },
};
