import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import { I18nProvider } from "@/app/i18n/I18nProvider";
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
    google: "IALxR5eKG0UmzRIRK-XO2XJBFdSk0HhzemtfvR1P67k", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
        <main className="flex-1">
          {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
