import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Télécharger l Application AR TRAVERSE | iOS & Android',
  description: 'Téléchargez gratuitement l application TRAVERSE pour vivre une expérience de réalité augmentée unique le long des circuits EuroVélo 3.',
};

export default function AppARPage() {
  const features = [
    { icon: '🎭', title: 'Réalité Augmentée Immersive', description: '45+ expériences AR reconstituant 300 ans d histoire verrière en 3D' },
    { icon: '🤖', title: '6 Agents IA Spécialisés', description: 'Guides virtuels experts (Maître Augustin, Marchand Willem, Ingénieur Sophie)' },
    { icon: '🗺️', title: 'Navigation GPS Intégrée', description: 'Géolocalisation précise sur les 5 circuits avec mode hors ligne' },
    { icon: '🏆', title: 'Gamification & Badges', description: 'Collectionnez des badges, débloquez du contenu exclusif' },
    { icon: '📱', title: 'Mode Hors Ligne', description: 'Téléchargez les circuits à l avance (120 MB par circuit)' },
    { icon: '🌍', title: 'Multilingue', description: 'Français, English, Nederlands' }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Application Officielle TRAVERSE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explorez le passé en <span className="text-accent">réalité augmentée</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Téléchargez gratuitement l application TRAVERSE et vivez une expérience immersive unique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://apps.apple.com/app/traverse-ar" className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-xl font-semibold transition-all text-lg shadow-xl">
                <span className="mr-3">🍎</span>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=eu.traverse.ar" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all text-lg shadow-xl">
                <span className="mr-3">🤖</span>
                Google Play
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">
              ✓ Gratuit • 🌍 Multilingue (FR/EN/NL) • 📱 Mode hors ligne disponible
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fonctionnalités de l application</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expérience AR complète pour explorer 300 ans d histoire verrière
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commencez votre aventure dès maintenant !</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Téléchargez gratuitement l application TRAVERSE et explorez les circuits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/circuits" variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Découvrir les circuits
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Nous contacter
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
