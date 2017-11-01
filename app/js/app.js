angular.module('ecommerce', ['ngRoute', 'ecommerce.controllers'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/pages/bemvindo.html',
                controller: 'BemVindoController'
            })
            .when('/categoria', {
                templateUrl: '/app/pages/categoria.html',
                controller: 'CategoriaController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
