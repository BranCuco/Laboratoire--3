/**
 * detail.ts - Cargar contenido dinámico del artículo y comentarios
 */

$(() => {
    // Obtener el ID de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleIdStr = urlParams.get('id');
    
    if (!articleIdStr) {
        showArticleNotFound();
        return;
    }
    
    const articleId = parseInt(articleIdStr);
    
    // Cargar el artículo y los comentarios
    loadArticle(articleId);
    loadComments(articleId);
    
    // Event listener para agregar comentario
    $('#commentForm').on('submit', function(e: JQuery.SubmitEvent): void {
        e.preventDefault();
        submitComment(articleId);
    });
});

/**
 * Cargar artículo desde la API
 */
function loadArticle(articleId: number): void {
    getArticleById(articleId)
        .done((article: Article): void => {
            // Actualizar título de la página
            document.title = `${article.title} - Blog du CEPI`;
            
            // Actualizar contenido del artículo
            $('.blog-article h1').text(article.title);
            $('.article-meta').html(`
                <span>Publié le ${formatDate(article.date)}</span> | 
                <span>Par ${article.author}</span>
            `);
            $('.blog-article img').attr('src', article.image).attr('alt', article.title);
            $('.article-content').html(article.content);
        })
        .fail((): void => {
            showArticleNotFound();
        });
}

/**
 * Cargar comentarios desde la API
 */
function loadComments(articleId: number): void {
    const commentsList = $('.comments-list');
    
    getCommentsByArticleId(articleId)
        .done((comments: BlogComment[]): void => {
            commentsList.empty();
            
            if (comments.length === 0) {
                commentsList.html('<p class="text-muted">Aucun commentaire pour le moment. Soyez le premier à commenter!</p>');
                return;
            }
            
            comments.forEach((comment: BlogComment): void => {
                const commentHtml = `
                    <div class="comment mb-4 pb-4 border-bottom">
                        <div class="comment-meta text-muted mb-2">
                            <small>${formatDate(comment.date)}</small>
                        </div>
                        <div class="comment-content">
                            <p>${comment.content}</p>
                        </div>
                    </div>
                `;
                commentsList.append(commentHtml);
            });
        })
        .fail((): void => {
            commentsList.html('<p class="text-danger">Erreur lors du chargement des commentaires.</p>');
        });
}

/**
 * Enviar nuevo comentario
 */
function submitComment(articleId: number): void {
    const commentTextarea = $('#commentTextarea');
    const commentContent = commentTextarea.val() as string;
    
    if (!commentContent || commentContent.trim() === '') {
        alert('Veuillez entrer un commentaire.');
        return;
    }
    
    const newComment = {
        articleId: articleId,
        date: new Date().toISOString(),
        content: commentContent.trim()
    };
    
    addComment(newComment)
        .done((): void => {
            commentTextarea.val('');
            loadComments(articleId); // Recargar comentarios
            alert('Commentaire ajouté avec succès!');
        })
        .fail((): void => {
            alert('Erreur lors de l\'ajout du commentaire.');
        });
}

/**
 * Mostrar mensaje de artículo no encontrado
 */
function showArticleNotFound(): void {
    $('.blog-article').html(`
        <div class="alert alert-warning text-center">
            <h2>Article non trouvé</h2>
            <p>L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <a href="index.html" class="btn btn-primary mt-3">Retour à l'accueil</a>
        </div>
    `);
}
