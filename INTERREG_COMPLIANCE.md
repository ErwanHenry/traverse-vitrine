# TRAVERSE - Conformité Interreg FWVL (Fiche 2)

**Document de référence** : Fiche 2 - Comment réaliser le site internet du projet
**Programme** : Interreg France-Wallonie-Vlaanderen 2021-2027
**Date** : 2025-10-17

---

## ✅ Obligations OBLIGATOIRES (100% Conformité Requise)

### 2.1 Contenu Minimum du Site Internet

Le site TRAVERSE respecte toutes les obligations suivantes :

| # | Obligation | Statut | Implémentation |
|---|-----------|--------|----------------|
| 1 | **Présentation détaillée du projet et de sa plus-value transfrontalière** | ✅ | Page `/projet` avec section dédiée "Plus-value transfrontalière" (4 points détaillés) |
| 2 | **Référence au programme Interreg avec lien vers le site du programme** | ✅ | Footer + Header avec lien https://www.interreg-fwvl.eu |
| 3 | **Banner web de promotion du programme Interreg** | ⚠️ À AJOUTER | Choix du banner : FR-NL horizontal recommandé pour le Header |
| 4 | **Présentation des résultats transfrontaliers (photos, vidéos, news)** | ✅ | Page `/actualites` avec 4 événements + 3 news + page `/circuits` |
| 5 | **Mention des partenaires de part et d'autre de la frontière** | ✅ | Page `/projet` (5 partenaires) + Footer |
| 6 | **Section "contact"** | ✅ | Page `/contact` avec formulaire + coordonnées partenaires |

### 2.2 Angle Transfrontalier Obligatoire

**Exigence** : Tous les points doivent être abordés sous l'angle transfrontalier et démontrer l'impact sur les zones et populations concernées.

**Implémentation TRAVERSE** :
- ✅ Page `/projet` : Section "Plus-value de la coopération transfrontalière" (4 arguments)
- ✅ Page `/circuits` : Mention explicite "France-Belgique" sur circuits 2 et 5
- ✅ Page `/interreg` : Présentation complète coopération FR-BE
- ✅ Homepage : Badge "Projet Interreg France-Wallonie-Vlaanderen"

### 2.3 Outil de Statistiques Obligatoire

**Exigence** : Analyser la fréquentation et distinguer les internautes français et belges.

**Implémentation TRAVERSE** :
- ✅ **Vercel Analytics** : Déjà intégré (@vercel/analytics)
- ⚠️ **Google Analytics 4** : À CONFIGURER (recommandé par Interreg)
  - Créer propriété GA4
  - Configurer segmentation géographique France/Belgique
  - Tracking obligatoire : Pages vues, utilisateurs, provenance géographique

**Action requise** :
```bash
npm install @next/third-parties
# Puis ajouter Google Analytics dans app/layout.tsx
```

---

## 💡 Conseils Interreg Appliqués

### Conseil n°3 : Nom de domaine en « .eu »

**Recommandation Interreg** : L'extension .EU bénéficie de 70% de reconnaissance auprès des internautes européens.

**Statut TRAVERSE** : ⚠️ À CONFIGURER
- Domaine actuel : `traverse-vitrine.vercel.app`
- Domaine recommandé : `traverse-eurovelo3.eu` ✅ (déjà prévu)
- **Action** : Acheter le domaine .eu et configurer dans Vercel

### Conseil n°4 : Responsive Design

**Statut** : ✅ CONFORME
- Next.js 15 + Tailwind CSS 3 (mobile-first)
- Breakpoints : sm, md, lg, xl, 2xl
- Testé sur tous les viewports

### Conseil n°5 : Google Analytics

**Statut** : ⚠️ PARTIEL
- ✅ Vercel Analytics actif
- ⚠️ Google Analytics 4 à ajouter (obligatoire pour segmentation FR/BE)

### Conseil n°6 : Contenu Régulier

**Statut** : ✅ PRÉVU
- Page `/actualites` créée avec :
  - 4 événements (2 à venir, 2 passés) ✅ Conforme minimum 2 événements
  - 3 actualités récentes
  - Newsletter subscription
- **Attention** : Ne pas laisser d'informations obsolètes (mettre à jour régulièrement)

### Conseil n°7 : Pérennité du Site

**Statut** : ✅ CONFORME
- Hébergement Vercel gratuit (ou Plan Pro si nécessaire)
- Domaine .eu à renouveler annuellement
- Code source versionné sur GitHub
- Documentation complète (STATUS.md, DEPLOYMENT.md, INTERREG_COMPLIANCE.md)

---

## 🎨 Banner Web Interreg (Action Requise)

### Choix du Banner

Selon la Fiche 2, les banners disponibles sont :
1. FR-NL horizontal ⭐ **RECOMMANDÉ** (pour Header)
2. FR-NL vertical
3. FR horizontal
4. FR vertical
5. NL horizontal
6. NL vertical
7. EN horizontal
8. EN vertical

### Emplacement Prévu

**Header** (components/layout/Header.tsx) :
- Position : À côté du logo TRAVERSE
- Format : FR-NL horizontal (responsive)
- Lien : https://www.interreg-fwvl.eu

**Footer** (components/layout/Footer.tsx) :
- ✅ Déjà présent : Section Interreg avec logo EU
- À améliorer : Ajouter le banner officiel

### Fichiers Banner à Récupérer

**Source** : Site Interreg FWVL ou Secrétariat conjoint
**Formats requis** : PNG ou SVG haute résolution
**Tailles** :
- Header : 200x80px (environ)
- Footer : 300x120px (environ)

---

## 📊 Système de Partage de Documents (Nouvelle Fonctionnalité Interreg)

### Description

Le programme Interreg FWVL offre un **système de partage de documents** sur la page d'accueil du site programme pour permettre la diffusion de :
- Photos des projets
- Vidéos
- Autres fichiers relatifs aux activités

### Workflow

1. **Opérateur** (TRAVERSE) soumet contenus via formulaire
2. **Validation** par le Secrétariat conjoint Interreg
3. **Publication** sur site Interreg + réseaux sociaux du programme

### Avantages

- ✅ Valorisation des projets
- ✅ Visibilité accrue auprès des publics-cibles
- ✅ Information sur actions transfrontalières dans la région

### Action TRAVERSE

**À prévoir régulièrement** :
- Soumettre photos des 5 circuits (paysages, sites patrimoniaux)
- Vidéos démonstrations AR
- Photos événements (Berlin, Trélon, Valenciennes)
- Comptes-rendus rapports d'activité

---

## 📝 Comptes-Rendus Réguliers (Rapports d'Activité)

### Obligation

Via les rapports d'activité, rédiger régulièrement un **compte-rendu du suivi des activités**.

### Publication

Le résumé de l'état d'avancement du projet sera publié sur le site internet du programme Interreg FWVL.

### Fréquence Recommandée

- Trimestrielle ou semestrielle
- À chaque jalon majeur (Phase 1, 2, 3, 4)
- Lors des événements de communication

### Contenu Type

**Exemple pour TRAVERSE** :
```
Titre : TRAVERSE franchit le cap des 10 000 téléchargements

Le projet TRAVERSE, cofinancé par le FEDER à hauteur de 1,11M€, poursuit
son développement avec succès. En septembre 2025, l'application de réalité
augmentée a franchi la barre symbolique des 10 000 téléchargements, avec
une note moyenne de 4.8/5 sur les stores iOS et Android.

Les 5 circuits cyclables le long de l'EuroVélo 3 (140 km au total) attirent
de nombreux visiteurs français et belges. Le circuit n°1 "La Route des Maîtres
Verriers" (22 km) est le plus populaire avec 3 500 parcours enregistrés.

Prochaine étape : lancement officiel du circuit n°5 "Mémoire et Transmission"
(40 km) lors de l'événement The Kaspa Experience à Berlin le 13 septembre 2025.
```

---

## 🎯 Checklist de Conformité Finale

### Conformité Actuelle : 9/12 (75%)

| # | Critère | Statut | Action Requise |
|---|---------|--------|----------------|
| 1 | Présentation projet + plus-value transfrontalière | ✅ | - |
| 2 | Lien vers site Interreg | ✅ | - |
| 3 | **Banner web Interreg** | ⚠️ | **Ajouter banner FR-NL horizontal dans Header** |
| 4 | Résultats transfrontaliers (photos/vidéos/news) | ✅ | Mettre à jour régulièrement |
| 5 | Partenaires France + Belgique | ✅ | - |
| 6 | Section contact | ✅ | - |
| 7 | Responsive design | ✅ | - |
| 8 | **Google Analytics** | ⚠️ | **Configurer GA4 avec segmentation FR/BE** |
| 9 | Contenu régulier | ✅ | Maintenir actualisation |
| 10 | **Domaine .eu** | ⚠️ | **Configurer traverse-eurovelo3.eu** |
| 11 | Minimum 2 événements communication | ✅ | Page `/actualites` : 4 événements |
| 12 | Pérennité du site | ✅ | - |

---

## 🚀 Actions Prioritaires Immédiates

### Priorité 1 - CRITIQUE (Avant validation Interreg)

1. **Ajouter Banner Web Interreg** ⚠️
   - Récupérer banner FR-NL horizontal auprès du Secrétariat conjoint
   - Intégrer dans Header.tsx
   - Lien cliquable vers https://www.interreg-fwvl.eu

2. **Configurer Google Analytics 4** ⚠️
   ```bash
   npm install @next/third-parties
   ```
   - Créer propriété GA4
   - Ajouter tracking code dans app/layout.tsx
   - Configurer segmentation géographique FR/BE

3. **Activer Domaine .eu** ⚠️
   - Acheter `traverse-eurovelo3.eu`
   - Configurer DNS dans Vercel
   - Redirection automatique depuis .vercel.app

### Priorité 2 - HAUTE (Ce mois)

4. **Soumettre Contenus au Site Interreg**
   - Préparer 5-10 photos haute résolution des circuits
   - Vidéo teaser 90 secondes du projet
   - Remplir formulaire de partage sur site Interreg FWVL

5. **Rédiger Premier Compte-Rendu d'Activité**
   - Résumé Phase 2 (développement AR/IA)
   - État d'avancement : 60% du projet
   - Soumettre au Secrétariat conjoint pour publication

### Priorité 3 - MOYENNE (Ce trimestre)

6. **Enrichir Contenu Multimédia**
   - Remplacer images placeholder par vraies photos
   - Ajouter vidéos démonstrations AR
   - Galerie photos 15+ sites patrimoniaux

7. **Optimiser SEO**
   - Sitemap.xml automatique
   - Meta tags OpenGraph complets
   - Schema.org markup pour événements

---

## 📞 Contact Secrétariat Conjoint Interreg

**Pour obtenir** :
- Banners web officiels (FR-NL horizontal, etc.)
- Validation conformité site internet
- Conseils rédaction comptes-rendus

**Contact** :
- Site : https://www.interreg-fwvl.eu
- Email : [à compléter selon contact UPHF]

---

## ✅ Résumé Conformité

**Statut Global** : 75% conforme (9/12 critères)

**Points Forts** :
- ✅ Architecture complète et responsive
- ✅ Contenu transfrontalier riche
- ✅ Minimum 2 événements communication (4 événements présents)
- ✅ Section contact opérationnelle

**Points à Améliorer** :
- ⚠️ Banner web Interreg (CRITIQUE)
- ⚠️ Google Analytics avec segmentation FR/BE (CRITIQUE)
- ⚠️ Domaine .eu (HAUTE PRIORITÉ)

**Délai de Conformité 100%** : 1-2 semaines maximum

---

**Mise à jour** : 2025-10-17
**Prochaine révision** : Après ajout banner Interreg + Google Analytics
