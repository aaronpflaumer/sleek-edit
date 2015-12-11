'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sleekEditApp
 */
angular.module('sleekEditApp')
  .controller('LoginCtrl', function (oauth, $rootScope, $scope, localstorage) {

    $scope.login = function () {
      oauth.login(function (response) {
        if(response) {
          localstorage.set("google", oauth.acc);
        }
      });
    };

  });
