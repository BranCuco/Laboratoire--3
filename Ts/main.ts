/**
 * main.ts - Script principal del Blog du CEPI (con AJAX)
 */

$(() => {
    console.log('Blog du CEPI - Chargé avec jQuery');

    // Fermer le menu mobile cuando se hace clic en un enlace
    $('.navbar-nav .nav-link').on('click', function(): void {
        const navbarToggle = $('.navbar-toggler');
        if (navbarToggle.is(':visible')) {
            navbarToggle.trigger('click');
        }
    });

    // Cargar artículos dinámicamente
    loadArticles();

    // Event listeners para búsqueda y filtrado
    $('#searchInput').on('input', filterAndSortCards);
    $('#sortFilter').on('change', filterAndSortCards);
});

/**
 * Cargar artículos desde la API
 */
function loadArticles(): void {
    const cardsContainer = $('.row.g-4');
    
    // Mostrar mensaje de carga
    cardsContainer.html('<div class="col-12 text-center"><p>Chargement des articles...</p></div>');
    
    getAllArticles()
        .done((articles: Article[]): void => {
            cardsContainer.empty();
            
            articles.forEach((article: Article, index: number): void => {
                const cardHtml = `
                    <div class="col-12 col-md-6 col-lg-4" data-article-id="${article.id}">
                        <div class="card blog-card h-100" style="animation-delay: ${index * 0.1}s">
                            <img src="${article.image}" class="card-img-top" alt="${article.title}">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.summary}</p>
                            </div>
                            <div class="card-footer bg-transparent">
                                <a href="detail.html?id=${article.id}" class="btn btn-primary btn-sm">Lire plus</a>
                            </div>
                        </div>
                    </div>
                `;
                cardsContainer.append(cardHtml);
            });
        })
        .fail((): void => {
            cardsContainer.html(`
                <div class="col-12 text-center">
                    <div class="alert alert-danger">
                        <h4>Erreur de chargement</h4>
                        <p>Impossible de charger les articles. Assurez-vous que l'API est démarrée avec <code>npm run api</code></p>
                    </div>
                </div>
            `);
        });
}

/**
 * Filtrar y ordenar las tarjetas de blog
 */
function filterAndSortCards(): void {
    const searchInput = $('#searchInput');
    const sortFilter = $('#sortFilter');
    const cardsContainer = $('.row.g-4');
    
    if (!cardsContainer.length) return;

    const searchTerm = searchInput.val() as string || '';
    const sortValue = sortFilter.val() as string || 'recent';
    
    // Obtener todas las columnas de tarjetas
    const cardColumns = cardsContainer.find('.col-12, .col-md-6, .col-lg-4').filter(function(): boolean {
        return $(this).attr('id') !== 'noResultsMessage';
    });
    
    // Filtrar tarjetas
    cardColumns.each(function(): void {
        const $column = $(this);
        const $card = $column.find('.blog-card');
        
        if (!$card.length) return;
        
        const title = $card.find('.card-title').text().toLowerCase();
        const text = $card.find('.card-text').text().toLowerCase();
        
        const matches = title.includes(searchTerm.toLowerCase()) || text.includes(searchTerm.toLowerCase());
        
        $column.toggle(matches);
    });
    
    // Contar tarjetas visibles
    const visibleColumns = cardColumns.filter(':visible');
    
    // Ordenar tarjetas visibles
    if (sortValue === 'titre') {
        // Ordenar por título A-Z
        const columnsArray = visibleColumns.toArray();
        columnsArray.sort((a: HTMLElement, b: HTMLElement): number => {
            const titleA = $(a).find('.card-title').text();
            const titleB = $(b).find('.card-title').text();
            return titleA.localeCompare(titleB);
        });
        cardsContainer.append(columnsArray);
    }
    
    // Mostrar mensaje si no hay resultados
    showNoResultsMessage(visibleColumns.length === 0);
}

/**
 * Mostrar/ocultar mensaje de "sin resultados"
 */
function showNoResultsMessage(show: boolean): void {
    const cardsContainer = $('.row.g-4');
    let noResultsMsg = $('#noResultsMessage');
    
    if (show) {
        if (!noResultsMsg.length) {
            noResultsMsg = $(`
                <div id="noResultsMessage" class="col-12 text-center py-5">
                    <div class="alert alert-info">
                        <h4>Aucun résultat trouvé</h4>
                        <p>Essayez de modifier votre recherche</p>
                    </div>
                </div>
            `);
            cardsContainer.append(noResultsMsg);
        } else {
            noResultsMsg.show();
        }
    } else {
        noResultsMsg.hide();
    }
}
