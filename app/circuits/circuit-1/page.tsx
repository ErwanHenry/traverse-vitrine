import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Circuit 1 : La Route des Maîtres Verriers | 22km - Trélon to Fourmies',
  description: 'Découvrez les techniques traditionnelles du soufflage de verre du XVIIe au XIXe siècle. 22 km, 8 stations AR, visite de la Maison du Verre de Trélon. Niveau facile.',
};

export default function Circuit1Page() {
  const infosCircuit = {
    nom: 'La Route des Maîtres Verriers',
    numero: 1,
    distance: '22 km',
    duree: '3-4h',
    difficulte: 'Facile',
    denivele: '120m',
    depart: 'Maison du Verre - Trélon',
    arrivee: 'Fourmies Centre',
    type: 'Aller simple (bus retour disponible)',
    color: 'bg-circuit-1',
  };

  const stations = [
    {
      numero: 1,
      nom: 'Maison du Verre - Trélon',
      type: 'Musée & Atelier',
      ar: true,
      duree: '45 min',
      description: 'Point de départ incontournable ! Ce musée vivant propose des démonstrations quotidiennes de soufflage de verre. L\'expérience AR reconstitue l\'atelier tel qu\'il était en 1750.',
      experienceAR: 'Rencontrez virtuellement le Maître Augustin, verrier légendaire de Trélon, qui vous explique les techniques ancestrales.',
      acces: 'Parking gratuit, location de vélos sur place',
      horaires: 'Mar-Dim 10h-18h (fermé lundi)',
      tarif: 'Entrée musée : 8€ adulte, 5€ enfant',
    },
    {
      numero: 2,
      nom: 'Ancienne Verrerie Parant',
      type: 'Ruines industrielles',
      ar: true,
      duree: '20 min',
      description: 'Vestiges impressionnants d\'une verrerie du XIXe siècle. Les ruines du four à pot sont encore visibles. Site émouvant témoignant de l\'apogée industrielle verrière.',
      experienceAR: 'Reconstruction 3D complète de la verrerie en activité (1880). Observez les ouvriers au travail et entendez le bruit des fours.',
      acces: '2 km de Trélon par piste cyclable',
      particularite: 'Site protégé Monuments Historiques depuis 2015',
    },
    {
      numero: 3,
      nom: 'Forêt de Trélon - Carrière de Sable',
      type: 'Site naturel',
      ar: true,
      duree: '15 min',
      description: 'Ancienne carrière de sable siliceux exploitée pour la fabrication du verre. La forêt fournissait également le bois pour alimenter les fours.',
      experienceAR: 'L\'agent IA "Géologue Émile" vous explique la composition chimique du verre et l\'origine géologique du sable.',
      acces: 'Sentier forestier (300m à pied depuis piste cyclable)',
    },
    {
      numero: 4,
      nom: 'Église Saint-Pierre - Trélon',
      type: 'Patrimoine religieux',
      ar: false,
      duree: '15 min',
      description: 'Magnifiques vitraux du XVIIIe siècle réalisés par des maîtres verriers locaux. Exemples remarquables de l\'art du vitrail.',
      particularite: 'Vitraux classés Monuments Historiques',
    },
    {
      numero: 5,
      nom: 'Pont de l\'Helpe Majeure',
      type: 'Infrastructure historique',
      ar: true,
      duree: '10 min',
      description: 'Ancien pont utilisé pour le transport du verre vers la Belgique. Point de vue exceptionnel sur la vallée.',
      experienceAR: 'Visualisez les convois de charrettes transportant le verre au XVIIIe siècle.',
    },
    {
      numero: 6,
      nom: 'Écluse de Fourmies',
      type: 'Patrimoine industriel',
      ar: true,
      duree: '10 min',
      description: 'L\'écluse permettait d\'acheminer le verre par voie fluviale. Système ingénieux du XIXe siècle.',
      experienceAR: 'Animation 3D du fonctionnement de l\'écluse avec péniches transportant du verre.',
    },
    {
      numero: 7,
      nom: 'Four à pot reconstitué - Fourmies',
      type: 'Reconstitution pédagogique',
      ar: true,
      duree: '20 min',
      description: 'Reconstitution grandeur nature d\'un four à pot du XVIIIe siècle. Panneau explicatif très détaillé.',
      experienceAR: 'Simulation thermique du four en fonctionnement. Visualisez les températures (1400°C !) et le processus de fusion.',
      acces: 'Parc municipal de Fourmies',
    },
    {
      numero: 8,
      nom: 'Musée du Textile et de la Vie Sociale - Fourmies',
      type: 'Musée complémentaire',
      ar: false,
      duree: '45 min',
      description: 'Bonus culturel ! Découvrez l\'autre grande industrie de Fourmies : le textile. Comprendre l\'écosystème industriel complet de la région.',
      horaires: 'Mar-Dim 9h30-12h30 et 14h-18h',
      tarif: 'Entrée : 6€ adulte, 3€ enfant',
    },
  ];

  const equipement = [
    { nom: 'Smartphone AR', obligatoire: true, description: 'Application TRAVERSE téléchargée avec circuits en mode hors ligne' },
    { nom: 'Batterie externe', obligatoire: true, description: 'Minimum 10000mAh pour 4h d\'utilisation AR intensive' },
    { nom: 'Vélo ou VTC', obligatoire: true, description: 'Location disponible à Trélon (15€/jour)' },
    { nom: 'Casque vélo', obligatoire: false, description: 'Recommandé mais non obligatoire' },
    { nom: 'Eau (1L)', obligatoire: true, description: 'Fontaines disponibles aux stations 1, 4, 8' },
    { nom: 'Encas énergétiques', obligatoire: false, description: 'Boulangeries à Trélon et Fourmies' },
  ];

  const conseils = [
    {
      icone: '🌤️',
      titre: 'Meilleure période',
      texte: 'Mai à septembre (musées ouverts, météo clémente). Éviter les lundis (Maison du Verre fermée).',
    },
    {
      icone: '⏰',
      titre: 'Timing idéal',
      texte: 'Départ à 9h30 de Trélon pour profiter de la démonstration de soufflage de 10h. Arrivée vers 13h30 à Fourmies.',
    },
    {
      icone: '🍽️',
      titre: 'Pause déjeuner',
      texte: 'Aire de pique-nique aménagée à la station 5 (Pont de l\'Helpe). Restaurants à Fourmies.',
    },
    {
      icone: '🚌',
      titre: 'Retour à Trélon',
      texte: 'Bus ligne 301 : Fourmies → Trélon (départs 14h30, 16h30, 18h30). Durée : 25 min. Tarif : 2€.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-circuit-1 via-red-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <Container className="relative py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Circuit 1 sur 5 • EuroVélo 3
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              La Route des Maîtres Verriers
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Suivez les traces des souffleurs de verre du XVIIe siècle entre Trélon et Fourmies.
              Un voyage immersif dans l'art ancestral du verre.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {infosCircuit.distance}
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {infosCircuit.duree}
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {infosCircuit.difficulte}
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
                8 stations AR
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

      {/* Infos Pratiques */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-7 h-7 mr-3 text-circuit-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Informations pratiques
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Départ</div>
                    <div className="text-gray-600">{infosCircuit.depart}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Arrivée</div>
                    <div className="text-gray-600">{infosCircuit.arrivee}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dénivelé</div>
                    <div className="text-gray-600">{infosCircuit.denivele} cumulé positif</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Type de parcours</div>
                    <div className="text-gray-600">{infosCircuit.type}</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-circuit-1/30">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-circuit-1">
                <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conseils pour réussir votre visite
              </h2>

              <div className="space-y-4">
                {conseils.map((conseil, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <div className="text-3xl mr-3">{conseil.icone}</div>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">{conseil.titre}</div>
                        <div className="text-sm text-gray-700">{conseil.texte}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Les 8 Stations */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Les 8 stations du circuit</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chronologie immersive de Trélon à Fourmies • {stations.filter(s => s.ar).length} expériences AR
            </p>
          </div>

          <div className="space-y-6">
            {stations.map((station, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all ${station.ar ? 'border-l-4 border-accent' : 'border-l-4 border-gray-300'}`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left - Station Number & Type */}
                  <div className="lg:w-1/4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${station.ar ? 'bg-accent' : 'bg-gray-400'} rounded-xl text-white font-bold text-2xl mb-3`}>
                      {station.numero}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{station.nom}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {station.duree}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${station.ar ? 'bg-accent/20 text-accent' : 'bg-gray-200 text-gray-700'}`}>
                      {station.type}
                    </div>
                    {station.ar && (
                      <div className="mt-2 flex items-center text-xs font-semibold text-accent">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Réalité Augmentée
                      </div>
                    )}
                  </div>

                  {/* Right - Description & Details */}
                  <div className="lg:w-3/4 space-y-4">
                    <p className="text-gray-700 leading-relaxed">{station.description}</p>

                    {station.experienceAR && (
                      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                        <div className="font-bold text-accent mb-2 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Expérience AR exclusive
                        </div>
                        <p className="text-sm text-gray-700">{station.experienceAR}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {station.acces && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <div>
                            <span className="font-semibold text-gray-900">Accès : </span>
                            <span className="text-gray-700">{station.acces}</span>
                          </div>
                        </div>
                      )}

                      {station.horaires && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-semibold text-gray-900">Horaires : </span>
                            <span className="text-gray-700">{station.horaires}</span>
                          </div>
                        </div>
                      )}

                      {station.tarif && (
                        <div className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <span className="font-semibold text-gray-900">Tarif : </span>
                            <span className="text-gray-700">{station.tarif}</span>
                          </div>
                        </div>
                      )}

                      {station.particularite && (
                        <div className="flex items-start md:col-span-2">
                          <svg className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          <div>
                            <span className="font-semibold text-gray-900">Particularité : </span>
                            <span className="text-gray-700">{station.particularite}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Équipement Recommandé */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Équipement recommandé</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Préparez votre sac pour une expérience optimale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipement.map((item, index) => (
              <Card key={index} className={`${item.obligatoire ? 'border-2 border-red-300 bg-red-50' : 'bg-white'}`}>
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3 ${item.obligatoire ? 'bg-red-500' : 'bg-gray-300'}`}>
                    {item.obligatoire ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{item.nom}</div>
                    <div className="text-xs font-semibold mb-2 text-red-600">
                      {item.obligatoire ? '⚠️ OBLIGATOIRE' : '✓ Recommandé'}
                    </div>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="bg-gradient-to-r from-circuit-1 to-orange-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à découvrir les secrets des maîtres verriers ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Téléchargez l'application TRAVERSE et vivez une expérience AR unique sur ce circuit historique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-circuit-1 hover:bg-gray-100">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Télécharger l'app AR
              </Button>
              <Button href="/circuits" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-circuit-1">
                Voir tous les circuits
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/30">
              <p className="text-sm text-white/80 mb-4">Explorez aussi :</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button href="/circuits/circuit-2" variant="outline" size="sm" className="border-white/50 text-white hover:bg-white hover:text-circuit-1">
                  Circuit 2 : Frontières
                </Button>
                <Button href="/circuits/circuit-3" variant="outline" size="sm" className="border-white/50 text-white hover:bg-white hover:text-circuit-1">
                  Circuit 3 : Innovation
                </Button>
                <Button href="/circuits/circuit-4" variant="outline" size="sm" className="border-white/50 text-white hover:bg-white hover:text-circuit-1">
                  Circuit 4 : Nature
                </Button>
                <Button href="/circuits/circuit-5" variant="outline" size="sm" className="border-white/50 text-white hover:bg-white hover:text-circuit-1">
                  Circuit 5 : Grand Tour
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
