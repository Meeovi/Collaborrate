const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/user-management.js', 'public/js')
    .js('resources/js/dashboard-charts.js', 'public/js')
    .js('resources/js/sidenav.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
