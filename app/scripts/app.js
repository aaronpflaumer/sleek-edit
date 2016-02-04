'use strict';

/**
 * @ngdoc overview
 * @name sleekEditApp
 * @description
 * # sleekEditApp
 *
 * Main module of the application.
 */
angular
  .module('sleekEditApp', ['ui.router', 'LocalStorageModule', 'textAngular'])

  .config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider
      .otherwise("/");
    // State routes
    $stateProvider
      .state('editor', {
        url: "/",
        templateUrl: "../views/editor.html",
        controller: 'EditorCtrl'
      })
      .state('login', {
        url: "/login",
        templateUrl: "../views/login.html",
        controller: 'LoginCtrl'
      });

      localStorageServiceProvider
        .setPrefix('sleekEdit');

  });
