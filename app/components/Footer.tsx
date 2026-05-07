"use client";

import Link from "next/link";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Footer() {
  const { messages } = useI18n();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        
        {/* Columna 1: Marca */}
        <div>
          <h3 className="font-bold text-lg text-emerald-600 mb-4">The Pet Bridge</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {messages.footer.brandDescription}
          </p>
        </div>

        {/* Columna 2: Legal */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">{messages.footer.legalTitle}</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link href="/aviso-legal" className="hover:text-emerald-600">
                {messages.footer.legalNotice}
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-emerald-600">
                {messages.footer.privacyPolicy}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-emerald-600">
                {messages.footer.cookiePolicy}
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Transparencia */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">{messages.footer.transparencyTitle}</h4>
          <p className="text-[12px] text-gray-500 italic leading-snug">
            {messages.footer.affiliateDisclaimer}
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} The Pet Bridge. {messages.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
