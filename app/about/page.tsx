import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-emerald-600 mb-6 text-center">Sobre The Pet Bridge</h1>
      <div className="prose prose-lg text-gray-600">
        <p className="mb-4">
          The Pet Bridge nació con una misión clara: eliminar las fronteras para las personas que viajan con sus mascotas por Europa.
        </p>
        <p className="mb-4">
          Sabemos que tu perro o tu gato no son solo animales, son parte de tu familia. Por eso, hemos creado este directorio internacional para conectar a dueños responsables con los mejores servicios, seguros y consejos de viaje en todo el continente.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 text-center">Nuestros Valores</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Transparencia:</strong> Solo recomendamos servicios que nosotros mismos usaríamos.</li>
          <li><strong>Bienestar Animal:</strong> Priorizamos la salud y seguridad de las mascotas.</li>
          <li><strong>Conectividad:</strong> Facilitamos el acceso a información vital en múltiples idiomas.</li>
        </ul>
      </div>
    </div>
  );
}
