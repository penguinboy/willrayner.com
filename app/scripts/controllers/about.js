'use strict';

/**
 * @ngdoc function
 * @name willraynercomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the willraynercomApp
 */
angular.module('willraynercomApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.age = (new Date().getFullYear()) - 1990;
  });
