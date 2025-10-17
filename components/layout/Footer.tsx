import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Section principale */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TRAVERSE</h3>
            <p className="text-sm leading-relaxed">
              Projet européen de valorisation du patrimoine verrier en réalité augmentée le long de l'EuroVélo 3.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Réseaux sociaux (à activer) */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projet" className="hover:text-white transition-colors">Le Projet</Link></li>
              <li><Link href="/projet/patrimoine" className="hover:text-white transition-colors">Patrimoine Verrier</Link></li>
              <li><Link href="/projet/innovation" className="hover:text-white transition-colors">Innovation AR/IA</Link></li>
              <li><Link href="/circuits" className="hover:text-white transition-colors">Les 5 Circuits</Link></li>
              <li><Link href="/app-ar" className="hover:text-white transition-colors">Application AR</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Partenaires */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Partenaires</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Université de Valenciennes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Écomusée Avesnois</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Musée Textile Fourmies</a></li>
              <li><Link href="/projet/partenaires" className="hover:text-white transition-colors">Tous les partenaires →</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@traverse-eurovelo3.eu" className="hover:text-white transition-colors">
                  contact@traverse-eurovelo3.eu
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Université de Valenciennes<br />France</span>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Formulaire de contact →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section Interreg (obligatoire) */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logos partenaires */}
            <div className="flex items-center space-x-6">
              <a href="https://www.interreg-fwvl.eu" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EU</span>
                  </div>
                  <div className="text-xs text-gray-900">
                    <div className="font-bold">Interreg</div>
                    <div className="text-gray-600">FWVL</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Mention obligatoire */}
            <div className="text-center md:text-right text-sm">
              <p className="text-gray-400">
                Projet cofinancé par l'Union Européenne - FEDER
              </p>
              <p className="text-gray-400 mt-1">
                Programme Interreg VI France-Wallonie-Vlaanderen 2021-2027
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-2 md:space-y-0">
            <p>© {currentYear} TRAVERSE - Université de Valenciennes. Tous droits réservés.</p>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
              <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
