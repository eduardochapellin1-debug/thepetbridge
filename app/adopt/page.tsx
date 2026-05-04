import Link from "next/link";

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
        <nav className="mb-8 flex items-center gap-5 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link href="/adopt" className="text-emerald-700">
            Adopt
          </Link>
          <Link href="/services" className="hover:text-emerald-600">
            Services
          </Link>
          <Link href="/travel" className="hover:text-emerald-600">
            EU Travel
          </Link>
        </nav>

        <section className="rounded-2xl border border-sky-100 bg-white p-8 shadow-sm">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">Adopt</h1>
          <p className="leading-7 text-slate-600">
            This is a placeholder page for future adoption listings, rescue
            partner profiles, and practical guides for adopting pets in Europe.
          </p>
        </section>
      </div>
    </div>
  );
}
