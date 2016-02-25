var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html'
        })
        .when('/leslie', {
            templateUrl: '/views/templates/leslie.html',
            controller: 'LeslieannController'
        })
        .when('/broadcity', {
            templateUrl: '/views/templates/broadcity.html'
        })
        .when('/daria', {
            templateUrl: '/views/templates/daria.html'
        })
        .when('/serenablair', {
            templateUrl: '/views/templates/serenablair.html',
            controller: 'SerenablairController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);

