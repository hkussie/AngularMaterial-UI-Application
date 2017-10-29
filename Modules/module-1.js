'use strict';

angular.module('myApp', ['ngMaterial'])
  .controller('myCtrl', ['$scope', function($scope) {
  	$scope.header = "This is a test";
  }]);