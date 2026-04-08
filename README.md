# Blog du CEPI — Laboratoire #3 (Version de remise)

## 🎯 Objectif
Migration progressive du blog du laboratoire précédent vers **React par composants**, tout en conservant l'architecture HTML existante.

L'intégration React est faite avec **CDN**:
1. React
2. ReactDOM
3. Babel (`type="text/babel"`)

## ✅ Fonctionnalités livrées
- `Header` en React
- `Footer` en React
- `BlogCard` avec props
- `BlogList` avec chargement API (`useEffect`)
- Recherche + tri des articles (React state)
- `BlogDetails` (chargement article par `id` URL)
- `Comment` + `CommentList` (chargement commentaires)
- `AddComment` (POST vers API)
- Formulaire d'ajout d'article migré en React (POST)

## 🧩 Composants implémentés
- `Header`
- `Footer`
- `BlogCard`
- `BlogList`
- `BlogDetails`
- `Comment`
- `CommentList`
- `AddComment`
- `Blog` (conteneur de la page détail)

## 🛠️ Stack technique
- HTML5
- React + ReactDOM (CDN)
- Babel Standalone (JSX dans les pages)
- Bootstrap 5.3
- JSON Server (API locale)
- Cypress (tests E2E)
- TypeScript legacy conservé dans `Ts/`

## 📁 Structure (résumé)

```
Laboratoire#2/
├── pages/
│   ├── index.html
│   ├── detail.html
│   └── add.html
├── db.json
├── css/
├── scss/
├── Ts/
├── dist/js/
├── cypress/
├── cypress.config.js
└── package.json
```

## 🚀 Exécution locale

### 1) Installer
```bash
npm install
```

### 2) API (JSON Server)
```bash
npm run api
```
API: `http://localhost:3000`

### 3) SCSS (optionnel)
```bash
npm run sass:build
```
ou watch:
```bash
npm run sass
```

### 4) Ouvrir le site
Lancer un serveur local (Live Server) et ouvrir:
- `pages/index.html`
- `pages/detail.html?id=1`
- `pages/add.html`

## 🧪 Tests Cypress
```bash
npm run cypress:open
```
ou
```bash
npm run cypress:run
```

Configuration E2E actuelle:
- `baseUrl`: `http://localhost:5500/pages`

## ℹ️ Notes importantes
- Le dossier `dist/js` contient du JavaScript compilé depuis TypeScript (`Ts/`).
- La migration React actuelle est faite **dans les pages HTML** via Babel (pas en `.tsx`).
- Si `npm run api` retourne `EADDRINUSE`, le port 3000 est déjà occupé (ou serveur déjà lancé).

## 📝 Licence
ISC

## 👤 Auteur
Laboratoire #3 — 420-KVA-JQ
