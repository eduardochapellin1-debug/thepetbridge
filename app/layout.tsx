import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { I18nProvider } from "@/app/i18n/I18nProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Pet Bridge",
  description: "Your European pet connection",
  verification: {
    google: "IALXrRSeKGOUMZRIRK-XO2XJBFdSk0HhzemtfvR1P67k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Código base de Google AdSense necesario para los anuncios y el banner de cookies automático */}
        <Script
          async
          src="googlesyndication.com" // Reemplaza con tu ID de editor cuando te lo aprueben, o déjalo así temporalmente
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
        <I18nProvider>
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
