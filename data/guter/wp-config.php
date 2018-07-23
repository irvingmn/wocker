<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wordpress' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@5b#buwn7]-W?s&6Zn(kkxl9t]]YYxy=_MU6lLF&|6[O0T@ANB|+vwjzJT&ja?-w' );
define( 'SECURE_AUTH_KEY',  'NjN]*,sAj@|^=^T^<:u!ggDfK0$$@01cr!IwRHW(D{|Co7|CWF-`iJ#6qZjSd[*.' );
define( 'LOGGED_IN_KEY',    'b#=qBICqdvu6R`8?q@t&R5WH!hCZ:|J=`<|@&d+y5]d|2!I4A1:N5M,sd_`?SoSo' );
define( 'NONCE_KEY',        'jlkA)e#nX2!=sKhHE~|V19s^uBP=y%3G+ohV,;ya7JCa9qg4:@yzgJExI{bz^t%)' );
define( 'AUTH_SALT',        't8@8Z%m[uUEh!`j{$5TdHb(tS0gp9:Nx/r?z?*LRFN!`$;_R<W9~|[N9KA!Y6}cg' );
define( 'SECURE_AUTH_SALT', 'C~#GC-f_~*f{75:F`xQe>s4xA;2@W_Lpd<;R@W_Umq}(XHzVN>?Y56qPkSOO}7pk' );
define( 'LOGGED_IN_SALT',   'C cxM$-sQwO3_2i>UCR}Lvu-/ >%wm-2K{QVP(Rh~nvNA-O8H#y78vgn.Pcw+$(T' );
define( 'NONCE_SALT',       'C*ORL*eO2s]EaJ0q|s%jtZXq=%fnUGmAqqnrI*?tp4!y7#^xYH_+czVlCCe!U1f@' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
