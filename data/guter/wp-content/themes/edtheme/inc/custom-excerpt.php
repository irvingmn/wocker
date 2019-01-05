<?php
function mawt_excerpt_more () {
  return '<a href="'. get_permalink() .'">'. __(' leer más...', 'mawt') .'<i class="fab fa-readme"></i></a>';
}

add_filter('excerpt_more', 'mawt_excerpt_more');

function mawt_excerpt_length () {
  return 40;
}

add_filter('excerpt_length', 'mawt_excerpt_length');
?>
