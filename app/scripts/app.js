'use strict';

/**
 * @ngdoc overview
 * @name willraynercomApp
 * @description
 * # willraynercomApp
 *
 * Main module of the application.
 */
angular
  .module('willraynercomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/case/business-systems', {
        templateUrl: 'views/caseBusiness.html',
        controller: 'CaseCtrl'
      })
      .when('/sparetime', {
        templateUrl: 'views/sparetime.html',
        controller: 'MainCtrl'
      })
      .when('/atlassian', {
        templateUrl: 'views/atlassian.html',
        controller: 'AtlassianCtrl',
        controllerAs: 'atlassian'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
