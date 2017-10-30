'use strict';

angular.module('myApp', ['ngMaterial'])
  
  .controller('headerCtrl', ['$scope', function($scope) {
  	$scope.header = "PictureBoard Application";
  }]);