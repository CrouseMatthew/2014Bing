'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
// angular.module('myApp')
//     .controller('MainCtrl', function ($scope, $rootScope) {
//       $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   var onSuccess = function(position) {
//     $rootScope.$apply(function(){
//       $scope.position = position;
//     });
//   };
//   var onError = function(error) {
//     console.log('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
//   };
//   navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
// }).controller( 'TableController', function TableController( $scope ) {
//   // This is simple a demo for UI Boostrap.
//  $scope.cells = contents();

//   function contents(){
//     var num = ['Take a picture with a bus host',
//     2,
//     3,
//     4,5,6,7,8,9,10,11,12,'Free Square',14,15,16,17,18,19,20,21,22,23,24,25];
//    return num;
//   }
// });