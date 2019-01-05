    </section>
    <footer class="Footer">
      <section class="Footer-container">
        <div>
          <?php
          if ( has_nav_menu( 'social_menu' ) ):
            wp_nav_menu(array(
              'theme_location' => 'social_menu',
              'container' => 'nav',
              'container_class' => 'SocialMedia',
              'link_before' => '<span class="sr-text">',
              'link_after' => '</span>'
            ));
          endif;
        ?>
        </div>
        <div>
          <p>
            &copy; <?php echo date('Y') . __(' Derechos Reservados', 'mawt'); ?>
            <a href="https://jonmircha.com" target="_blank">@jonmircha</a>.
          </p>
        </div>
      </section>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
