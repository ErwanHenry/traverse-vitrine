import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRAVERSE - Patrimoine Verrier en Réalité Augmentée | EuroVélo 3",
  description: "Découvrez 5 circuits AR valorisant 300 ans d'histoire verrière le long de l'EuroVélo 3. Projet Interreg France-Wallonie-Vlaanderen cofinancé par l'Union Européenne.",
  keywords: ["patrimoine verrier", "réalité augmentée", "EuroVélo 3", "Avesnois", "Thiérache", "Interreg", "tourisme cyclable", "AR", "IA"],
  authors: [{ name: "Université de Valenciennes" }],
  openGraph: {
    title: "TRAVERSE - AR Patrimoine Verrier",
    description: "5 circuits AR | 300 ans histoire verrière | EuroVélo 3",
    url: "https://traverse-eurovelo3.eu",
    siteName: "TRAVERSE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRAVERSE - Patrimoine Verrier en AR",
    description: "Découvrez l'histoire verrière en réalité augmentée le long de l'EuroVélo 3",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
