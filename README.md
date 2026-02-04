# Blog du CEPI - Laboratoire #1

## 🎯 Description
Création d'un site Web de blog responsif pour le projet du cours 420-KVA-JQ Web transactionnel.

## 📋 Spécifications

### Technologies
- **HTML5**
- **SASS** (compilation en CSS)
- **Bootstrap 5.3**
- **Cypress** (tests)

### Palette de couleurs
- Negro: #222831
- Gris oscuro: #393E46
- Cyan: #00ADB5
- Gris claro: #EEEEEE

### Tipografía
- Títulos: Lora
- Contenido: Open Sans

## 📁 Structure du projet

```
Blog-CEPI/
├── index.html              # Page d'accueil
├── detail.html             # Page de détail de publication
├── package.json            # Dépendances du projet
├── cypress.config.js       # Configuration Cypress
├── scss/
│   └── styles.scss         # Feuille de style SASS
├── css/
│   └── styles.css          # CSS compilé (généré)
├── js/
│   └── main.js             # JavaScript principal
├── img/                    # Images du site
├── cypress/
│   └── e2e/
│       └── navigation.cy.js # Tests de navigation
└── README.md
```

## 🚀 Installation et démarrage

### 1. Installer les dépendances
```bash
npm install
```

### 2. Compiler SASS
```bash
npm run sass
```

Pour le mode watch (recompile à chaque changement):
```bash
npm run sass:watch
```

### 3. Démarrer un serveur local
Utiliser Live Server ou tout autre serveur local sur le port 5500.

### 4. Lancer les tests Cypress
```bash
npm run cypress:open
```

Ou en mode headless:
```bash
npm run cypress:run
```

## ✨ Fonctionnalités

- ✅ Page d'accueil avec cartes de publications
- ✅ Page de détail de publication
- ✅ Navigation responsive (menu mobile)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Tests de redirection avec Cypress
- ✅ Styles personnalisés avec SASS

## 📱 Responsive

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

## 🧪 Tests

Les tests Cypress vérifient:
- Chargement de la page d'accueil
- Affichage des cartes de publication
- Redirection vers page de détails
- Redirection vers accueil
- Navigation du navbar

## 📝 Licence

ISC

## 👤 Auteur

Laboratoire #1 - 420-KVA-JQ
