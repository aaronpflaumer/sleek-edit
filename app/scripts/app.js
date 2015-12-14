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
  .module('sleekEditApp', ['ui.router', 'LocalStorageModule'])

  .config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider
      .otherwise("/");
    // State routes
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "../views/main.html",
        controller: 'MainCtrl'
        // resolve: { authenticate: authenticate }
      })
      .state('login', {
        url: "/login",
        templateUrl: "../views/login.html",
        controller: 'LoginCtrl'
      });

      // function authenticate($q, localstorage, $state, $timeout) {
      //   if (user.isAuthenticated()) {
      //     // Resolve the promise successfully
      //     return $q.when();
      //   } else {
      //
      //     $timeout(function() {
      //       // This code runs after the authentication promise has been rejected.
      //       // Go to the log-in page
      //       $state.go('login');
      //     });
      //
      //     // Reject the authentication promise to prevent the state from loading
      //     return $q.reject();
      //   }
      // }

      localStorageServiceProvider
        .setPrefix('sleekEdit');

  });
