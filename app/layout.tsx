import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRAVERSE - Patrimoine Verrier en Réalité Augmentée | EuroVélo 3",
  description: "Découvrez 5 circuits AR valorisant 300 ans d'histoire verrière le long de l'EuroVélo 3. Projet Interreg France-Wallonie-Vlaanderen.",
  keywords: ["patrimoine verrier", "réalité augmentée", "EuroVélo 3", "Interreg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
