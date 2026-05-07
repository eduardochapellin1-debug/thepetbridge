export default function AvisoLegalPage() {
  return (
    <main className="flex-1 bg-emerald-50/40 px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
          Aviso Legal
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Ultima actualizacion: [DD/MM/AAAA]
        </p>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:text-emerald-600">
          <h2>1. Titular del sitio web</h2>
          <p>
            En cumplimiento con la normativa aplicable, se informa que este
            sitio web, [NOMBRE DEL SITIO], es gestionado por [NOMBRE O RAZON
            SOCIAL], con domicilio en [DIRECCION], NIF/CIF [NUMERO] y correo de
            contacto [EMAIL].
          </p>

          <h2>2. Objeto</h2>
          <p>
            El presente sitio web tiene como finalidad ofrecer informacion,
            comparativas y recomendaciones sobre productos y servicios
            relacionados con mascotas. Parte del contenido puede incluir enlaces
            de afiliacion a terceros.
          </p>

          <h2>3. Condiciones de uso</h2>
          <p>
            El acceso y uso del sitio web atribuye la condicion de usuario e
            implica la aceptacion de estas condiciones. El usuario se compromete
            a realizar un uso adecuado de los contenidos y a no emplearlos para
            actividades contrarias a la ley, la moral o el orden publico.
          </p>

          <h2>4. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del sitio web (textos, imagenes, diseno, logos,
            codigo fuente y demas elementos) son titularidad de [NOMBRE DEL
            TITULAR] o de terceros con licencia, y estan protegidos por la
            normativa de propiedad intelectual e industrial.
          </p>

          <h2>5. Responsabilidad</h2>
          <p>
            [NOMBRE DEL SITIO] no garantiza la ausencia de errores en los
            contenidos ni la disponibilidad continua del sitio. Tampoco se hace
            responsable del uso que los usuarios hagan de la informacion
            publicada ni de las decisiones de compra tomadas a traves de enlaces
            externos.
          </p>

          <h2>6. Legislacion aplicable</h2>
          <p>
            Este aviso legal se rige por la legislacion espanola. Para cualquier
            controversia, las partes se someten a los juzgados y tribunales de
            [CIUDAD], salvo disposicion legal en contrario.
          </p>
        </div>
      </section>
    </main>
  );
}
