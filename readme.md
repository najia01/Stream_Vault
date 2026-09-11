# Projet StreamVault (MongoDB)

## Contexte du Projet

Ce dépôt contient la première étape du projet mandaté par StreamVault, une plateforme de streaming vidéo. L'objectif global est de structurer un catalogue de films hétérogènes qu'une base relationnelle classique ne pourrait pas absorber efficacement.

Ce répertoire correspond à une prise en main technique de MongoDB .

## Environnement et outils

- **Base de données :** MongoDB (Local)
- **Interface graphique :** MongoDB Compass
- **Éditeur de code :** Visual Studio Code
- **Extension :** MongoDB for VS Code (Exécution de scripts Playground)

## Jeu de données

Le jeu de données initial est un fichier JSON contenant une collection de 8 documents littéraire.

## Contenu du Script (Playground)

Le fichier `playground-1.mongodb.js` contient l'ensemble des requêtes NoSQL répondant aux 20 questions du brief. Il couvre les opérations CRUD (Create, Read, Update, Delete) suivantes :

1. **Observer :** Comptage de documents, récupération du premier/dernier document, tris (`sort`), et ciblage de champs spécifiques (`$exists`).
2. **Filtrer :** Requêtes conditionnelles sur les dates de publication (`$gt`, `$lt`), recherche exacte, et recherche à l'intérieur de tableaux.
3. **Modifier :**
   - Ajout de nouveaux champs à la volée (`$set` via `updateOne`).
   - Insertion de nouveaux documents (`insertOne`).
   - Nettoyage et suppression de documents (`deleteOne`).

Partie 2
Projet d'ontologie cinéma (RDF / OWL)

Ce dépôt contient la modélisation d'une ontologie dédiée au domaine du cinéma, réalisée dans le cadre de la conception de bases de connaissances sémantiques.

## Outils utilisés

- **Protégé Desktop** : Éditeur d'ontologie et environnement de modélisation OWL.
- **RDF / OWL / RDFS** : Standards du Web Sémantique pour la structuration des données.

---

## Structure de l'ontologie

### 1. Classes principales (`Classes`)

L'ontologie s'articule autour de concepts clés du cinéma :

- `Film` : Représente les œuvres cinématographiques.
- `Personne` : Classe parente pour les intervenants du milieu.
  - `Acteur` : Sous-classe représentant les comédiens.
  - `Realisateur` : Sous-classe représentant les metteurs en scène.
- `Genre` : Catégorisation des films.
- `Studio` : Sociétés de production et structures corporatives.

### 2. Propriétés d'objets (`Object Properties`)

Les relations sémantiques entre individus sont gérées à l'aide de propriétés typées et inversées :

- `aRealise` / `estRealisePar` : Lien entre un réalisateur et un film.
- `aJouerDans` / `aPourActeur` : Lien entre un acteur et un film.
- `aPourGenre` / `estDuGenre` : Association d'un film à un genre.
- `aProduit` / `estProduitPar` : Lien entre un studio et un film produit.
- `aPourSuite` / `estSuiteDe` : Propriété **transitive** reliant une suite cinématographique à son prédécesseur.
- `aPourFiliale` / `estFilialeDe` : Propriété \*\*transitive` modélisant la hiérarchie des studios d'animation et de production.

### 3. Propriétés de données (`Data Properties`)

Attributs typés rattachés aux entités (tous configurés comme _Functional_) :

- `aPourTitre` (`xsd:string`, Domaine : `Film`)
- `aPourAnnee` (`xsd:integer`, Domaine : `Film`)
- `aPourNoteIMDB` (`xsd:double`, Domaine : `Film`)
- `aPourIdentifiantIMDB` (`xsd:string`, Domaine : `Film`)
- `aPourNom` (`xsd:string`, Domaine : `Personne` / `Studio`)

---

## 👥 Exemples d'individus et instances

Le modèle intègre des données de test validées, incluant :

- **Réalisateurs / Acteurs** : `ChristopherNolan`, `LeonardoDiCaprio`
- **Films** : `Inception` (2010), `Casablanca` (1942)
- **Studios** : `WarnerBros`, `WarnerAnimation`, `WarnerBrosGroup`

---

## Utilisation

1. Ouvrir le logiciel **Protégé Desktop**.
2. Charger le fichier d'ontologie principal (format `.owl`).
3. Activer un raisonneur (ex: _Pellet_ ou _HermiT_) depuis le menu `Reasoner` pour vérifier la cohérence du graphe et propager les propriétés transitives.J'ai fait le choix d'utiliser Hermit dans ce cas précis.
