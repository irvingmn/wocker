<?php
//https://codex.wordpress.org/Dashboard_Widgets_API
//https://codex.wordpress.org/Plugin_API/Admin_Screen_Reference
//https://codex.wordpress.org/Administration_Screens
//https://codex.wordpress.org/Adding_Administration_Menus

function mawt_add_editor_styles () {
  global $google_fonts;
  add_editor_style( $google_fonts );
  add_editor_style( 'css/custom_properties.css' );
  add_editor_style( 'css/custom_editor_style.css' );
}

add_action( 'admin_init', 'mawt_add_editor_styles' );

function mawt_user_contactmethods ($data_user) {
  $data_user['facebook']=__('Facebook', 'mawt');
  $data_user['twitter']=__('Twitter', 'mawt');

  return $data_user;
}

add_filter( 'user_contactmethods', 'mawt_user_contactmethods' );
?>
