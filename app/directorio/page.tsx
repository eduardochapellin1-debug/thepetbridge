import type { Metadata } from "next";
import DirectorioClient from "./DirectorioClient";

export const metadata: Metadata = {
  title: "Directorio de Servicios para Mascotas en España | The Pet Bridge",
  description:
    "Encuentra las mejores residencias caninas, seguros de viaje y clínicas 24h en España y Europa.",
};

export default function DirectorioPage() {
  return <DirectorioClient />;
}
