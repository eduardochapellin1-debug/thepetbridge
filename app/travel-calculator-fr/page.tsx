"use client";
import { useState } from "react";

export default function CalculatorFr() {
  const [origin, setOrigin] = useState("");
  const [result, setResult] = useState<string[] | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin === "eu") {
      setResult([
        "Puce électronique d'identification valide (norme ISO 11784/11785) implantée avant le vaccin contre la rage.",
        "Vaccination antirabique valide administrée au moins 21 jours avant le voyage.",
        "Passeport européen pour animaux de compagnie délivré por un vétérinaire agréé.",
        "Traitement contre le ténia (Echinococcus multilocularis) uniquement pour l'Irlande, Malte, la Finlande ou la Norvège."
      ]);
    } else {
      setResult([
        "Puce électronique d'identification valide implantée avant toute vaccination.",
        "Vaccination antirabique en cours de validité avec certificat officiel.",
        "Titrage des anticorps antirabiques effectué dans un laboratoire agréé au moins 30 jours après le vaccin et 3 mois avant le voyage.",
        "Certificat sanitaire de l'UE signé par un vétérinaire officiel du pays d'origine.",
        "Entrée obligatoire par un point d'entrée désigné pour le contrôle."
      ]);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-left text-slate-800">
      <div className="bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">🐾 Calculateur de Conditions de Voyage</h1>
        <p className="text-sm text-slate-500 mb-8">Découvrez instantanément de quels documents et vaccins votre animal a besoin pour son prochain voyage en Europe.</p>
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">D'où voyagez-vous ? (Origine)</label>
            <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm" required>
              <option value="">Sélectionnez une option...</option>
              <option value="eu">Union Européenne</option>
              <option value="non-eu">Hors de l'Union Européenne (Amériques, Royaume-Uni, etc.)</option>
            </select>
          </div>
          <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg transition shadow-sm">Calculer les Conditions</button>
        </form>
        {result && (
          <div className="mt-10 p-6 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4">📌 Conditions Obligatoires:</h2>
            <ul className="space-y-3">
              {result.map((step, i) => (
                <li key={i} className="flex items-start text-sm text-slate-700">
                  <span className="w-5 h-5 bg-emerald-100 text-emerald-700 font-bold rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">{i + 1}</span>
                  <p className="flex-1">{step}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}