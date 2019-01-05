<?php
/**
 * My Awesome WordPress Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage mawt
 * @since 1.0.0
 * @version 1.0.0
 */

global $google_fonts;
global $font_awesome;
global $hamburgers;

$google_fonts = 'https://fonts.googleapis.com/css?family=Raleway:400,700';
$font_awesome = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';
$hamburgers = 'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/0.9.3/hamburgers.min.css';

//https://codex.wordpress.org/Content_Width
//Establecer el ancho máximo permitido para cualquier contenido en el tema, como oEmbeds e imágenes
if ( !isset( $content_width ) ) {
  $content_width = 800;
}

if ( !function_exists('mawt_scripts') ):
  function mawt_scripts () {
    global $google_fonts;
    global $font_awesome;
    global $hamburgers;

    wp_enqueue_style( 'google-fonts', $google_fonts, array(), '1.0.0', 'all' );
    wp_enqueue_style( 'font-awesome', $font_awesome, array(), '5.0.13', 'all' );
    wp_enqueue_style( 'hamburgers', $hamburgers, array(), '0.9.3', 'all' );
    wp_enqueue_style( 'custom-properties', get_template_directory_uri() . '/css/custom_properties.css', array('google-fonts'), '1.0.0', 'all' );
    wp_enqueue_style( 'style', get_stylesheet_uri(), array('google-fonts', 'font-awesome', 'hamburgers', 'custom-properties'), '1.0.0', 'all' );

    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/script.js', array('jquery'), '1.0.0', true );
  }
endif;

add_action('wp_enqueue_scripts', 'mawt_scripts');

function mawt_menus () {
  register_nav_menus(array(
    'main_menu' => __('Menú Principal', 'mawt'),
    'social_menu' => __('Menú Redes Sociales', 'mawt')
  ));
}

add_action( 'init', 'mawt_menus' );

function mawt_register_sidebars () {
  register_sidebar(array(
    'name' => __('Sidebar principal', 'mawt') ,
    'id' => 'main_sidebar',
    'description' => __('Este es el sidebar principal', 'mawt'),
    'before_widget' => '<article id="%1$s" class="Widget  %2$s">',
    'after_widget' => '</article>',
    'before_title' => '<h3>',
    'after_title' => '</h3>',
  ));
}

add_action('widgets_init', 'mawt_register_sidebars');

function mawt_setup () {
  load_theme_textdomain( 'mawt', get_template_directory() . '/languages' );

  add_theme_support( 'post-thumbnails' );

    add_theme_support('html5', array(
    'comment-list',
    'comment-form',
    'search-form',
    'gallery',
    'caption'
  ));

  //https://codex.wordpress.org/Post_Formats
  add_theme_support('post-formats',  array (
    'aside',
    'gallery',
    'link',
    'image',
    'quote',
    'status',
    'video',
    'audio',
    'chat'
  ) );

  //Permite que los themes y plugins administren el título, si se activa, no debe usarse wp_title()
  add_theme_support( 'title-tag' );

  //Activar Feeds RSS
  add_theme_support( 'automatic-feed-links' );

  //Ocultar Tags innecesarios del head
  //Versión de WordPress
  remove_action('wp_head', 'wp_generator');

  //Imprime sugerencias de recursos para los navegadores para precargar, pre-renderizar y pre-conectarse a sitios web
  remove_action('wp_head', 'wp_resource_hints', 2);
  //Muestre el enlace al punto final del servicio Really Simple Discovery
  remove_action('wp_head', 'rsd_link');
  //Muestre el enlace al archivo de manifiesto de Windows Live Writer
  remove_action('wp_head', 'wlwmanifest_link');
  //Inyecta rel = shortlink en el encabezado si se define un shortlink para la página actual.
  remove_action('wp_head', 'wp_shortlink_wp_head');

  //Quitar scripts para soporte a emojis
  //remove_action('wp_print_styles', 'print_emoji_styles');
  //remove_action('wp_head', 'print_emoji_detection_script', 7);

  //Quitar la barra de administración en el Frontend
  add_filter('show_admin_bar', '__return_false');
}

add_action('after_setup_theme', 'mawt_setup');

require_once get_template_directory() . '/inc/custom-header.php';

require_once get_template_directory() . '/inc/customizer.php';

require_once get_template_directory() . '/inc/custom-excerpt.php';

require_once get_template_directory() . '/inc/custom-description.php';

require_once get_template_directory() . '/inc/custom-login.php';

require_once get_template_directory() . '/inc/custom-admin.php';
