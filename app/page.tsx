import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';

export default function Home() {
  const circuits = [
    {
      id: 1,
      name: 'La Route des Maîtres Verriers',
      distance: '22 km',
      color: 'bg-circuit-1',
      description: 'Découvrez les techniques traditionnelles du soufflage de verre entre Trélon et Fourmies.',
    },
    {
      id: 2,
      name: 'Frontières et Commerce Verrier',
      distance: '18 km',
      color: 'bg-circuit-2',
      description: 'Explorez les routes commerciales transfrontalières du verre au XVIIe siècle.',
    },
    {
      id: 3,
      name: 'Innovation et Modernité',
      distance: '35 km',
      color: 'bg-circuit-3',
      description: 'Comparez l\'évolution des techniques verrières du XIXe au XXIe siècle.',
    },
    {
      id: 4,
      name: 'Nature et Ressources',
      distance: '25 km',
      color: 'bg-circuit-4',
      description: 'Suivez le parcours de la matière première : du sable siliceux au verre soufflé.',
    },
    {
      id: 5,
      name: 'Mémoire et Transmission',
      distance: '40 km',
      color: 'bg-circuit-5',
      description: 'Circuit synthèse reliant tous les sites pour une immersion complète.',
    },
  ];

  const stats = [
    { value: '5', label: 'Circuits touristiques' },
    { value: '140 km', label: 'De parcours cyclables' },
    { value: '15+', label: 'Sites patrimoniaux' },
    { value: '300 ans', label: 'D\'histoire verrière' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Projet Interreg France-Wallonie-Vlaanderen
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Redécouvrez le patrimoine verrier en{' '}
              <span className="text-accent">réalité augmentée</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              5 circuits immersifs le long de l\'EuroVélo 3 pour explorer 300 ans d\'histoire
              industrielle verrière en Avesnois-Thiérache
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/circuits" variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Découvrir les circuits
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>

              <Button href="/app-ar" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Télécharger l\'app AR
              </Button>
            </div>
          </div>
        </Container>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Un projet européen innovant
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                TRAVERSE valorise le patrimoine industriel verrier de l\'Avesnois-Thiérache
                grâce à la <strong>réalité augmentée</strong> et à l\'<strong>intelligence artificielle</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Découvrez 300 ans d\'histoire à travers 5 circuits cyclables immersifs
                le long de l\'EuroVélo 3, reliant la France et la Belgique.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Patrimoine Authentique</h3>
                    <p className="text-gray-600">Sites historiques verriers du XVIIe au XXe siècle</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Coopération Transfrontalière</h3>
                    <p className="text-gray-600">Projet France-Belgique cofinancé par l\'UE</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Technologies Immersives</h3>
                    <p className="text-gray-600">Application AR + 6 agents IA spécialisés</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder pour image/vidéo */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Vidéo de présentation (à venir)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Circuits Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Les 5 circuits TRAVERSE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Parcourez 140 km de patrimoine verrier le long de l\'EuroVélo 3
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {circuits.map((circuit) => (
              <Card
                key={circuit.id}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${circuit.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl mb-4`}>
                  {circuit.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{circuit.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {circuit.distance}
                </div>
                <p className="text-gray-700 mb-4">{circuit.description}</p>
                <Button href={`/circuits/circuit-${circuit.id}`} variant="outline" size="sm" className="w-full">
                  Découvrir →
                </Button>
              </Card>
            ))}

            {/* Card spéciale "Voir tous les circuits" */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-white hover:shadow-xl transition-all duration-300">
              <div className="h-full flex flex-col justify-center items-center text-center py-8">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">140 km</h3>
                <p className="mb-6">de découvertes patrimoniales</p>
                <Button href="/circuits" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Voir tous les circuits
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à découvrir le patrimoine verrier ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Téléchargez l\'application AR TRAVERSE et commencez votre exploration dès maintenant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Installer l\'application
              </Button>
              <Button href="/circuits" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Explorer les circuits
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
