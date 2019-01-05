<aside class="Comments">
  <?php if ( have_comments() ): ?>
    <h3>
      <?php
        comments_number(
          __('No hay comentarios aún', 'mawt'),
          __('Hay un comentario publicado', 'mawt'),
          __('Hay % comentarios', 'mawt')
        );
      ?>
    </h3>
    <ol class="commentlist">
      <?php wp_list_comments(); ?>
    </ol>
  <?php endif; ?>
  <?php comment_form(); ?>
</aside>
