"use client";
import { useState } from "react";

export default function CalculatorEs() {
  const [origin, setOrigin] = useState("");
  const [result, setResult] = useState<string[] | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin === "eu") {
      setResult([
        "Microchip de identificación válido (norma ISO 11784/11785) implantado antes de la vacuna de la rabia.",
        "Vacunación válida contra la Rabia administrada al menos 21 días antes del viaje.",
        "Pasaporte Europeo para Animales de Compañía emitido por un veterinario autorizado.",
        "Tratamiento contra la tenia (Echinococcus multilocularis) solo para Irlanda, Malta, Finlandia o Noruega."
      ]);
    } else {
      setResult([
        "Microchip de identificación válido implantado antes de cualquier vacuna.",
        "Vacunación vigente contra la Rabia con certificado oficial.",
        "Test de Anticuerpos de la Rabia realizado en un laboratorio aprobado al menos 30 días después de la vacuna y 3 meses antes de viajar.",
        "Certificado Zoosanitario de la UE firmado por un veterinario oficial del país de origen.",
        "Entrada obligatoria a través de un Punto de Entrada de Viajeros designado."
      ]);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-left text-slate-800">
      <div className="bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2">🐾 Calculadora de Requisitos de Viaje</h1>
        <p className="text-sm text-slate-500 mb-8">Descubre al instante qué documentos y vacunas necesita tu mascota para su próximo viaje por Europa.</p>
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">¿Desde dónde viajas? (Origen)</label>
            <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm" required>
              <option value="">Selecciona una opción...</option>
              <option value="eu">Unión Europea</option>
              <option value="non-eu">Fuera de la Unión Europea (América, Reino Unido, etc.)</option>
            </select>
          </div>
          <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg transition shadow-sm">Calcular Requisitos</button>
        </form>
        {result && (
          <div className="mt-10 p-6 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <h2 className="text-lg font-bold text-slate-900 mb-4">📌 Requisitos Obligatorios:</h2>
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