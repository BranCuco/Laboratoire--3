/**
 * main.js - Script principal du Blog du CEPI
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog du CEPI - Chargé');

    // Fermer le menu mobile cuando se hace clic en un enlace
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggle = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarToggle.offsetParent !== null) { // Si está visible
                navbarToggle.click();
            }
        });
    });

    // Agregar animación a las tarjetas
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ============================================
    // Funcionalidad de búsqueda
    // ============================================
    const searchInput = document.getElementById('searchInput');
    const sortFilter = document.getElementById('sortFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterAndSortCards();
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            filterAndSortCards();
        });
    }
});

/**
 * Filtrar y ordenar las tarjetas de blog
 */
function filterAndSortCards() {
    const searchInput = document.getElementById('searchInput');
    const sortFilter = document.getElementById('sortFilter');
    const cardsContainer = document.querySelector('.row.g-4');
    
    if (!cardsContainer) return;

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const sortValue = sortFilter ? sortFilter.value : 'recent';
    
    // Obtener todas las columnas de tarjetas (excluir mensaje de no resultados)
    const cardColumns = Array.from(cardsContainer.querySelectorAll('.col-12')).filter(col => {
        return col.id !== 'noResultsMessage';
    });
    
    // Filtrar tarjetas
    cardColumns.forEach(column => {
        const card = column.querySelector('.blog-card');
        if (!card) return;
        
        const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const text = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
        
        const matches = title.includes(searchTerm) || text.includes(searchTerm);
        
        if (matches) {
            column.style.display = '';
        } else {
            column.style.display = 'none';
        }
    });
    
    // Ordenar tarjetas visibles
    const visibleColumns = cardColumns.filter(col => col.style.display !== 'none');
    
    // Obtener fecha del artículo desde el enlace
    const getArticleDate = (column) => {
        const link = column.querySelector('a[href*="detail.html"]');
        if (!link) return null;
        
        const urlParams = new URLSearchParams(link.href.split('?')[1]);
        const articleId = parseInt(urlParams.get('id'));
        const article = getArticleById(articleId);
        
        return article ? article.dateSort : null;
    };
    
    if (sortValue === 'titre') {
        // Ordenar por título A-Z
        visibleColumns.sort((a, b) => {
            const titleA = a.querySelector('.card-title')?.textContent || '';
            const titleB = b.querySelector('.card-title')?.textContent || '';
            return titleA.localeCompare(titleB);
        });
    } else if (sortValue === 'recent') {
        // Ordenar por más reciente primero
        visibleColumns.sort((a, b) => {
            const dateA = getArticleDate(a);
            const dateB = getArticleDate(b);
            if (!dateA || !dateB) return 0;
            return dateB - dateA; // Descendente (más reciente primero)
        });
    } else if (sortValue === 'ancien') {
        // Ordenar por más antiguo primero
        visibleColumns.sort((a, b) => {
            const dateA = getArticleDate(a);
            const dateB = getArticleDate(b);
            if (!dateA || !dateB) return 0;
            return dateA - dateB; // Ascendente (más antiguo primero)
        });
    }
    
    // Reordenar en el DOM (solo si hay resultados visibles)
    if (visibleColumns.length > 0) {
        visibleColumns.forEach(column => {
            cardsContainer.appendChild(column);
        });
    }
    
    // Mostrar mensaje si no hay resultados (antes de reordenar)
    showNoResultsMessage(visibleColumns.length === 0);
}

/**
 * Mostrar/ocultar mensaje de "sin resultados"
 */
function showNoResultsMessage(show) {
    const cardsContainer = document.querySelector('.row.g-4');
    let noResultsMsg = document.getElementById('noResultsMessage');
    
    if (show) {
        // Si no existe, crearlo
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'noResultsMessage';
            noResultsMsg.className = 'col-12 text-center py-5';
            noResultsMsg.style.display = ''; // Visible por defecto
            noResultsMsg.innerHTML = `
                <div class="alert alert-info">
                    <h4>Aucun résultat trouvé</h4>
                    <p>Essayez de modifier votre recherche</p>
                </div>
            `;
            cardsContainer.appendChild(noResultsMsg);
        } else {
            // Si ya existe, solo mostrarlo
            noResultsMsg.style.display = '';
        }
    } else {
        // Ocultar mensaje cuando hay resultados
        if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }
}

// Función para redirigir a la página de detalles
function goToDetail(publicationId) {
    window.location.href = `detail.html?id=${publicationId}`;
}

// Función para volver a la página principal
function backToHome() {
    window.location.href = 'index.html';
}
