/**
 * detail.js - Cargar contenido dinámico del artículo
 */

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    
    // Obtener el artículo
    const article = getArticleById(articleId);
    
    if (article) {
        // Actualizar título de la página
        document.title = `${article.title} - Blog du CEPI`;
        
        // Actualizar contenido del artículo
        document.querySelector('.blog-article h1').textContent = article.title;
        document.querySelector('.article-meta').innerHTML = `
            <span>Publié le ${article.date}</span> | 
            <span>Par ${article.author}</span>
        `;
        document.querySelector('.blog-article img').src = article.image;
        document.querySelector('.blog-article img').alt = article.title;
        document.querySelector('.article-content').innerHTML = article.content;
    } else {
        // Si no se encuentra el artículo, mostrar mensaje de error
        document.querySelector('.blog-article').innerHTML = `
            <div class="alert alert-warning text-center">
                <h2>Article non trouvé</h2>
                <p>L'article que vous recherchez n'existe pas ou a été supprimé.</p>
                <a href="index.html" class="btn btn-primary mt-3">Retour à l'accueil</a>
            </div>
        `;
    }
});
