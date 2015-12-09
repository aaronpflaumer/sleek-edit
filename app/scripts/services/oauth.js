'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.factory:Oauth
 * @description
 * # Oauth
 * Handles authentication to service APIs that utilize oauth.
 */
angular.module('sleekEditApp').factory('oauth', function($rootScope) {

  var oauth = {};

  //OAuth.io public key. Safe to commit.
  var publicKey = "8hymaBXiUxiNJPpbcC2778Pykdw";

  //Create accessor.
  oauth.acc = null;

  //Initializes OAuth as an authentication backend.
  oauth.init = function() {
    OAuth.initialize(publicKey);
  };

  oauth.login = function() {
    OAuth.popup('google_drive').done(function(google) {
      $rootScope.access_token = google.access_token;
      $rootScope.$apply();
      console.log("[login] access_token:");
      console.log(google.access_token);
      console.log("[login] google:");
      console.log(google);
      oauth.acc = google;
    }).fail(function(err) {
      console.log(err);
    });
  };

  return oauth;
});
