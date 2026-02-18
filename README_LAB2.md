# Laboratoire #2 - Blog du CEPI

## 🎯 Objectif

Rendre le site Web dynamique en utilisant AJAX, JSON Server et jQuery. Le projet est écrit en TypeScript et testé avec Cypress.

## ✅ Fonctionnalités Implémentées

### 1. JSON Server API
- ✅ API avec JSON Server sur port 3000
- ✅ 7+ publications dans la base de données
- ✅ 10+ commentaires dans la base de données
- ✅ Chaque publication contient: id, title, author, date, image, summary, content
- ✅ Chaque commentaire contient: id, articleId, date, content

### 2. Chargement Dynamique des Publications
- ✅ Page principale charge les articles via AJAX depuis l'API
- ✅ Affichage dynamique avec jQuery
- ✅ Gestion d'erreurs si l'API n'est pas disponible
- ✅ Tests Cypress pour le chargement

### 3. Formulaire d'Ajout de Publication
- ✅ Page `add.html` (cachée, pas de lien direct)
- ✅ Formulaire avec: titre, auteur, image URL, résumé, contenu
- ✅ ID et date générés automatiquement
- ✅ Boîte de dialogue jQuery UI pour confirmer l'envoi
- ✅ Requête POST à l'API pour ajouter la publication
- ✅ Redirection vers la page principale après ajout
- ✅ Tests Cypress pour l'ajout

### 4. Consultation d'une Publication
- ✅ Chargement dynamique du contenu via AJAX
- ✅ Utilisation des query parameters (?id=X)
- ✅ Affichage des commentaires liés à la publication
- ✅ Tests Cypress pour la consultation

### 5. Ajout de Commentaires
- ✅ Formulaire dans la page de détail
- ✅ Envoi via requête POST à l'API
- ✅ Rechargement automatique des commentaires après ajout
- ✅ Tests Cypress pour les commentaires

## 🚀 Commandes

### Démarrer l'API
```bash
npm run api
```
L'API sera disponible sur http://localhost:3000

### Compiler TypeScript
```bash
npm run build        # Compilation unique
npm run watch        # Auto-compilation
```

### Tests Cypress
```bash
npm run cypress:open  # Interface graphique
npm run cypress:run   # Mode headless
```

## 📁 Structure du Projet

```
Blog-CEPI/
├── db.json                 ← Base de données JSON Server
├── add.html                ← Page d'ajout (cachée)
├── index.html              ← Page principale
├── detail.html             ← Page de détail
├── js/
│   ├── api.ts             ← Fonctions API (AJAX)
│   ├── main.ts            ← Script principal (index)
│   ├── detail.ts          ← Script détail + commentaires
│   └── add.ts             ← Script formulaire d'ajout
├── dist/js/               ← Fichiers compilés
└── cypress/
    └── e2e/
        ├── ajax.cy.ts     ← Tests AJAX (nouveau)
        └── navigation.cy.ts
```

## 🧪 Tests Disponibles

### Tests AJAX (ajax.cy.ts)
1. **Chargement des publications**
   - Charge les articles depuis l'API
   - Affiche au moins 7 articles
   - Chaque article a titre, image et bouton

2. **Ajout d'une publication**
   - Accès à la page d'ajout
   - Affichage du dialogue de confirmation jQuery UI
   - Ajout via API et redirection

3. **Consultation d'une publication**
   - Chargement par ID via query parameters
   - Chargement des commentaires
   - Message d'erreur si article inexistant

4. **Ajout d'un commentaire**
   - Formulaire présent
   - Ajout via API
   - Validation (pas de commentaire vide)

5. **Navigation**
   - Navigation accueil → article
   - Retour article → accueil

## 🔧 Technologies Utilisées

- **TypeScript** - Typage statique
- **jQuery** - Manipulation DOM et AJAX
- **jQuery UI** - Dialogues de confirmation
- **JSON Server** - API REST temporaire
- **Cypress** - Tests end-to-end
- **Bootstrap 5** - Framework CSS

## 📝 Instructions d'Utilisation

### 1. Installer les dépendances
```bash
npm install
```

### 2. Démarrer l'API
```bash
npm run api
```
Laissez cette terminal ouverte.

### 3. Dans une nouvelle terminal, compiler TypeScript
```bash
npm run build
```

### 4. Ouvrir le site
Ouvrez `index.html` dans un navigateur (ou utilisez Live Server).

### 5. Tester
```bash
npm run cypress:open
```

## 🎨 Accès à la Page d'Ajout

La page d'ajout est "cachée" (pas de lien dans le menu).

Pour y accéder, naviguez directement à:
```
http://localhost:5500/add.html
```

## ✨ Fonctionnalités Supplémentaires

- Gestion d'erreurs complète
- Messages de feedback utilisateur
- Animation sur le chargement des cartes
- Formatage des dates en français
- Validation des formulaires
- Interface responsive

## 🔍 API Endpoints

- `GET /articles` - Liste des articles
- `GET /articles/:id` - Article par ID
- `POST /articles` - Ajouter un article
- `GET /comments?articleId=X` - Commentaires d'un article
- `POST /comments` - Ajouter un commentaire

## 📊 Critères de Réussite

✅ JSON Server configuré avec données initiales  
✅ Chargement dynamique des publications (AJAX)  
✅ Formulaire d'ajout avec jQuery UI dialog  
✅ Consultation avec query parameters  
✅ Ajout de commentaires fonctionnel  
✅ Code TypeScript complètement typé  
✅ Tests Cypress complets et passants  
✅ Gestion d'erreurs implémentée  

---

**Développé pour le Laboratoire #2 - CEPI**
