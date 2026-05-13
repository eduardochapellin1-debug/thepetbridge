'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 mt-auto block border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Columna 1: Info */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">The Pet Bridge</h3>
            <p className="text-sm opacity-80">Connecting pets and families across Europe.</p>
          </div>

          {/* Columna 2: Recursos y Blog */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Our Blog & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Documentación AdSense Obligatoria (Multiidioma Fijo) */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Legal Information</h3>
            
            <div className="space-y-4 text-sm">
              {/* Bloque Español */}
              <div>
                <span className="text-xs text-emerald-400 block font-semibold">Español:</span>
                <div className="space-x-2 opacity-80">
                  <Link href="/legal/privacidad-es" className="hover:text-emerald-400 underline">Privacidad</Link>
                  <span>•</span>
                  <Link href="/legal/cookies-es" className="hover:text-emerald-400 underline">Cookies</Link>
                </div>
              </div>

              {/* Bloque Inglés */}
              <div>
                <span className="text-xs text-emerald-400 block font-semibold">English:</span>
                <div className="space-x-2 opacity-80">
                  <Link href="/legal/privacy-en" className="hover:text-emerald-400 underline">Privacy</Link>
                  <span>•</span>
                  <Link href="/legal/cookies-en" className="hover:text-emerald-400 underline">Cookies</Link>
                </div>
              </div>

              {/* Bloque Francés */}
              <div>
                <span className="text-xs text-emerald-400 block font-semibold">Français:</span>
                <div className="space-x-2 opacity-80">
                  <Link href="/legal/confidentialite-fr" className="hover:text-emerald-400 underline">Confidentialité</Link>
                  <span>•</span>
                  <Link href="/legal/cookies-fr" className="hover:text-emerald-400 underline">Cookies</Link>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} The Pet Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}