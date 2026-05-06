type ResourceCardProps = {
  nombre: string;
  descripcion: string;
  link: string;
  categoria: "Espana" | "Internacional";
};

export default function ResourceCard({
  nombre,
  descripcion,
  link,
  categoria,
}: ResourceCardProps) {
  const categoriaLabel = categoria === "Espana" ? "España" : categoria;
  const badgeClasses =
    categoria === "Espana"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-sky-200 bg-sky-50 text-sky-700";

  return (
    <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">{nombre}</h2>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeClasses}`}
        >
          {categoriaLabel}
        </span>
      </div>

      <p className="mb-4 text-sm leading-6 text-slate-600">{descripcion}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-600"
      >
        Ver recurso
      </a>
    </article>
  );
}
