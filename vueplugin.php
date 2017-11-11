<?php
/**
Plugin Name: Vue JS Plugin
Plugin URI: http://adamhollister.com
Description: Boilerplate VueJS WordPress plugin
Version: 0.1
Author: Adam Hollister
Author URI: http://adamhollister.com
Text Domain: ah_vueplugin */

if ( ! defined( 'ABSPATH' ) ) { exit; }

// Register the shortcode (instantiates the app)
require_once __DIR__ . '/register-shortcode.php';
// Enqueue app JS + CSS (on pages which include the shortcode)
require_once __DIR__ . '/enqueues.php';
