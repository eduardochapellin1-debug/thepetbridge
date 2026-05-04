import Link from "next/link";

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50 to-white text-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
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

        <section className="rounded-2xl border border-sky-100 bg-white p-8 shadow-sm">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">
            Travel & Legal
          </h1>
          <p className="leading-7 text-slate-600">
            This is a placeholder page for EU pet passport guidance, local
            regulations, and checklist-based travel preparation resources.
          </p>
        </section>
      </div>
    </div>
  );
}
