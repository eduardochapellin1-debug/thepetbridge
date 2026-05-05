import Link from "next/link";

export default function TravelPage() {
  const bilingualSections = [
    {
      headingEn: "Entry Requirements",
      headingEs: "Requisitos de entrada",
      textEn:
        "Confirm microchip registration, valid rabies vaccine dates, and any destination-specific declarations before departure.",
      textEs:
        "Confirma el registro del microchip, las fechas vigentes de la vacuna antirrabica y cualquier declaracion especifica del destino antes de viajar.",
    },
    {
      headingEn: "Travel Documents",
      headingEs: "Documentos de viaje",
      textEn:
        "Carry the EU pet passport (or equivalent health certificate), proof of ownership, and recent veterinary records in print and digital format.",
      textEs:
        "Lleva el pasaporte europeo para mascotas (o certificado sanitario equivalente), prueba de titularidad y registros veterinarios recientes en formato fisico y digital.",
    },
    {
      headingEn: "Transit and Airline Rules",
      headingEs: "Normas de transito y aerolinea",
      textEn:
        "Review carrier crate dimensions, in-cabin restrictions, and stopover country rules to avoid denied boarding or quarantine delays.",
      textEs:
        "Revisa dimensiones del transportin, restricciones en cabina y reglas de los paises de escala para evitar denegaciones de embarque o cuarentenas.",
    },
    {
      headingEn: "Arrival Checklist",
      headingEs: "Checklist de llegada",
      textEn:
        "Locate a nearby clinic, update local registration if required, and keep emergency contacts available during your first 72 hours.",
      textEs:
        "Ubica una clinica cercana, actualiza el registro local si aplica y mantén contactos de emergencia accesibles durante las primeras 72 horas.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <nav className="mb-8 flex items-center gap-5 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link href="/adopt" className="hover:text-emerald-600">
            Adopt
          </Link>
          <Link href="/services" className="hover:text-emerald-600">
            Services
          </Link>
          <Link href="/travel" className="text-emerald-700">
            EU Travel
          </Link>
        </nav>

        <main className="space-y-6">
          <section className="rounded-2xl border border-emerald-100 bg-white/90 p-8 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  EN
                </p>
                <h1 className="text-3xl font-bold text-slate-900">
                  Travel & Legal
                </h1>
                <p className="mt-3 leading-7 text-slate-600">
                  Prepare documents, follow cross-border regulations, and travel
                  confidently with your pet across Europe.
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                  ES
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Leyes y Viajes
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Prepara la documentacion, cumple la normativa entre paises y
                  viaja con confianza junto a tu mascota por Europa.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-4">
            {bilingualSections.map((section) => (
              <article
                key={section.headingEn}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      EN
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {section.headingEn}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {section.textEn}
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-sky-50/40 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                      ES
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {section.headingEs}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {section.textEs}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
