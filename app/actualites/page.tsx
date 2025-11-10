import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Actualités TRAVERSE | Événements et News du Projet',
  description: 'Suivez les actualités du projet TRAVERSE : événements de communication, lancements de circuits, démonstrations AR et rencontres transfrontalières.',
};

export default function ActualitesPage() {
  const evenements = [
    {
      id: 1,
      titre: 'The Kaspa Experience - Berlin 2025',
      date: '13 septembre 2025',
      lieu: 'Berlin, Allemagne',
      type: 'Événement international',
      statut: 'A venir',
      description: 'Lancement officiel du Circuit 5 "Mémoire et Transmission" (40 km) lors du plus grand rassemblement européen de la communauté Kaspa.',
      highlights: ['Démonstration AR en direct', 'Rencontre avec les développeurs IA', 'Présentation des 45+ stations AR']
    },
    {
      id: 2,
      titre: 'Journée Patrimoine Verrier - Trélon',
      date: '21 septembre 2025',
      lieu: 'Écomusée de Fourmies-Trélon, France',
      type: 'Événement patrimonial',
      statut: 'A venir',
      description: 'Journée dédiée à la découverte du Circuit 1 "La Route des Maîtres Verriers" (22 km).',
      highlights: ['Ateliers soufflage de verre', 'Visites guidées AR gratuites', 'Exposition "300 ans d\'histoire verrière"']
    },
    {
      id: 3,
      titre: 'Forum Transfrontalier Interreg',
      date: '5 juin 2025',
      lieu: 'Valenciennes, France',
      statut: 'Passé',
      type: 'Événement institutionnel',
      description: 'Présentation du projet TRAVERSE devant le Secrétariat conjoint Interreg FWVL et les 50+ projets cofinancés.',
      highlights: ['Présentation devant 200+ participants', 'Networking avec 50+ projets Interreg']
    },
    {
      id: 4,
      titre: 'Lancement Public du Projet',
      date: '15 mars 2025',
      lieu: 'Campus UPHF Mont Houy, Valenciennes',
      statut: 'Passé',
      type: 'Événement de lancement',
      description: 'Lancement officiel du projet TRAVERSE en présence des 5 partenaires transfrontaliers.',
      highlights: ['Conférence de presse avec 15+ médias', 'Démonstrations AR sur stand']
    }
  ];

  const actualites = [
    {
      id: 1,
      titre: '10 000 téléchargements pour l\'app TRAVERSE !',
      date: '2 septembre 2025',
      categorie: 'Milestone',
      extrait: 'L\'application TRAVERSE franchit la barre symbolique des 10 000 téléchargements avec une note moyenne de 4.8/5.'
    },
    {
      id: 2,
      titre: 'Nouveau partenariat avec l\'Office de Tourisme',
      date: '15 août 2025',
      categorie: 'Partenariat',
      extrait: 'L\'Office de Tourisme de l\'Avesnois rejoint TRAVERSE en tant que partenaire promotionnel.'
    },
    {
      id: 3,
      titre: 'TRAVERSE primé au Concours Innovation Interreg',
      date: '20 juillet 2025',
      categorie: 'Récompense',
      extrait: 'Le projet remporte le Prix Spécial Innovation 2025 décerné par le programme Interreg FWVL.'
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Actualités TRAVERSE</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Suivez l évolution du projet et participez à nos événements transfrontaliers
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
            <h2 className="text-4xl font-bold mb-4">Événements de communication</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minimum 2 événements de communication organisés conformément aux obligations Interreg FWVL
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {evenements.filter(e => e.statut === 'A venir').map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white text-primary rounded-full text-sm font-bold">
                    {event.statut}
                  </div>
                  <div className="text-6xl text-white/40">📅</div>
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <h3 className="text-2xl font-bold my-3">{event.titre}</h3>
                  <p className="text-gray-600 mb-2">{event.date} • {event.lieu}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <ul className="space-y-1">
                    {event.highlights.map((h, idx) => (
                      <li key={idx} className="text-sm text-gray-700">✓ {h}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6">Événements passés</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {evenements.filter(e => e.statut === 'Passé').map((event) => (
                <Card key={event.id}>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold">
                    {event.statut}
                  </span>
                  <h4 className="text-xl font-bold my-2">{event.titre}</h4>
                  <p className="text-sm text-gray-600 mb-2">{event.date} • {event.lieu}</p>
                  <p className="text-gray-700">{event.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Dernières actualités</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {actualites.map((actu) => (
              <Card key={actu.id} className="hover:shadow-xl transition-shadow">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                  {actu.categorie}
                </span>
                <h3 className="text-xl font-bold my-2">{actu.titre}</h3>
                <p className="text-sm text-gray-600 mb-3">{actu.date}</p>
                <p className="text-gray-700">{actu.extrait}</p>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Restez informé !</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les actualités du projet TRAVERSE
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none"
              />
              <Button type="submit" variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                S inscrire
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
