/**
 * Tests AJAX - Blog du CEPI
 * Tests pour la fonctionnalité AJAX avec JSON Server
 */

describe('Tests AJAX - Laboratoire #2', (): void => {
    const API_URL = 'http://localhost:3000';
    
    beforeEach((): void => {
        // Intercepter les requêtes à l'API
        cy.intercept('GET', `${API_URL}/articles`).as('getArticles');
        cy.intercept('GET', `${API_URL}/articles/*`).as('getArticle');
        cy.intercept('GET', `${API_URL}/comments*`).as('getComments');
        cy.intercept('POST', `${API_URL}/articles`).as('postArticle');
        cy.intercept('POST', `${API_URL}/comments`).as('postComment');
    });

    describe('Chargement des publications', (): void => {
        it('Doit charger les articles depuis l\'API', (): void => {
            cy.visit('/index.html');
            
            // Attendre que la requête soit terminée
            cy.wait('@getArticles');
            
            // Vérifier que les cartes sont affichées
            cy.get('.blog-card').should('have.length.greaterThan', 0);
        });

        it('Doit afficher au moins 7 articles', (): void => {
            cy.visit('/index.html');
            cy.wait('@getArticles');
            
            cy.get('.blog-card').should('have.length.at.least', 7);
        });

        it('Chaque article doit avoir un titre, une image et un bouton', (): void => {
            cy.visit('/index.html');
            cy.wait('@getArticles');
            
            cy.get('.blog-card').first().within((): void => {
                cy.get('.card-title').should('exist');
                cy.get('.card-img-top').should('exist');
                cy.get('a.btn-primary').should('contain', 'Lire plus');
            });
        });
    });

    describe('Ajout d\'une publication', (): void => {
        it('Doit accéder à la page d\'ajout', (): void => {
            cy.visit('/add.html');
            
            cy.get('#addArticleForm').should('exist');
            cy.get('#title').should('exist');
            cy.get('#author').should('exist');
            cy.get('#content').should('exist');
        });

        it('Doit afficher une boîte de dialogue de confirmation', (): void => {
            cy.visit('/add.html');

            cy.window().then((win: Window): void => {
                cy.stub(win, 'confirm').as('confirmStub').returns(false);
            });
            
            // Remplir le formulaire
            cy.get('#title').type('Test Article');
            cy.get('#author').type('Test Author');
            cy.get('#image').type('https://via.placeholder.com/400');
            cy.get('#summary').type('Test summary');
            cy.get('#content').type('<p>Test content</p>');
            
            // Soumettre le formulaire
            cy.get('#addArticleForm').submit();

            // Vérifier que la confirmation native est appelée
            cy.get('@confirmStub').should('have.been.calledOnce');
        });

        it('Doit ajouter un article via l\'API', (): void => {
            cy.visit('/add.html');

            cy.window().then((win: Window): void => {
                cy.stub(win, 'confirm').returns(true);
            });
            
            // Remplir le formulaire
            cy.get('#title').type('Nouvel Article de Test');
            cy.get('#author').type('Cypress Test');
            cy.get('#image').type('https://via.placeholder.com/400');
            cy.get('#summary').type('Ceci est un résumé de test');
            cy.get('#content').type('<p>Ceci est le contenu de test</p>');
            
            // Soumettre
            cy.get('#addArticleForm').submit();
            
            // Attendre la requête POST
            cy.wait('@postArticle');
            
            // Vérifier la redirection vers index.html
            cy.url().should('include', 'index.html');
        });
    });

    describe('Consultation d\'une publication', (): void => {
        it('Doit charger un article par son ID', (): void => {
            cy.visit('/detail.html?id=1');
            
            cy.wait('@getArticle');
            
            // Vérifier que le contenu est chargé
            cy.get('.blog-article h1').should('exist');
            cy.get('.article-meta').should('exist');
            cy.get('.article-content').should('exist');
        });

        it('Doit charger les commentaires de l\'article', (): void => {
            cy.visit('/detail.html?id=1');
            
            cy.wait('@getArticle');
            cy.wait('@getComments');
            
            // Vérifier que des commentaires sont affichés
            cy.get('.comments-list').should('exist');
        });

        it('Doit afficher un message si l\'article n\'existe pas', (): void => {
            cy.visit('/detail.html?id=9999');
            
            cy.wait('@getArticle');
            
            cy.get('.alert-warning').should('contain', 'Article non trouvé');
        });
    });

    describe('Ajout d\'un commentaire', (): void => {
        it('Doit avoir un formulaire de commentaire', (): void => {
            cy.visit('/detail.html?id=1');
            cy.wait('@getArticle');
            
            cy.get('#commentForm').should('exist');
            cy.get('#commentTextarea').should('exist');
            cy.get('#commentForm button[type="submit"]').should('exist');
        });

        it('Doit ajouter un commentaire via l\'API', (): void => {
            cy.visit('/detail.html?id=1');
            cy.wait('@getArticle');
            cy.wait('@getComments');
            
            // Entrer un commentaire
            const commentText = 'Ceci est un commentaire de test de Cypress';
            cy.get('#commentTextarea').type(commentText);
            
            // Soumettre le formulaire
            cy.get('#commentForm').submit();
            
            // Attendre la requête POST
            cy.wait('@postComment');
            
            // Le textarea devrait être vidé
            cy.get('#commentTextarea').should('have.value', '');
        });

        it('Ne doit pas accepter un commentaire vide', (): void => {
            cy.visit('/detail.html?id=1');
            cy.wait('@getArticle');

            cy.on('window:alert', (text: string): void => {
                expect(text).to.contains('commentaire');
            });
            
            // Essayer de soumettre sans texte
            cy.get('#commentForm').submit();
        });
    });

    describe('Navigation', (): void => {
        it('Doit naviguer de l\'accueil vers un article', (): void => {
            cy.visit('/index.html');
            cy.wait('@getArticles');
            
            // Cliquer sur le premier "Lire plus"
            cy.get('.blog-card').first().within((): void => {
                cy.get('a.btn-primary').click();
            });
            
            // Vérifier qu'on est sur la page de détail
            cy.url().should('include', 'detail.html');
            cy.url().should('include', 'id=');
        });

        it('Doit retourner à l\'accueil depuis un article', (): void => {
            cy.visit('/detail.html?id=1');
            cy.wait('@getArticle');
            
            // Cliquer sur le logo
            cy.get('.navbar-brand').click();
            
            cy.url().should('include', 'index.html');
        });
    });
});