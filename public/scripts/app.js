var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/leslie', {
            templateUrl: '/views/templates/leslie.html',
        })
        .when('/broadcity', {
            templateUrl: '/views/templates/broadcity.html',
        })
        .when('/daria', {
            templateUrl: '/views/templates/daria.html',
        })
        .when('/serenablair', {
            templateUrl: '/views/templates/serenablair.html',
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);

