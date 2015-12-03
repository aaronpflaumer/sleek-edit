'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.factory:Oauth
 * @description
 * # Oauth
 * Handles authentication to service APIs that utilize oauth.
 */
angular.module('sleekEditApp').factory('oauth', function() {

  var oauth = {};

  //Initializes OAuth as an authentication backend.
  oauth.init = function() {
    //OAuth.io public key. Safe to commit.
    OAuth.initialize('8hymaBXiUxiNJPpbcC2778Pykdw');
  };

  return oauth;
});
