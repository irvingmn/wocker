<?php
/* Template name: Página con sidebar a la izquierda */
get_header(); ?>
<div class="Content-container Page Sidebar-left">
  <?php  get_sidebar(); ?>
  <main class="Main">
    <?php while ( have_posts() ) : the_post(); ?>
      <section class="PostContent">
        <article><?php the_content(); ?></article>
      </section>
    <?php endwhile; ?>
  </main>
</div>
<?php  get_footer(); ?>
