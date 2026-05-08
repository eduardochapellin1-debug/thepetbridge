import React from 'react';

export default function Contacto() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-emerald-600 mb-6 text-center">Contacta con Nosotros</h1>
      <p className="text-center text-gray-600 mb-10">
        ¿Tienes alguna duda sobre cómo viajar con tu mascota o quieres colaborar con nosotros? Estamos aquí para ayudarte.
      </p>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800">Email de Soporte</h3>
            <p className="text-emerald-600 font-medium">info@thepetbridge.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Horario de Atención</h3>
            <p className="text-gray-500 text-sm">Lunes a Viernes: 9:00 - 18:00 (CET)</p>
          </div>
          <p className="text-xs text-gray-400 italic pt-4 border-t">
            Nota: Al contactarnos, aceptas que procesemos tus datos únicamente para responder a tu consulta.
          </p>
        </div>
      </div>
    </div>
  );
}