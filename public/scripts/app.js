var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html'
        })
        .when('/leslie', {
            templateUrl: '/views/templates/leslie.html',
            controller: 'ImageController'
        })
        .when('/broadcity', {
            templateUrl: '/views/templates/broadcity.html',
            controller: 'ImageController'
        })
        .when('/daria', {
            templateUrl: '/views/templates/daria.html',
            controller: 'ImageController'
        })
        .when('/serenablair', {
            templateUrl: '/views/templates/serenablair.html',
            controller: 'ImageController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);

