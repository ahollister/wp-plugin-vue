<?php
// Prevent direct file access
if ( ! defined( 'ABSPATH' ) ) { exit; }

// Load Vue JS app if shortcode is used on page
function vueplugin_enqueue_scripts() {
    global $post;
    if ( has_shortcode( $post->post_content, 'vueplugin' ) ) {
        wp_enqueue_script( 'vueplugin_scripts', plugins_url( 'vueplugin-app/dist/build.js', __FILE__ ), array(), false, true );
        wp_enqueue_style( 'vueplugin_styles', plugins_url( 'vueplugin-app/styles/dist/sass/styles.min.css', __FILE__ ) );
    }
}
add_action( 'wp_enqueue_scripts', 'vueplugin_enqueue_scripts');
