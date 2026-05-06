import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Directorio de Servicios para Mascotas en España | The Pet Bridge",
  description:
    "Encuentra residencias, seguros de viaje y clinicas veterinarias 24h para viajar con tu mascota por Espana y Europa.",
};

type DirectorioLayoutProps = {
  children: ReactNode;
};

export default function DirectorioLayout({ children }: DirectorioLayoutProps) {
  return children;
}
