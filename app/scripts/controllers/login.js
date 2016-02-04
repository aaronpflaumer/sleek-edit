'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sleekEditApp
 */
angular.module('sleekEditApp')
  .controller('LoginCtrl', function (oauth, $rootScope, $scope) {

    oauth.init();

    $scope.login = function () {
      oauth.login();
    };

  });
