import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financement Interreg FEDER | TRAVERSE - Programme France-Wallonie-Vlaanderen',
  description: 'TRAVERSE est cofinancé par le Fonds européen de développement régional (FEDER) dans le cadre du programme Interreg France-Wallonie-Vlaanderen 2021-2027. Découvrez le budget, les partenaires et la gouvernance européenne.',
};

export default function InterregPage() {
  const budget = {
    total: 1850000,
    feder: 1110000,
    national: 740000,
    tauxCofinancement: 60,
  };

  const repartitionBudget = [
    {
      poste: 'Développement Technologique AR/IA',
      montant: 680000,
      pourcentage: 36.7,
      description: 'Application mobile, agents IA, infrastructure cloud, développement logiciel',
    },
    {
      poste: 'Recherche & Innovation',
      montant: 420000,
      pourcentage: 22.7,
      description: 'Recherche universitaire UPHF, études patrimoniales, prototypage technologies immersives',
    },
    {
      poste: 'Médiation Culturelle & Contenus',
      montant: 310000,
      pourcentage: 16.8,
      description: 'Production contenus AR, scénarisation historique, audioguides, traductions',
    },
    {
      poste: 'Aménagements Cyclables & Signalétique',
      montant: 240000,
      pourcentage: 13.0,
      description: 'Bornes QR, panneaux d\'information, mobilier urbain, sécurisation parcours',
    },
    {
      poste: 'Communication & Promotion',
      montant: 120000,
      pourcentage: 6.5,
      description: 'Site web, réseaux sociaux, campagnes marketing transfrontalières, événements',
    },
    {
      poste: 'Coordination & Gestion de Projet',
      montant: 80000,
      pourcentage: 4.3,
      description: 'Coordination partenariale, reporting Interreg, audit financier, évaluation',
    },
  ];

  const partenairesFinanceurs = [
    {
      nom: 'Union Européenne',
      logo: '🇪🇺',
      contribution: 1110000,
      type: 'FEDER',
      pourcentage: 60,
    },
    {
      nom: 'Région Hauts-de-France',
      logo: '🇫🇷',
      contribution: 370000,
      type: 'National',
      pourcentage: 20,
    },
    {
      nom: 'Province de Hainaut (Belgique)',
      logo: '🇧🇪',
      contribution: 185000,
      type: 'National',
      pourcentage: 10,
    },
    {
      nom: 'Université Polytechnique Hauts-de-France',
      logo: '🎓',
      contribution: 185000,
      type: 'Propre',
      pourcentage: 10,
    },
  ];

  const jalons = [
    {
      phase: 'Phase 1 : Conception',
      periode: 'Janvier 2024 - Juin 2024',
      statut: 'completed',
      livrables: [
        'Études patrimoniales complétées',
        'Cahier des charges techniques validé',
        'Identité visuelle et charte graphique',
        'Architecture logicielle de l\'application AR',
      ],
    },
    {
      phase: 'Phase 2 : Développement',
      periode: 'Juillet 2024 - Décembre 2025',
      statut: 'in_progress',
      livrables: [
        'Application mobile AR (iOS + Android)',
        '6 agents IA conversationnels opérationnels',
        'Production de 45+ expériences de réalité augmentée',
        'Aménagement de 15+ sites patrimoniaux',
      ],
    },
    {
      phase: 'Phase 3 : Déploiement',
      periode: 'Janvier 2026 - Juin 2026',
      statut: 'pending',
      livrables: [
        'Lancement officiel des 5 circuits',
        'Formation des acteurs touristiques locaux',
        'Campagne de communication européenne',
        'Événement inaugural transfrontalier',
      ],
    },
    {
      phase: 'Phase 4 : Évaluation',
      periode: 'Juillet 2026 - Décembre 2027',
      statut: 'pending',
      livrables: [
        'Rapport d\'impact socio-économique',
        'Évaluation de la fréquentation touristique',
        'Bilan carbone du projet',
        'Recommandations pour réplication européenne',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <Container className="relative py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🇪🇺</div>
                  <div className="text-left">
                    <div className="text-sm font-semibold uppercase tracking-wide">Programme Interreg</div>
                    <div className="text-xs text-white/80">France-Wallonie-Vlaanderen 2021-2027</div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Un projet cofinancé par l'Union Européenne
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Le FEDER investit {(budget.feder / 1000000).toFixed(1)}M€ dans TRAVERSE pour renforcer
              la coopération transfrontalière et valoriser notre patrimoine commun
            </p>

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Taux de cofinancement FEDER : {budget.tauxCofinancement}%
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

      {/* Budget Overview */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Budget du projet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un investissement de {(budget.total / 1000000).toFixed(2)}M€ pour le développement territorial transfrontalier
            </p>
          </div>

          {/* Budget Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="text-5xl mb-3">🇪🇺</div>
              <div className="text-3xl font-bold text-blue-900 mb-2">
                {(budget.feder / 1000000).toFixed(2)}M€
              </div>
              <div className="text-sm font-semibold text-blue-700 mb-1">FEDER (UE)</div>
              <div className="text-xs text-blue-600">{budget.tauxCofinancement}% du budget total</div>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <div className="text-5xl mb-3">🏛️</div>
              <div className="text-3xl font-bold text-green-900 mb-2">
                {(budget.national / 1000000).toFixed(2)}M€
              </div>
              <div className="text-sm font-semibold text-green-700 mb-1">Contrepartie nationale</div>
              <div className="text-xs text-green-600">{100 - budget.tauxCofinancement}% du budget total</div>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <div className="text-5xl mb-3">💰</div>
              <div className="text-3xl font-bold text-purple-900 mb-2">
                {(budget.total / 1000000).toFixed(2)}M€
              </div>
              <div className="text-sm font-semibold text-purple-700 mb-1">Budget total</div>
              <div className="text-xs text-purple-600">Période 2024-2027</div>
            </Card>

            <Card className="text-center bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
              <div className="text-5xl mb-3">🤝</div>
              <div className="text-3xl font-bold text-amber-900 mb-2">5</div>
              <div className="text-sm font-semibold text-amber-700 mb-1">Partenaires</div>
              <div className="text-xs text-amber-600">France + Belgique</div>
            </Card>
          </div>

          {/* Répartition Budget */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Répartition budgétaire par poste</h3>

            <div className="space-y-4">
              {repartitionBudget.map((poste, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-4 hover:bg-gray-50 transition-colors rounded-r-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{poste.poste}</h4>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {poste.pourcentage.toFixed(1)}%
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        {(poste.montant / 1000).toFixed(0)}K€
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{poste.description}</p>

                  {/* Progress Bar */}
                  <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-500"
                      style={{ width: `${poste.pourcentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t-2 border-gray-200 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">TOTAL</span>
              <span className="text-3xl font-bold text-primary">{(budget.total / 1000).toFixed(0)}K€</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Partenaires Financeurs */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Les financeurs du projet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 partenaires publics mobilisés pour le développement transfrontalier
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partenairesFinanceurs.map((partenaire, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-5xl mr-4">{partenaire.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold">{partenaire.nom}</h3>
                      <p className="text-sm text-gray-600">{partenaire.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {(partenaire.contribution / 1000).toFixed(0)}K€
                    </div>
                    <div className="text-sm text-gray-600">{partenaire.pourcentage}%</div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-red-500' : index === 2 ? 'bg-yellow-500' : 'bg-purple-600'}`}
                    style={{ width: `${partenaire.pourcentage * 2.5}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Jalons du Projet */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Calendrier et jalons du projet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 phases de 2024 à 2027 pour un déploiement progressif et maîtrisé
            </p>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-8">
              {jalons.map((jalon, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-4 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white hidden md:flex ${
                    jalon.statut === 'completed' ? 'bg-green-500' :
                    jalon.statut === 'in_progress' ? 'bg-blue-500' :
                    'bg-gray-300'
                  }`}>
                    {jalon.statut === 'completed' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    ) : jalon.statut === 'in_progress' ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>

                  <Card className={`${
                    jalon.statut === 'completed' ? 'bg-green-50 border-2 border-green-200' :
                    jalon.statut === 'in_progress' ? 'bg-blue-50 border-2 border-blue-200' :
                    'bg-gray-50 border border-gray-200'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{jalon.phase}</h3>
                        <p className="text-gray-600 font-medium">{jalon.periode}</p>
                      </div>
                      <div className={`mt-2 md:mt-0 inline-block px-4 py-2 rounded-full text-sm font-bold ${
                        jalon.statut === 'completed' ? 'bg-green-500 text-white' :
                        jalon.statut === 'in_progress' ? 'bg-blue-500 text-white' :
                        'bg-gray-300 text-gray-700'
                      }`}>
                        {jalon.statut === 'completed' ? '✓ Terminé' :
                         jalon.statut === 'in_progress' ? '⚙️ En cours' :
                         '⏳ À venir'}
                      </div>
                    </div>

                    <h4 className="font-bold mb-2 text-gray-700">Livrables clés :</h4>
                    <ul className="space-y-2">
                      {jalon.livrables.map((livrable, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <svg className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                            jalon.statut === 'completed' ? 'text-green-500' :
                            jalon.statut === 'in_progress' ? 'text-blue-500' :
                            'text-gray-400'
                          }`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          {livrable}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Programme Interreg */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Le programme Interreg France-Wallonie-Vlaanderen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un programme de coopération transfrontalière au service du développement territorial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-4xl mr-3">🇪🇺</span>
                  Qu'est-ce qu'Interreg ?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Interreg</strong> est l'un des instruments majeurs de la politique de cohésion
                  de l'Union européenne. Il finance des projets de coopération transfrontalière, transnationale
                  et interrégionale dans toute l'Europe.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le programme <strong>France-Wallonie-Vlaanderen 2021-2027</strong> dispose d'un budget
                  de <strong>139 millions d'euros FEDER</strong> pour renforcer la coopération entre
                  la France, la Wallonie et la Flandre.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Objectif 1 : Économie intelligente
                  </h4>
                  <p className="text-sm text-gray-700">Renforcer la recherche, le développement technologique et l'innovation</p>
                </Card>

                <Card className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-l-4 border-secondary">
                  <h4 className="font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Objectif 2 : Économie verte
                  </h4>
                  <p className="text-sm text-gray-700">Promouvoir l'adaptation au changement climatique et la protection de l'environnement</p>
                </Card>

                <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent">
                  <h4 className="font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Objectif 3 : Coopération sociale
                  </h4>
                  <p className="text-sm text-gray-700">Améliorer la qualité de vie et renforcer l'identité transfrontalière</p>
                </Card>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4">TRAVERSE s'inscrit dans :</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="font-bold text-primary mb-2">📍 Axe prioritaire 3</div>
                    <p className="text-sm text-gray-700">
                      "Une zone transfrontalière mieux connectée et attractive"
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="font-bold text-secondary mb-2">🎯 Objectif spécifique 3.2</div>
                    <p className="text-sm text-gray-700">
                      "Renforcer l'attractivité touristique et culturelle du territoire transfrontalier"
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="font-bold text-accent mb-2">💡 Innovation</div>
                    <p className="text-sm text-gray-700">
                      Projet pilote en matière de technologies immersives appliquées au patrimoine
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  href="https://www.interreg-fwvl.eu"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Site officiel Interreg FWVL
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Transparence & Accountability */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-100 rounded-full p-4 mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Transparence et conformité</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                TRAVERSE respecte l'ensemble des obligations réglementaires du programme Interreg
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center text-green-900">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Obligations respectées
                </h3>
                <ul className="space-y-2 text-sm text-green-900">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Affichage des logos obligatoires (UE, Interreg, FEDER)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Mention du cofinancement européen sur tous supports
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Lien vers le site officiel du programme Interreg
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Présentation des résultats transfrontaliers
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Liste des partenaires avec rôles et contributions
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Section dédiée au financement européen
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Coordonnées de contact accessibles
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Présence sur au moins 1 réseau social (LinkedIn)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center text-blue-900">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Rapports et audits
                </h3>
                <ul className="space-y-3 text-sm text-blue-900">
                  <li className="border-l-4 border-blue-400 pl-3">
                    <strong>Rapports semestriels</strong>
                    <p className="text-xs text-blue-700 mt-1">Avancement technique et financier transmis au Secrétariat conjoint</p>
                  </li>
                  <li className="border-l-4 border-blue-400 pl-3">
                    <strong>Audit financier indépendant</strong>
                    <p className="text-xs text-blue-700 mt-1">Contrôle annuel de la conformité des dépenses certifiées</p>
                  </li>
                  <li className="border-l-4 border-blue-400 pl-3">
                    <strong>Évaluation d'impact</strong>
                    <p className="text-xs text-blue-700 mt-1">Mesure des retombées socio-économiques et touristiques (2027)</p>
                  </li>
                  <li className="border-l-4 border-blue-400 pl-3">
                    <strong>Capitalisation transnationale</strong>
                    <p className="text-xs text-blue-700 mt-1">Partage des bonnes pratiques avec d'autres programmes Interreg</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <p className="text-sm text-gray-700">
                <strong className="text-yellow-900">⚠️ Clause de non-responsabilité :</strong> Le contenu de ce site relève de la seule responsabilité de ses auteurs et ne reflète pas nécessairement l'opinion de l'Union européenne. Ni la Commission européenne ni aucune autre autorité participant au programme Interreg France-Wallonie-Vlaanderen ne sauraient être tenues pour responsables de l'usage qui pourrait être fait des informations qu'il contient.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Questions sur le financement du projet ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour toute question concernant le budget,
              les partenaires ou les obligations Interreg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous contacter
              </Button>
              <Button href="/projet" variant="outline" size="lg">
                Retour au projet
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
