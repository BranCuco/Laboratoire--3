/**
 * add.ts - Formulario para agregar publicaciones
 */

$(() => {
    // Manejar el envío del formulario
    $('#addArticleForm').on('submit', function(e: JQuery.SubmitEvent): void {
        e.preventDefault();
        showConfirmDialog();
    });
    
    // Inicializar el diálogo de confirmación
    $('#confirmDialog').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Confirmer": function(): void {
                $(this).dialog('close');
                submitArticle();
            },
            "Annuler": function(): void {
                $(this).dialog('close');
            }
        }
    });
});

/**
 * Mostrar diálogo de confirmación
 */
function showConfirmDialog(): void {
    $('#confirmDialog').dialog('open');
}

/**
 * Enviar artículo a la API
 */
function submitArticle(): void {
    const title = $('#title').val() as string;
    const author = $('#author').val() as string;
    const image = $('#image').val() as string;
    const summary = $('#summary').val() as string;
    const content = $('#content').val() as string;
    
    const newArticle: Omit<Article, 'id'> = {
        title: title.trim(),
        author: author.trim(),
        date: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
        image: image.trim(),
        summary: summary.trim(),
        content: content.trim()
    };
    
    addArticle(newArticle)
        .done((): void => {
            alert('Article publié avec succès!');
            window.location.href = 'index.html';
        })
        .fail((): void => {
            alert('Erreur lors de la publication de l\'article. Vérifiez que l\'API est démarrée.');
        });
}
