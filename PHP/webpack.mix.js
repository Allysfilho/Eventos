// webpack.mix.js
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .css('resources/css/app.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .vue()
    .copy('node_modules/vuetify/dist/vuetify.min.css', 'public/css/vuetify.min.css');
