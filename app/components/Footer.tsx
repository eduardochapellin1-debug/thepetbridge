import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        
        {/* Columna 1: Marca */}
        <div>
          <h3 className="font-bold text-lg text-emerald-600 mb-4">The Pet Bridge</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tu conexión europea para viajar con mascotas. Facilitamos la búsqueda de servicios 
            y seguros para que tú y tu mejor amigo lleguéis más lejos.
          </p>
        </div>

        {/* Columna 2: Legal */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/aviso-legal" className="hover:text-emerald-600">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-emerald-600">
                Politica de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-emerald-600">
                Politica de Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Transparencia */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Transparencia</h4>
          <p className="text-[12px] text-gray-500 italic leading-snug">
            Nota: Algunos de los enlaces en este sitio son enlaces de afiliado. 
            Podemos recibir una pequeña comisión si decides contratar un servicio, 
            sin coste extra para ti.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} The Pet Bridge. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
