import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-emerald-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-600">The Pet Bridge</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tu conexión europea para viajar con mascotas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Información Legal</h4>
            <ul className="text-sm text-slate-600 space-y-3">
              <li><Link href="/aviso-legal" className="hover:text-emerald-600 transition-colors">Aviso Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-emerald-600 transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-600 transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Transparencia</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">
              Nota: Algunos enlaces son de afiliado. Esto nos ayuda a mantener el proyecto.
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-emerald-50 text-center">
          <p className="text-xs text-slate-400">© {currentYear} The Pet Bridge.</p>
        </div>
      </div>
    </footer>
  );
}