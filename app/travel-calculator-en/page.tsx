"use client";
import { useState } from "react";

export default function CalculatorEn() {
  const [origin, setOrigin] = useState("");
  const [result, setResult] = useState<string[] | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin === "eu") {
      setResult([
        "Valid identification microchip (ISO 11784/11785) implanted before the rabies vaccine.",
        "Valid Rabies vaccination administered at least 21 days prior to travel.",
        "European Pet Passport issued by an authorized veterinarian.",
        "Tapeworm treatment (Echinococcus multilocularis) required only for Ireland, Malta, Finland, or Norway."
      ]);
    } else {
      setResult([
        "Valid identification microchip implanted before any vaccination.",
        "Current Rabies vaccination with an official certificate.",
        "Rabies Antibody Test performed in an approved lab at least 30 days after vaccination and 3 months before travel.",
        "EU Health Certificate signed by an official veterinarian in the country of origin.",
        "Mandatory entry through a designated Travelers' Point of Entry."
      ]);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-left text-slate-800">
      <div className="bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">🐾 Pet Travel Requirements Calculator</h1>
        <p className="text-sm text-slate-500 mb-8">Instantly discover which documents and vaccines your pet needs for their next trip across Europe.</p>
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Where are you traveling from? (Origin)</label>
            <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm" required>
              <option value="">Select an option...</option>
              <option value="eu">European Union</option>
              <option value="non-eu">Outside the European Union (Americas, UK, etc.)</option>
            </select>
          </div>
          <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg transition shadow-sm">Calculate Requirements</button>
        </form>
        {result && (
          <div className="mt-10 p-6 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4">📌 Mandatory Requirements:</h2>
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