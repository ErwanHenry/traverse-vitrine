import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Circuit 4 - Nature et Ressources | TRAVERSE',
  description: 'Suivez le parcours de la matière première : du sable siliceux au verre soufflé sur 25 km',
};

export default function Circuit4Page() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-circuit-4 via-purple-600 to-purple-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Nature et Ressources</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Suivez le parcours de la matière première : du sable siliceux au verre soufflé
            </p>
            <div className="flex gap-6 mb-8">
              <div><span className="font-bold">25 km</span></div>
              <div><span className="font-bold">4h</span></div>
              <div><span className="font-bold">Facile à moyenne</span></div>
            </div>
            <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-circuit-4 hover:bg-gray-100">
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
          <h2 className="text-4xl font-bold mb-8 text-center">7 Stations AR</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            De la carrière de sable à l atelier de soufflage
          </p>
          <Card>
            <p className="text-gray-700">
              Circuit écologique explorant les ressources naturelles nécessaires à la fabrication du verre.
            </p>
          </Card>
        </Container>
      </section>
    </div>
  );
}
