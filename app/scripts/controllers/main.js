'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myApp')
    .controller('MainCtrl', function ($scope, $rootScope) {
      $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  var onSuccess = function(position) {
    $rootScope.$apply(function(){
      $scope.position = position;
    });
  };
  var onError = function(error) {
    console.log('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
  };
  navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
});