import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | TRAVERSE - Projet Interreg',
  description: 'Contactez l\'équipe TRAVERSE. Coordonnées des partenaires, formulaire de contact et informations pratiques.',
};

export default function ContactPage() {
  const contacts = [
    {
      nom: 'Université Polytechnique Hauts-de-France',
      role: 'Chef de file du projet',
      adresse: 'Campus Mont Houy, 59313 Valenciennes',
      tel: '+33 3 27 51 12 34',
      email: 'traverse@uphf.fr',
      web: 'https://www.uphf.fr'
    },
    {
      nom: 'Écomusée de l\'Avesnois',
      role: 'Partenaire patrimonial',
      adresse: 'Place Maria Blondeau, 59610 Fourmies',
      tel: '+33 3 27 60 66 11',
      email: 'ecomusee@avesnois.fr',
      web: 'https://www.ecomusee-avesnois.fr'
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Une question sur le projet TRAVERSE ? Notre équipe est à votre écoute
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
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Formulaire de contact</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="jean.dupont@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Choisissez un sujet</option>
                    <option>Question générale</option>
                    <option>Demande de partenariat</option>
                    <option>Support technique (app AR)</option>
                    <option>Média / Presse</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Votre message..."></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Coordonnées des partenaires</h2>
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <Card key={index}>
                    <h3 className="text-xl font-bold mb-2">{contact.nom}</h3>
                    <p className="text-sm text-gray-600 mb-4">{contact.role}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {contact.adresse}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {contact.tel}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {contact.email}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <a href={contact.web} className="text-primary hover:underline">{contact.web}</a>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
