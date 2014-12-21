'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
angular.module('myApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'ui.router',
      'Karma'
    ];
  }).controller( 'TableController', function TableController( $scope ) {
  // This is simple a demo for UI Boostrap.
 $scope.cells = contents();
     console.log($scope);
  function contents(){
    var num = ['Take a picture with a bus host',
    2,
    3,
    4,5,6,7,8,9,10,11,12,'Free Square',14,15,16,17,18,19,20,21,22,23,24,25];
   return num;
  }
});
