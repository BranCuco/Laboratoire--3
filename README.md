# Blog du CEPI - Laboratoire #3

## 🎯 Description
Dans ce laboratoire, le projet du laboratoire #3 est **refactorisé avec React** pour améliorer l'organisation, la maintenabilité et l'évolutivité de l'application.

L'intégration est demandée de façon **progressive**, en utilisant les **CDN React + ReactDOM + Babel** dans les pages HTML existantes.

## 🛠️ Technologies
- **HTML5**
- **React (CDN)**
- **ReactDOM (CDN)**
- **Babel (CDN, JSX via `text/babel`)**
- **TypeScript / JavaScript existant**
- **jQuery / jQuery UI** (code existant à migrer progressivement)
- **Bootstrap 5.3**
- **JSON Server** (API locale)
- **Cypress** (tests E2E)

## 📌 Objectif du laboratoire
Migrer l'interface en composants React sans casser le comportement actuel.

### Ordre d'intégration recommandé
1. Ajouter les librairies CDN dans chaque page, dans cet ordre:
   1) React
   2) ReactDOM
   3) Babel
2. Ajouter une racine React (`<div id="root"></div>`)
3. Tester avec un rendu simple « Hello world »
4. Migrer graduellement le HTML statique vers les composants

## 🧩 Composants à créer
- `Header`
- `Footer`
- `BlogCard` (props)
- `BlogList` (chargement API avec `useEffect`)
- `BlogDetails` (reçoit `articleId` via props + `useEffect`)
- `Comment` (props)
- `CommentList` (reçoit `articleId` + `useEffect`)
- `AddComment` (POST vers API)
- `Blog` (conteneur page détail: récupère l'ID via URL)

## 📁 Structure actuelle du projet

```
Laboratoire#2/
├── pages/
│   ├── index.html
│   ├── detail.html
│   └── add.html
├── Ts/
│   ├── api.ts
│   ├── main.ts
│   ├── detail.ts
│   └── add.ts
├── db.json
├── dist/js/
├── scss/
├── css/
├── cypress/
└── package.json
```

## 🚀 Démarrage

### 1) Installer les dépendances
```bash
npm install
```

### 2) Démarrer l'API
```bash
npm run api
```

### 3) Compiler TypeScript (si nécessaire)
```bash
npm run build
```

### 4) Ouvrir le site
Démarrer un serveur local (ex: Live Server) et ouvrir les pages dans `pages/`.

## 🧪 Tests
```bash
npm run cypress:open
```
ou
```bash
npm run cypress:run
```

## 📝 Remarque
Le laboratoire #3 se concentre sur la **migration vers React par composants**. Le code jQuery existant peut rester temporairement pendant la transition.

## 📝 Licence
ISC

## 👤 Auteur
Laboratoire #3 - 420-KVA-JQ
