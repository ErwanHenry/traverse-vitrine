# TRAVERSE - Plan Site Vitrine Interreg

## 📋 Contexte Projet

**TRAVERSE (TRAVER(RE)SE)** - Application AR de découverte du patrimoine verrier
- **Programme** : Interreg VI France-Wallonie-Vlaanderen 2021-2027
- **Porteur** : Université de Valenciennes
- **Zone** : EuroVélo 3 - Avesnois-Thiérache
- **Patrimoine** : Industrie verrière historique (XVIIe-XXe siècle)

## 🎯 Objectifs Site Vitrine

### Conformité Interreg (Obligations)
✅ Présentation détaillée du projet et plus-value transfrontalière
✅ Logo projet visible dès l'ouverture (fourni par Secrétariat conjoint)
✅ Référence cofinancement UE avec logo Interreg FWVL
✅ Lien vers site programme Interreg
✅ Présentation résultats transfrontaliers (photos, vidéos, actualités)
✅ Mention partenaires transfrontaliers
✅ Section contact

### Objectifs Communication
- Sensibiliser au patrimoine verrier Avesnois-Thiérache
- Promouvoir les 5 circuits touristiques EuroVélo 3
- Mettre en avant les innovations AR/IA du projet
- Attirer jeunes publics et cyclotouristes
- Valoriser coopération transfrontalière France-Belgique

## 🏗️ Architecture Technique

### Stack Technologique
```json
{
  "framework": "Next.js 15",
  "react": "19",
  "styling": "Tailwind CSS",
  "deployment": "Vercel",
  "analytics": "Vercel Analytics",
  "multilingual": "next-intl (FR/EN/NL)"
}
```

### Structure Pages

```
/
├── page.tsx                    # Accueil avec hero AR
├── projet/
│   ├── page.tsx               # Présentation projet
│   ├── patrimoine/page.tsx    # Patrimoine verrier
│   ├── innovation/page.tsx    # Technologies AR/IA
│   └── partenaires/page.tsx   # Partenaires transfrontaliers
├── circuits/
│   ├── page.tsx               # Vue d'ensemble 5 circuits
│   ├── maitres-verriers/      # Circuit 1 (22 km)
│   ├── frontieres-commerce/   # Circuit 2 (18 km)
│   ├── innovation/            # Circuit 3 (35 km)
│   ├── nature-ressources/     # Circuit 4 (25 km)
│   └── memoire-transmission/  # Circuit 5 (40 km)
├── actualites/
│   └── page.tsx               # Blog actualités projet
├── app-ar/
│   └── page.tsx               # Présentation application AR
├── medias/
│   └── page.tsx               # Galerie photos/vidéos
├── interreg/
│   └── page.tsx               # Page dédiée financement UE
└── contact/
    └── page.tsx               # Formulaire contact
```

## 📄 Contenus Détaillés

### 1. Page d'Accueil (Hero AR)

**Sections** :
- **Hero AR interactif** : Démo AR en WebGL avec modèle 3D verrerie
- **Logo projet** : Visible immédiatement (obligation Interreg)
- **Bannière Interreg** : "Cofinancé par l'Union Européenne" avec logo
- **Tagline** : "Redécouvrir le patrimoine verrier en réalité augmentée"
- **CTA** : "Découvrir les circuits" / "Télécharger l'app AR"
- **Chiffres clés** :
  - 5 circuits touristiques
  - 140 km de parcours cyclables
  - 15+ sites patrimoniaux
  - 300 ans d'histoire verrière
- **Vidéo** : Teaser 90s expérience AR (français/sous-titres EN/NL)

### 2. Page Projet

**Contenu** :
- **Vision** : Valorisation patrimoine industriel verrier via AR
- **Plus-value transfrontalière** :
  - Coopération Université Valenciennes + partenaires belges
  - Sites patrimoniaux des deux côtés de la frontière
  - Mobilité douce transfrontalière (EuroVélo 3)
  - Partage savoirs techniques verriers
- **Objectifs** :
  - Attirer jeunes 15-35 ans via technologies immersives
  - Sensibiliser 10 000+ visiteurs/an au patrimoine verrier
  - Créer 5 circuits certifiés EuroVélo 3
  - Développer app AR accessible offline
- **Timeline projet** :
  - 2023 : Démarrage et recherche patrimoniale
  - 2024 : Développement application AR
  - 2025 : Lancement Berlin (13 septembre)
  - 2026 : Déploiement complet 5 circuits

### 3. Page Patrimoine Verrier

**Histoire** :
- **XVIIe siècle** : Naissance industrie verrière Trélon (1675)
- **XVIIIe-XIXe** : Expansion verreries Fourmies, Anor
- **XIXe-XXe** : Innovations techniques et commerce international
- **Aujourd'hui** : Transmission savoirs et reconversion sites

**Sites emblématiques** :
1. **Écomusée Avesnois Trélon** : Verrerie traditionnelle en activité
2. **Musée Textile Fourmies** : Lien textile-verre industrie locale
3. **Site Verrerie Anor (1675)** : Ruines historiques
4. **Kiosque à Danser Anor** : Patrimoine populaire ouvrier
5. **Forges hydrauliques Helpe** : Écosystème industriel complet

**Techniques traditionnelles** :
- Soufflage bouteilles champagne (spécialité Trélon)
- Verrerie à vitre
- Flaconnage pharmaceutique
- Gobeleterie fine

### 4. Page Innovation AR/IA

**Technologies** :
- **Réalité Augmentée** : WebXR (A-Frame + AR.js)
- **Intelligence Artificielle** : 6 agents IA spécialisés
- **Géolocalisation haute précision** : GPS < 2m précision
- **PWA offline-first** : Fonctionne sans réseau
- **Multi-agents Claude Flow** : Orchestration expérience

**Expériences AR** :
- Reconstruction 3D fours historiques 1894/1925
- Simulation interactive soufflage verre
- Guide virtuel Maître Verrier IA
- Timeline immersive évolution techniques
- Superposition AR paysages historiques

**Système multi-agents** :
1. **Storytelling IA Verrier** : Récits adaptatifs patrimoine
2. **Recommandation Contextuelle** : Circuits optimisés profil
3. **AR Experience Manager** : Gestion expériences immersives
4. **Gamification Adaptative** : Engagement jeunes publics
5. **Analytics Comportemental** : Optimisation expérience
6. **Accessibilité Inclusive** : Adaptation tous publics

### 5. Pages Circuits (×5)

**Template commun** :
- **Carte interactive** : Parcours détaillé avec POI
- **Distance / Dénivelé** : Infos pratiques cyclistes
- **POI clés** : Liste avec photos et descriptions
- **Expériences AR** : Démos disponibles sur circuit
- **Patrimoine associé** : Histoire locale contextualisée
- **Galerie photos** : 10-15 images haute qualité
- **Télécharger GPX** : Tracé pour GPS vélo

**Circuit 1 : "La Route des Maîtres Verriers"** (22 km)
- Trélon → Fourmies
- Écomusée Avesnois, Atelier soufflage, Musée Textile
- AR : Reconstruction fours + Simulation soufflage

**Circuit 2 : "Frontières et Commerce Verrier"** (18 km)
- Anor → Hirson
- Verrerie Anor 1675, Kiosque à Danser, Points frontière
- AR : Routes commerciales + Marchés historiques

**Circuit 3 : "Innovation et Modernité"** (35 km)
- Fourmies → Maubeuge
- Sites industriels modernes, Centres formation
- AR : Comparaison techniques anciennes/modernes

**Circuit 4 : "Nature et Ressources"** (25 km)
- Vallées Helpe Majeure/Mineure
- Carrières silice, Forêt Mormal, Points d'eau
- AR : Géologie interactive + Gestion forestière

**Circuit 5 : "Mémoire et Transmission"** (40 km)
- Circuit synthèse tous sites
- Lieux mémoire, Centres formation, Témoignages
- AR : Bibliothèque numérique + Master class virtuelle

### 6. Page Partenaires Transfrontaliers

**Partenaires principaux** :
- **🇫🇷 Université de Valenciennes** (Chef de file)
  - Laboratoire recherche AR/IA
  - Développement application
- **🇫🇷 Écomusée Avesnois Trélon**
  - Expertise patrimoine verrier
  - Contenus historiques
- **🇫🇷 Musée Textile Fourmies**
  - Contexte industriel régional
  - Archives photographiques
- **🇧🇪 [Partenaire belge à définir]**
  - Coopération transfrontalière
  - Extension circuits Belgique

**Logos partenaires** : Grille 3 colonnes responsive

### 7. Page Application AR

**Fonctionnalités** :
- Scan QR Code bornes physiques
- Mode AR avec orientation boussole
- Détection proximité POI (100m)
- Contenus offline (80%)
- Notifications géolocalisées
- Partage social expériences

**Captures d'écran** : 6-8 images interface app

**Téléchargement** :
- PWA : Installer depuis navigateur (pas d'app store)
- Compatible iOS Safari 14+ et Android Chrome 90+
- QR Code installation rapide

### 8. Page Actualités

**Format blog** :
- Articles actualités projet
- Événements communication (minimum 2 obligatoires)
- Partenariats nouveaux
- Résultats intermédiaires
- Témoignages utilisateurs

**Articles initiaux** :
1. "Lancement officiel projet TRAVERSE" (date démarrage)
2. "Présentation Berlin - The Kaspa Experience" (13 sept 2025)
3. "5 circuits patrimoine verrier maintenant accessibles"
4. "L'application AR TRAVERSE en détails"

### 9. Page Interreg / Financement UE

**Contenu obligatoire** :
- **Logo Interreg FWVL** : Prominent et non déformé
- **Mention UE** : "Cofinancé par l'Union Européenne - FEDER"
- **Budget** :
  - Budget total projet : [À définir]
  - Montant FEDER : [À définir]
  - Taux cofinancement : [À définir]%
- **Programme** : Interreg VI France-Wallonie-Vlaanderen 2021-2027
- **Axe prioritaire** : [À définir - ex: "Une Europe plus sociale"]
- **Lien vers site Interreg** : https://www.interreg-fwvl.eu
- **Banner web programme** : Lien cliquable vers Interreg

**Texte type** :
> "Le projet TRAVERSE est cofinancé par le Fonds Européen de Développement Régional (FEDER) dans le cadre du programme Interreg VI France-Wallonie-Vlaanderen 2021-2027. Cette coopération transfrontalière vise à valoriser le patrimoine industriel verrier commun et à promouvoir le tourisme durable le long de l'EuroVélo 3."

### 10. Page Contact

**Formulaire** :
- Nom / Email / Sujet / Message
- Cases à cocher :
  - [ ] Question générale
  - [ ] Partenariat
  - [ ] Presse
  - [ ] Support technique app
- Validation frontend + backend
- Protection spam (Honeypot ou reCAPTCHA)

**Coordonnées** :
- **Email** : contact@traverse-eurovelo3.eu
- **Adresse** : Université de Valenciennes - [Département]
- **Réseaux sociaux** : Liens vers comptes projet

## 🎨 Identité Visuelle

### Palette Couleurs

```css
/* Couleurs principales */
--primary: #1E40AF;      /* Bleu Interreg */
--secondary: #7C3AED;    /* Violet patrimoine */
--accent: #F59E0B;       /* Ambre verre */

/* Couleurs 5 circuits (cf. guide Interreg) */
--circuit-1: #E74C3C;    /* Rouge-orangé */
--circuit-2: #3498DB;    /* Bleu ciel */
--circuit-3: #2ECC71;    /* Vert */
--circuit-4: #9B59B6;    /* Violet */
--circuit-5: #F39C12;    /* Orange */

/* Neutres */
--gray-50: #F9FAFB;
--gray-900: #111827;
```

### Typographie

```css
/* Titres */
font-family: 'Inter', sans-serif;
font-weight: 700;

/* Corps de texte */
font-family: 'Inter', sans-serif;
font-weight: 400;
line-height: 1.75;
```

### Logos

1. **Logo projet TRAVERSE** :
   - Format : SVG, PNG, JPG
   - Versions : Couleur, niveaux de gris, noir et blanc
   - Fourni par Secrétariat conjoint Interreg
   - Placement : Header (top-left) + Footer

2. **Logo Interreg FWVL** :
   - Télécharger depuis site Interreg
   - Respecter charte graphique stricte
   - Taille minimum respectée (hauteur = autres logos minimum)
   - Placement : Header (top-right) + Page Interreg

3. **Drapeau UE** :
   - Intégré dans logo Interreg
   - Mention "Cofinancé par l'Union Européenne"

## 📱 Responsive Design

### Breakpoints Tailwind
```javascript
{
  'sm': '640px',   // Mobile large
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px'  // XL desktop
}
```

### Mobile-First
- Navigation burger < 1024px
- Cartes circuits en colonne < 768px
- Hero AR désactivé < 640px (image statique)

## 🌐 Multilingue (Optionnel Phase 2)

### Langues Support
1. **Français** (principal)
2. **Anglais** (recommandé par guide Interreg)
3. **Néerlandais** (si partenaires flamands)

### Implémentation
- Lib : `next-intl`
- Structure : `/[locale]/page.tsx`
- Sélecteur langue : Header top-right

## 🔍 SEO

### Meta Tags Essentiels
```html
<title>TRAVERSE - Patrimoine Verrier en Réalité Augmentée | EuroVélo 3</title>
<meta name="description" content="Découvrez 5 circuits AR valorisant 300 ans d'histoire verrière le long de l'EuroVélo 3. Projet Interreg France-Wallonie-Vlaanderen." />
<meta name="keywords" content="patrimoine verrier, réalité augmentée, EuroVélo 3, Avesnois, Thiérache, Interreg, tourisme cyclable" />
<link rel="canonical" href="https://traverse-eurovelo3.eu" />

<!-- Open Graph -->
<meta property="og:title" content="TRAVERSE - AR Patrimoine Verrier" />
<meta property="og:image" content="https://traverse-eurovelo3.eu/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

### Sitemap XML
Généré automatiquement via Next.js :
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://traverse-eurovelo3.eu', lastModified: new Date() },
    { url: 'https://traverse-eurovelo3.eu/projet', lastModified: new Date() },
    // ... toutes les pages
  ]
}
```

## 📊 Analytics & Tracking

### Indicateurs Interreg (Obligatoires)

**À reporter semestriellement** :
- Nombre visiteurs site web
- Nombre publications réseaux sociaux (par réseau)
- Nombre événements organisés
- Nombre participants événements

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Tracking :
- Pages vues
- Temps session moyen
- Taux rebond
- Pages populaires
- Origine trafic

### Goals Tracking
- Téléchargements app AR
- Téléchargements tracés GPX
- Soumissions formulaire contact
- Clics vers réseaux sociaux

## 🔗 Réseaux Sociaux

### Obligation Interreg
**Minimum 1 compte** parmi :
- Facebook
- X (Twitter)
- LinkedIn
- YouTube
- Instagram

### Recommandation TRAVERSE
1. **Instagram** (priorité jeunes 15-35 ans)
   - Photos circuits haute qualité
   - Stories démos AR
   - Reels expériences utilisateurs

2. **LinkedIn** (réseau professionnel)
   - Actualités partenariats
   - Articles techniques AR/IA
   - Événements institutionnels

3. **YouTube** (contenu long)
   - Tutoriels app AR
   - Documentaires patrimoine verrier
   - Témoignages utilisateurs

### Liens Header/Footer
- Icônes sociales avec liens
- Obligation de taguer @InterregFWVL dans posts

## 🚀 Déploiement Vercel

### Configuration
```json
// vercel.json
{
  "github": {
    "silent": true
  },
  "regions": ["cdg1"],  // Paris (proche zone projet)
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

### Variables d'Environnement
```env
# .env.production
NEXT_PUBLIC_SITE_URL=https://traverse-eurovelo3.eu
NEXT_PUBLIC_INTERREG_LINK=https://www.interreg-fwvl.eu
CONTACT_EMAIL=contact@traverse-eurovelo3.eu
```

### Domaine Custom
- Acheter domaine : `traverse-eurovelo3.eu`
- Configurer DNS chez registrar
- Ajouter domaine dans Vercel Dashboard
- SSL automatique via Let's Encrypt

## ✅ Checklist Lancement

### Pré-Déploiement
- [ ] Logo projet reçu de Secrétariat conjoint Interreg
- [ ] Bannière Interreg téléchargée et intégrée
- [ ] Tous contenus rédigés et validés
- [ ] Photos/vidéos optimisées (WebP, <500KB)
- [ ] Formulaire contact testé
- [ ] Liens réseaux sociaux vérifiés
- [ ] Meta tags SEO complets
- [ ] Sitemap XML généré
- [ ] Responsive testé (mobile/tablet/desktop)
- [ ] Accessibilité WCAG 2.1 AA validée
- [ ] Performance Lighthouse > 90

### Post-Déploiement
- [ ] Google Analytics configuré
- [ ] Search Console vérifié
- [ ] Comptes réseaux sociaux créés
- [ ] Premier post sur chaque réseau (taguer @InterregFWVL)
- [ ] Informer Secrétariat conjoint Interreg du lancement
- [ ] Ajouter affiche A3 dans locaux partenaires
- [ ] Organiser événement lancement (obligation 1/2)

## 📅 Timeline Développement

### Semaine 1-2 : Setup
- [x] Init Git repository
- [ ] Setup Next.js 15 + Tailwind
- [ ] Configurer structure pages
- [ ] Intégrer logo Interreg

### Semaine 3-4 : Contenus
- [ ] Rédaction textes toutes pages
- [ ] Collecte photos haute qualité
- [ ] Création vidéos (teaser 90s minimum)
- [ ] Cartes interactives circuits

### Semaine 5-6 : Développement
- [ ] Pages statiques (Home, Projet, Patrimoine, etc.)
- [ ] Pages circuits (×5)
- [ ] Page actualités (blog)
- [ ] Formulaire contact

### Semaine 7 : Finitions
- [ ] Optimisation images
- [ ] SEO complet
- [ ] Tests responsive
- [ ] Accessibilité

### Semaine 8 : Déploiement
- [ ] Déploiement Vercel staging
- [ ] Tests QA complets
- [ ] Validation partenaires
- [ ] Déploiement production
- [ ] Annonce réseaux sociaux

## 📞 Contacts

**Développement** : Claude Code Agent System
**Contenu** : [Université Valenciennes - Contact]
**Interreg Support** : communication@interreg-fwvl.org
**Secrétariat conjoint** : info@interreg-fwvl.org

---

**Budget estimé** : 0€ (développement interne + hébergement Vercel gratuit)
**Maintenance** : 2h/mois (actualités + support)
**Conformité Interreg** : 100% (toutes obligations respectées)

*Document créé le 17 octobre 2025 - Version 1.0*
