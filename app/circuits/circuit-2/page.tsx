import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Circuit 2 - Frontières et Commerce Verrier | TRAVERSE',
  description: 'Parcourez 18 km à vélo le long de l EuroVélo 3, traversez la frontière franco-belge et découvrez les routes commerciales du verre en réalité augmentée.',
};

export default function Circuit2Page() {
  const stations = [
    {
      numero: 1,
      nom: 'Douane d Anor',
      distance: '0 km',
      description: 'Ancien poste de douane franco-belge où transitaient les cargaisons de verre',
      experienceAR: 'Reconstitution 3D des contrôles douaniers au XVIIIe siècle',
      duree: '12 min'
    },
    {
      numero: 2,
      nom: 'Route des Colporteurs',
      distance: '3.5 km',
      description: 'Ancien chemin emprunté par les marchands ambulants transportant le verre précieux',
      experienceAR: 'Suivez un colporteur virtuel en AR portant sa hotte remplie de verres colorés',
      duree: '8 min'
    },
    {
      numero: 3,
      nom: 'Entrepôt de Forge-Philippe',
      distance: '7 km',
      description: 'Ruines d un entrepôt de stockage du verre avant export vers la Belgique',
      experienceAR: 'Explorez l entrepôt reconstitué avec ses caisses de verre soigneusement emballées',
      duree: '15 min'
    },
    {
      numero: 4,
      nom: 'Frontière Invisible',
      distance: '10 km',
      description: 'Passage symbolique de la frontière France-Belgique sur l EuroVélo 3',
      experienceAR: 'Visualisez en AR l évolution des frontières du XVIIIe siècle à aujourd hui',
      duree: '10 min'
    },
    {
      numero: 5,
      nom: 'Marché de Chimay',
      distance: '15 km',
      description: 'Place du marché où le verre français était vendu aux bourgeois belges',
      experienceAR: 'Plongez dans le marché du XVIIIe siècle reconstitué avec ses étals de verre',
      duree: '18 min'
    },
    {
      numero: 6,
      nom: 'Château des Princes de Chimay',
      distance: '18 km',
      description: 'Demeure princière abritant une exceptionnelle collection de verreries françaises',
      experienceAR: 'Visite virtuelle AR de la collection de verres précieux avec commentaires audio',
      duree: '20 min'
    }
  ];

  const equipement = [
    'Passeport ou carte d identité (passage frontière)',
    'Vélo tout-terrain recommandé',
    'Application TRAVERSE (mode hors ligne activé)',
    'Batterie externe (6 expériences AR)',
    'Euros ET monnaie belge pour ravitaillement',
    'Imperméable (météo changeante en altitude)'
  ];

  const conseils = [
    'Vérifiez les heures d ouverture du Château de Chimay (fermé le lundi)',
    'Prévoyez du temps pour déjeuner à Chimay (excellentes brasseries)',
    'Téléchargez le circuit hors ligne avant le départ (signal 3G/4G faible en forêt)',
    'Respectez le Code de la Route belge après le km 10'
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-circuit-2 via-blue-600 to-blue-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              Circuit #2 • Facile
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Frontières et Commerce Verrier</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Traversez la frontière franco-belge sur les traces des marchands de verre qui n ont jamais connu de frontières
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span>📏</span>
                <span className="font-semibold">18 km</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span className="font-semibold">2-3h</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⛰️</span>
                <span className="font-semibold">Dénivelé: 80 m</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-circuit-2 hover:bg-gray-100">
                Télécharger l application AR
              </Button>
              <Button href="/circuits" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-circuit-2">
                Voir tous les circuits
              </Button>
            </div>
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
          <Card className="bg-gradient-to-r from-circuit-2/10 to-blue-100 border-l-4 border-circuit-2">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🇫🇷🇧🇪</div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-circuit-2">Particularité transfrontalière</h2>
                <p className="text-lg text-gray-800">Premier circuit véritablement transfrontalier avec passage de la frontière France-Belgique</p>
                <p className="text-sm text-gray-600 mt-2">
                  ⚠️ N oubliez pas votre pièce d identité pour le passage de la frontière au km 10
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">6 Stations AR le long du parcours</h2>
            <p className="text-xl text-gray-600">
              Scannez les QR codes pour déclencher les expériences de réalité augmentée
            </p>
          </div>

          <div className="space-y-6">
            {stations.map((station) => (
              <Card key={station.numero} className="hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-circuit-2 to-blue-500 rounded-xl flex items-center justify-center text-white">
                      <span className="text-3xl font-bold">{station.numero}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{station.nom}</h3>
                      <span className="px-3 py-1 bg-circuit-2/10 text-circuit-2 rounded-full text-sm font-semibold">
                        Km {station.distance}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{station.description}</p>
                    <div className="bg-gradient-to-r from-circuit-2/5 to-transparent p-4 rounded-lg">
                      <p className="font-semibold text-circuit-2 mb-1">Expérience AR ({station.duree})</p>
                      <p className="text-sm text-gray-700">{station.experienceAR}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🎒</span>
                Équipement recommandé
              </h3>
              <ul className="space-y-3">
                {equipement.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-circuit-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">💡</span>
                Conseils pratiques
              </h3>
              <ul className="space-y-3">
                {conseils.map((conseil, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600">ℹ️</span>
                    <span className="text-gray-700">{conseil}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="bg-gradient-to-r from-circuit-2 to-blue-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à découvrir le commerce du verre ?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Téléchargez l application TRAVERSE et partez à l aventure transfrontalière
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/app-ar" variant="primary" size="lg" className="bg-white text-circuit-2 hover:bg-gray-100">
                Télécharger l app AR
              </Button>
              <Button href="/circuits/circuit-3" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-circuit-2">
                Circuit suivant →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
