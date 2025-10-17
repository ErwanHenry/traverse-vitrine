import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le Projet TRAVERSE | Coopération Transfrontalière France-Belgique',
  description: 'TRAVERSE est un projet Interreg France-Wallonie-Vlaanderen valorisant le patrimoine verrier par la réalité augmentée. Découvrez notre approche collaborative et nos objectifs européens.',
};

export default function ProjetPage() {
  const objectifs = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titre: 'Valorisation du Patrimoine',
      description: 'Sauvegarder et promouvoir 300 ans d\'histoire verrière de l\'Avesnois-Thiérache à travers des technologies immersives et accessibles.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titre: 'Tourisme Durable',
      description: 'Développer un tourisme cyclable et culturel le long de l\'EuroVélo 3, renforçant l\'attractivité de notre territoire transfrontalier.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      titre: 'Coopération Transfrontalière',
      description: 'Renforcer les liens entre France et Belgique à travers un héritage industriel commun et une vision partagée du développement territorial.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      titre: 'Innovation Technologique',
      description: 'Expérimenter la réalité augmentée, l\'intelligence artificielle et les technologies immersives pour une médiation culturelle innovante.',
    },
  ];

  const partenaires = [
    {
      nom: 'Université Polytechnique Hauts-de-France',
      role: 'Chef de file',
      contribution: 'Recherche & développement technologique, coordination scientifique du projet',
    },
    {
      nom: 'Écomusée de l\'Avesnois',
      role: 'Partenaire patrimonial français',
      contribution: 'Expertise historique, conservation des archives verrières, médiation culturelle',
    },
    {
      nom: 'Maison du Verre de Trélon',
      role: 'Partenaire culturel français',
      contribution: 'Démonstrations artisanales, ateliers pédagogiques, valorisation du savoir-faire',
    },
    {
      nom: 'Province de Hainaut (Belgique)',
      role: 'Partenaire institutionnel belge',
      contribution: 'Soutien institutionnel, promotion touristique transfrontalière',
    },
    {
      nom: 'Tourisme Wallonie-Picarde',
      role: 'Partenaire touristique belge',
      contribution: 'Promotion des circuits cyclables, accueil des visiteurs internationaux',
    },
  ];

  const plusValue = [
    {
      titre: 'Un patrimoine partagé',
      description: 'L\'industrie verrière n\'a jamais connu de frontières. Du XVIIe au XXe siècle, les maîtres verriers circulaient librement entre la France et la Belgique, partageant techniques et innovations. TRAVERSE reconnecte ce territoire morcelé par l\'Histoire.',
    },
    {
      titre: 'Complémentarité des expertises',
      description: 'Le projet combine l\'excellence académique française (UPHF) en technologies immersives avec le dynamisme touristique belge (Province de Hainaut). Cette synergie permet une innovation que chaque pays ne pourrait atteindre seul.',
    },
    {
      titre: 'Économie touristique transfrontalière',
      description: 'En reliant 15+ sites patrimoniaux de part et d\'autre de la frontière, TRAVERSE crée un écosystème touristique intégré générant des retombées économiques durables pour toute la région.',
    },
    {
      titre: 'Laboratoire d\'innovation européen',
      description: 'TRAVERSE sert de modèle pour la valorisation numérique du patrimoine industriel européen. Les méthodologies développées seront transférables à d\'autres régions et filières (textile, sidérurgie, etc.).',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <Container className="relative py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Projet Interreg France-Wallonie-Vlaanderen 2021-2027
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              TRAVERSE : Tourisme, Réalité Augmentée et Valorisation du Patrimoine Verrier
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Un projet de coopération transfrontalière innovant pour préserver et transmettre
              300 ans d'histoire industrielle commune entre la France et la Belgique.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Cofinancé par le FEDER
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Durée : 2024-2027
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                5 partenaires transfrontaliers
              </div>
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

      {/* Objectifs Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Les objectifs du projet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TRAVERSE poursuit 4 objectifs complémentaires au service d'un développement
              territorial durable et innovant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectifs.map((objectif, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                    {objectif.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{objectif.titre}</h3>
                    <p className="text-gray-700 leading-relaxed">{objectif.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Plus-value transfrontalière */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">La plus-value de la coopération transfrontalière</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pourquoi ce projet n'aurait pas pu voir le jour sans la collaboration
              franco-belge ?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {plusValue.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold">{item.titre}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="text-2xl font-bold mb-3">Reconnaissance européenne</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              TRAVERSE a été sélectionné parmi 120 candidatures pour son caractère
              exemplaire en matière de coopération transfrontalière et d'innovation
              numérique au service du patrimoine.
            </p>
          </div>
        </Container>
      </section>

      {/* Partenaires Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Les partenaires du projet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 organisations françaises et belges unies par une vision commune
            </p>
          </div>

          <div className="space-y-6">
            {partenaires.map((partenaire, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold mr-3">{partenaire.nom}</h3>
                      {index === 0 && (
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          Chef de file
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-2">{partenaire.role}</p>
                    <p className="text-gray-700">{partenaire.contribution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/projet/partenaires" variant="primary" size="lg">
              En savoir plus sur les partenaires
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-circuit-1/10 to-circuit-1/5 border-2 border-circuit-1/20 hover:shadow-xl transition-all">
              <svg className="w-16 h-16 mx-auto mb-4 text-circuit-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-bold mb-3">L'histoire du verre</h3>
              <p className="text-gray-700 mb-6">
                Découvrez 300 ans d'histoire industrielle verrière en Avesnois-Thiérache
              </p>
              <Button href="/projet/patrimoine" variant="outline" className="border-circuit-1 text-circuit-1 hover:bg-circuit-1 hover:text-white">
                Explorer le patrimoine
              </Button>
            </Card>

            <Card className="text-center bg-gradient-to-br from-circuit-3/10 to-circuit-3/5 border-2 border-circuit-3/20 hover:shadow-xl transition-all">
              <svg className="w-16 h-16 mx-auto mb-4 text-circuit-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Innovation AR & IA</h3>
              <p className="text-gray-700 mb-6">
                Explorez les technologies immersives au service du patrimoine
              </p>
              <Button href="/projet/innovation" variant="outline" className="border-circuit-3 text-circuit-3 hover:bg-circuit-3 hover:text-white">
                Découvrir l'innovation
              </Button>
            </Card>

            <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 hover:shadow-xl transition-all">
              <svg className="w-16 h-16 mx-auto mb-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Les 5 circuits</h3>
              <p className="text-gray-700 mb-6">
                Parcourez 140 km de patrimoine verrier le long de l'EuroVélo 3
              </p>
              <Button href="/circuits" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Voir les circuits
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
