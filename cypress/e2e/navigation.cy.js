/**
 * Tests de navigation - Blog du CEPI
 * Vérifier que la redirection de la page principale vers la page de détails fonctionne
 */

describe('Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('/index.html');
    });

    it('Doit charger la page d\'accueil', () => {
        cy.get('.navbar-brand').should('exist');
        cy.get('#searchInput').should('exist');
    });

    it('Doit afficher les cartes de publication', () => {
        cy.get('.blog-card').should('have.length.greaterThan', 0);
    });

    it('Doit rediriger vers la page de détails au clic sur "Lire plus"', () => {
        cy.get('.blog-card').first().within(() => {
            cy.get('a.btn-primary').click();
        });
        
        cy.url().should('include', 'detail.html');
        cy.get('.blog-article').should('exist');
    });

    it('Doit rediriger vers l\'accueil au clic sur le bouton retour', () => {
        cy.visit('/detail.html');
        cy.get('a.btn-secondary').click();
        
        cy.url().should('include', 'index.html');
    });

    it('Doit rediriger vers l\'accueil au clic sur le logo', () => {
        cy.visit('/detail.html');
        cy.get('.navbar-brand').click();
        
        cy.url().should('include', 'index.html');
    });

    it('Navbar doit contenir les liens de navigation', () => {
        cy.get('.navbar-nav .nav-link').should('have.length.greaterThan', 0);
    });
});
