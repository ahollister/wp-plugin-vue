<?php
// Prevent direct file access
if ( ! defined( 'ABSPATH' ) ) { exit; }

// [vueplugin]
function vueplugin_shortcode( $atts ){
	return '<div id="vueplugin-app"></div>';
}
add_shortcode( 'vueplugin', 'vueplugin_shortcode' );
