'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Projet', href: '/projet' },
    { name: 'Circuits', href: '/circuits' },
    { name: 'Application AR', href: '/app-ar' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo TRAVERSE (gauche) */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="hidden md:block">
                <div className="text-xl font-bold text-gray-900">TRAVERSE</div>
                <div className="text-xs text-gray-600">Patrimoine Verrier AR</div>
              </div>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo Interreg (droite) */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.interreg-fwvl.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">EU</span>
              </div>
              <div className="text-xs">
                <div className="font-semibold text-blue-900">Interreg</div>
                <div className="text-blue-700">FWVL</div>
              </div>
            </a>
          </div>

          {/* Burger menu mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://www.interreg-fwvl.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-blue-600 font-medium mt-4"
            >
              Programme Interreg →
            </a>
          </div>
        )}
      </nav>

      {/* Bannière Interreg (obligation) */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2">
        <div className="container-custom flex items-center justify-center text-sm">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
          <span className="font-medium">Cofinancé par l'Union Européenne - FEDER</span>
        </div>
      </div>
    </header>
  );
}
