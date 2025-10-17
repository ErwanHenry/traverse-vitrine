import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Les 5 Circuits TRAVERSE | 140 km de Patrimoine Verrier en Réalité Augmentée',
  description: 'Explorez 5 circuits cyclables immersifs le long de l\'EuroVélo 3. Découvrez 300 ans d\'histoire verrière grâce à la réalité augmentée et l\'intelligence artificielle.',
};

export default function CircuitsPage() {
  const circuits = [
    {
      id: 1,
      name: 'La Route des Maîtres Verriers',
      distance: '22 km',
      duree: '3-4h',
      difficulte: 'Facile',
      color: 'bg-circuit-1',
      textColor: 'text-circuit-1',
      borderColor: 'border-circuit-1',
      description: 'Découvrez les techniques traditionnelles du soufflage de verre entre Trélon et Fourmies.',
      longDescription: 'Ce circuit vous plonge dans l\'univers fascinant des maîtres verriers du XVIIe au XIXe siècle. Partez de la célèbre Maison du Verre de Trélon et suivez les traces des artisans qui ont fait la renommée de cette région. Grâce à la réalité augmentée, assistez à des démonstrations virtuelles de soufflage de verre, découvrez les secrets de fabrication des bouteilles et flacons, et échangez avec un agent IA incarnant un maître verrier de 1750.',
      sites: [
        { nom: 'Maison du Verre - Trélon', type: 'Musée actif', ar: true },
        { nom: 'Ancienne Verrerie Parant - Trélon', type: 'Ruines industrielles', ar: true },
        { nom: 'Four à pot - Fourmies', type: 'Vestiges techniques', ar: true },
        { nom: 'Église Saint-Pierre - Trélon', type: 'Vitraux historiques', ar: false },
      ],
      highlights: [
        'Démonstration de soufflage en direct (Maison du Verre)',
        '8 stations AR avec reconstitution 3D d\'ateliers du XVIIIe siècle',
        'Agent IA "Maître Augustin" spécialisé en techniques verrières',
        'Musée du Textile et de la Vie Sociale à Fourmies',
      ],
      accessibilite: 'Piste cyclable EuroVélo 3 entièrement aménagée. Convient aux familles.',
    },
    {
      id: 2,
      name: 'Frontières et Commerce Verrier',
      distance: '18 km',
      duree: '2-3h',
      difficulte: 'Facile',
      color: 'bg-circuit-2',
      textColor: 'text-circuit-2',
      borderColor: 'border-circuit-2',
      description: 'Explorez les routes commerciales transfrontalières du verre au XVIIe siècle.',
      longDescription: 'Traversez la frontière franco-belge sur les traces des marchands de verre. Ce circuit met en lumière l\'importance stratégique de cette région frontière pour le commerce du verre entre la France et les Pays-Bas espagnols. Les stations AR révèlent les anciennes routes marchandes, les postes de douane, et les techniques de contrebande du verre précieux.',
      sites: [
        { nom: 'Poste frontière historique - Anor', type: 'Site douanier', ar: true },
        { nom: 'Ancienne route commerciale', type: 'Chemin historique', ar: true },
        { nom: 'Borne frontière 1820', type: 'Monument historique', ar: false },
        { nom: 'Chapelle des Verriers - Chimay (BE)', type: 'Patrimoine religieux', ar: true },
      ],
      highlights: [
        '6 stations AR reconstituant les échanges commerciaux du XVIIe siècle',
        'Agent IA "Marchand Willem" racontant les routes du verre',
        'Carte interactive des flux commerciaux historiques',
        'Point de vue panoramique sur la vallée de l\'Helpe Majeure',
      ],
      accessibilite: 'Circuit transfrontalier. Passeport recommandé (zone Schengen). Piste cyclable continue.',
    },
    {
      id: 3,
      name: 'Innovation et Modernité',
      distance: '35 km',
      duree: '5-6h',
      difficulte: 'Moyenne',
      color: 'bg-circuit-3',
      textColor: 'text-circuit-3',
      borderColor: 'border-circuit-3',
      description: 'Comparez l\'évolution des techniques verrières du XIXe au XXIe siècle.',
      longDescription: 'Le circuit le plus complet ! Découvrez la révolution industrielle du verre avec l\'introduction des fours à bassin, la mécanisation, puis les innovations contemporaines (verre photovoltaïque, verres intelligents). Les expériences AR comparent côte à côte les méthodes artisanales de 1850 avec les chaînes de production automatisées modernes.',
      sites: [
        { nom: 'Écomusée de l\'Avesnois - Fourmies', type: 'Musée de territoire', ar: true },
        { nom: 'Site verrier industriel - Sars-Poteries', type: 'Friche reconvertie', ar: true },
        { nom: 'Centre de recherche UPHF - Valenciennes', type: 'Innovation contemporaine', ar: true },
        { nom: 'MusVerre - Sars-Poteries', type: 'Musée d\'art verrier', ar: false },
        { nom: 'Ancienne Verrerie Legras', type: 'Patrimoine Art Nouveau', ar: true },
      ],
      highlights: [
        '12 stations AR montrant 150 ans d\'évolution technologique',
        'Agent IA "Ingénieur Sophie" expert en innovations verrières',
        'Exposition permanente au MusVerre (plus de 4000 pièces)',
        'Démonstration de verre soufflé artistique contemporain',
      ],
      accessibilite: 'Circuit sportif avec quelques dénivelés. Prévoir une journée complète.',
    },
    {
      id: 4,
      name: 'Nature et Ressources',
      distance: '25 km',
      duree: '4h',
      difficulte: 'Facile à moyenne',
      color: 'bg-circuit-4',
      textColor: 'text-circuit-4',
      borderColor: 'border-circuit-4',
      description: 'Suivez le parcours de la matière première : du sable siliceux au verre soufflé.',
      longDescription: 'Un circuit écologique centré sur l\'origine naturelle du verre. Explorez les anciennes carrières de sable siliceux, les forêts fournissant le bois pour les fours, et les cours d\'eau utilisés pour le refroidissement. Les expériences AR montrent la transformation chimique du sable en verre et l\'impact environnemental de l\'industrie verrière à travers les siècles.',
      sites: [
        { nom: 'Ancienne carrière de sable - Eppe-Sauvage', type: 'Site naturel', ar: true },
        { nom: 'Forêt de Trélon', type: 'Ressource énergétique historique', ar: true },
        { nom: 'Cours d\'eau l\'Helpe Mineure', type: 'Ressource hydraulique', ar: false },
        { nom: 'Reconstitution de four à bois', type: 'Démonstration pédagogique', ar: true },
      ],
      highlights: [
        '7 stations AR expliquant la chimie du verre de façon ludique',
        'Agent IA "Géologue Émile" spécialisé en minéralogie',
        'Parcours nature avec panneaux pédagogiques sur la biodiversité',
        'Atelier participatif : "De la silice au gobelet"',
      ],
      accessibilite: 'Circuit nature avec chemins forestiers. VTC recommandé. Quelques passages non goudronnés.',
    },
    {
      id: 5,
      name: 'Mémoire et Transmission',
      distance: '40 km',
      duree: '6-7h',
      difficulte: 'Sportive',
      color: 'bg-circuit-5',
      textColor: 'text-circuit-5',
      borderColor: 'border-circuit-5',
      description: 'Circuit synthèse reliant tous les sites pour une immersion complète.',
      longDescription: 'Le grand circuit ! Reliez tous les sites majeurs du patrimoine verrier de l\'Avesnois-Thiérache en une journée mémorable. Ce parcours chronologique vous fait voyager de 1650 à 2025, avec 18 stations AR retraçant l\'épopée complète de l\'industrie verrière. Idéal pour les passionnés d\'histoire et de cyclotourisme.',
      sites: [
        { nom: 'Maison du Verre - Trélon', type: 'Point de départ', ar: true },
        { nom: 'Tous les sites des circuits 1 à 4', type: 'Parcours complet', ar: true },
        { nom: 'Château-musée de Fourmies', type: 'Patrimoine architectural', ar: false },
        { nom: 'MusVerre - Sars-Poteries', type: 'Point d\'arrivée', ar: true },
      ],
      highlights: [
        '18 stations AR couvrant 375 ans d\'histoire (1650-2025)',
        'Accès aux 6 agents IA du projet TRAVERSE',
        'Livret de route collecteur avec système de badges gamifié',
        'Diplôme numérique "Expert Patrimoine Verrier" à l\'arrivée',
      ],
      accessibilite: 'Réservé aux cyclistes confirmés. Prévoir ravitaillement et pauses. Possibilité de scinder sur 2 jours.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              140 km de découvertes le long de l'EuroVélo 3
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              5 circuits en <span className="text-accent">réalité augmentée</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Du débutant au cycliste confirmé, choisissez votre parcours pour explorer
              300 ans d'histoire verrière entre France et Belgique
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Télécharger l'app AR
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </Button>

              <Button href="#carte-interactive" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Voir la carte interactive
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600 font-medium">Circuits thématiques</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">140 km</div>
              <div className="text-gray-600 font-medium">De parcours total</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">45+</div>
              <div className="text-gray-600 font-medium">Stations AR</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-circuit-3 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Sites patrimoniaux</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-circuit-5 mb-2">6</div>
              <div className="text-gray-600 font-medium">Agents IA guides</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Circuits Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choisissez votre circuit</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 parcours thématiques adaptés à tous les niveaux et centres d'intérêt
            </p>
          </div>

          <div className="space-y-12">
            {circuits.map((circuit) => (
              <div key={circuit.id} className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-l-8 ${circuit.borderColor}`}>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Header & Quick Info */}
                    <div className="lg:w-1/3">
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${circuit.color} rounded-xl text-white font-bold text-3xl mb-4`}>
                        {circuit.id}
                      </div>

                      <h3 className="text-3xl font-bold mb-3">{circuit.name}</h3>
                      <p className="text-gray-600 text-lg mb-6">{circuit.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="font-semibold">{circuit.distance}</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-semibold">{circuit.duree}</span>
                        </div>

                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="font-semibold">{circuit.difficulte}</span>
                        </div>
                      </div>

                      <Button href={`/circuits/circuit-${circuit.id}`} variant="primary" size="lg" className="w-full">
                        Découvrir le circuit
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Button>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:w-2/3 space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Description détaillée
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{circuit.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-3 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          Sites remarquables ({circuit.sites.length})
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {circuit.sites.map((site, index) => (
                            <div key={index} className="flex items-start bg-white rounded-lg p-3 border border-gray-200">
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${site.ar ? 'bg-accent/20 text-accent' : 'bg-gray-200 text-gray-600'}`}>
                                {site.ar ? (
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-900 truncate">{site.nom}</p>
                                <p className="text-xs text-gray-600">{site.type}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-3 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-circuit-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          Points forts
                        </h4>
                        <ul className="space-y-2">
                          {circuit.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-900 mb-1 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Accessibilité
                        </h4>
                        <p className="text-sm text-blue-800">{circuit.accessibilite}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Carte Interactive Section */}
      <section id="carte-interactive" className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Carte interactive des circuits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez visuellement les 5 circuits le long de l'EuroVélo 3
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-gray-600 mb-4">Carte interactive OpenStreetMap avec géolocalisation</p>
                <p className="text-sm text-gray-500">(Intégration prévue : Leaflet.js avec tracés GPX des circuits)</p>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-5 gap-4">
              {circuits.map((circuit) => (
                <div key={circuit.id} className="flex items-center">
                  <div className={`w-4 h-4 ${circuit.color} rounded-full mr-2`}></div>
                  <span className="text-sm font-medium text-gray-700">Circuit {circuit.id}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Conseils Pratiques */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Conseils pratiques</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Préparez votre aventure TRAVERSE en toute sérénité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <svg className="w-12 h-12 mb-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Application AR obligatoire</h3>
              <p className="text-gray-700 mb-4">
                Téléchargez l'application TRAVERSE avant votre départ pour accéder aux expériences de réalité augmentée.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Compatible iOS 14+ et Android 10+</li>
                <li>✓ Téléchargement : ~120 Mo</li>
                <li>✓ Mode hors ligne disponible</li>
              </ul>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <svg className="w-12 h-12 mb-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Équipement recommandé</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  VTT ou VTC selon le circuit
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Batterie externe pour smartphone
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Casque et gilet de sécurité
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Kit de réparation vélo
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Eau et encas (circuits longs)
                </li>
              </ul>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <svg className="w-12 h-12 mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-3">Meilleure période</h3>
              <p className="text-gray-700 mb-4">
                Les circuits sont accessibles toute l'année, mais certaines périodes sont plus agréables :
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Mai-Septembre :</strong> Optimal (musées ouverts)</li>
                <li><strong>Avril-Octobre :</strong> Recommandé</li>
                <li><strong>Novembre-Mars :</strong> Possible (vérifier horaires)</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à partir à l'aventure ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Téléchargez l'application AR, choisissez votre circuit, et partez à la découverte
              du patrimoine verrier en réalité augmentée !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Télécharger l'application
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
