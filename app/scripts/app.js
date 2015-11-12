'use strict';

/**
 * @ngdoc overview
 * @name kivunimApp
 * @description
 * # kivunimApp
 *
 * Main module of the application.
 */
angular
  .module('kivunimApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
