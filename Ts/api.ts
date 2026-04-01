/**
 * api.ts - Funciones para interactuar con la API
 */

const API_URL = 'http://localhost:3000';

interface Article {
    id: number;
    title: string;
    author: string;
    date: string;
    image: string;
    summary: string;
    content: string;
}

interface BlogComment {
    id: number;
    articleId: number;
    date: string;
    content: string;
}

/**
 * Obtener todos los artículos
 */
function getAllArticles(): JQuery.jqXHR<Article[]> {
    return $.ajax({
        url: `${API_URL}/articles`,
        method: 'GET',
        dataType: 'json'
    });
}

/**
 * Obtener un artículo por ID
 */
function getArticleById(id: number): JQuery.jqXHR<Article> {
    return $.ajax({
        url: `${API_URL}/articles/${id}`,
        method: 'GET',
        dataType: 'json'
    });
}

/**
 * Agregar un nuevo artículo
 */
function addArticle(article: Omit<Article, 'id'>): JQuery.jqXHR<Article> {
    return $.ajax({
        url: `${API_URL}/articles`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(article)
    });
}

/**
 * Obtener comentarios de un artículo
 */
function getCommentsByArticleId(articleId: number): JQuery.jqXHR<BlogComment[]> {
    return $.ajax({
        url: `${API_URL}/comments`,
        method: 'GET',
        dataType: 'json',
        data: { articleId: articleId }
    });
}

/**
 * Agregar un nuevo comentario
 */
function addComment(comment: Omit<BlogComment, 'id'>): JQuery.jqXHR<BlogComment> {
    return $.ajax({
        url: `${API_URL}/comments`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(comment)
    });
}

/**
 * Formatear fecha para mostrar
 */
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('fr-FR', options);
}
