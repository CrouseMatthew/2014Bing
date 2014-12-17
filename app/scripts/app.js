'use strict';
/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
    .module('myApp', [
        'ngRoute',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        var PhoneGapInit = function() {
            this.boot = function() {
                angular.bootstrap(document, ['myApp']);
            };
            if (window.phonegap !== undefined) {
                document.addEventListener('deviceready', function() {
                    this.boot();
                });
            } else {
                console.log('PhoneGap not found, booting Angular manually');
                this.boot();
            }
        };
        angular.element(document).ready(function() {
            new PhoneGapInit();
        });
    });
