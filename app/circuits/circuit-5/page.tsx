import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Circuit 5 - Mémoire et Transmission | TRAVERSE',
  description: 'Circuit synthèse de 40 km reliant tous les sites pour une immersion complète dans le patrimoine verrier',
};

export default function Circuit5Page() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-circuit-5 via-orange-600 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Mémoire et Transmission</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Circuit synthèse reliant tous les sites pour une immersion complète
            </p>
            <div className="flex gap-6 mb-8">
              <div><span className="font-bold">40 km</span></div>
              <div><span className="font-bold">6-7h</span></div>
              <div><span className="font-bold">Sportive</span></div>
            </div>
            <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-circuit-5 hover:bg-gray-100">
              Télécharger l app AR
            </Button>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <h2 className="text-4xl font-bold mb-8 text-center">18 Stations AR</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Le circuit le plus complet pour les passionnés
          </p>
          <Card className="bg-gradient-to-r from-circuit-5/10 to-orange-100 border-l-4 border-circuit-5">
            <h3 className="text-2xl font-bold mb-4">Lancement officiel : The Kaspa Experience Berlin</h3>
            <p className="text-gray-700 mb-4">
              Ce circuit sera inauguré le <strong>13 septembre 2025</strong> lors du plus grand événement européen Kaspa à Berlin.
            </p>
            <p className="text-gray-700">
              Circuit synthèse reliant l ensemble des 4 autres circuits pour une expérience patrimoniale complète de 300 ans d histoire verrière.
            </p>
          </Card>
        </Container>
      </section>
    </div>
  );
}
