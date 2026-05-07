export default function PrivacidadPage() {
  return (
    <main className="flex-1 bg-emerald-50/40 px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
          Politica de Privacidad
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Ultima actualizacion: [DD/MM/AAAA]
        </p>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:text-emerald-600">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos personales recabados en
            este sitio web es [NOMBRE O RAZON SOCIAL], con correo de contacto
            [EMAIL].
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>
            Podemos recopilar datos identificativos y de contacto que el usuario
            facilite de forma voluntaria, asi como datos tecnicos de navegacion
            (direccion IP, tipo de navegador, paginas visitadas y tiempos de
            acceso).
          </p>

          <h2>3. Finalidad del tratamiento</h2>
          <p>
            Los datos se utilizan para gestionar consultas, mejorar la experiencia
            de usuario, elaborar estadisticas de uso y cumplir obligaciones
            legales. En su caso, tambien para el envio de comunicaciones
            informativas cuando exista consentimiento.
          </p>

          <h2>4. Base juridica</h2>
          <p>
            La base juridica del tratamiento es el consentimiento del interesado,
            la ejecucion de medidas precontractuales o contractuales y el
            cumplimiento de obligaciones legales aplicables.
          </p>

          <h2>5. Cesion de datos y terceros</h2>
          <p>
            No se cederan datos a terceros salvo obligacion legal. Determinados
            proveedores tecnologicos pueden acceder a datos como encargados del
            tratamiento, bajo los contratos y garantias exigidos por la
            normativa.
          </p>

          <h2>6. Derechos del usuario</h2>
          <p>
            El usuario puede ejercer los derechos de acceso, rectificacion,
            supresion, oposicion, limitacion y portabilidad enviando una solicitud
            a [EMAIL], acreditando su identidad.
          </p>

          <h2>7. Conservacion</h2>
          <p>
            Los datos se conservaran durante el tiempo necesario para cumplir la
            finalidad para la que fueron recabados y, posteriormente, durante los
            plazos legalmente establecidos.
          </p>
        </div>
      </section>
    </main>
  );
}
