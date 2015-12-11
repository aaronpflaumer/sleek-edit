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

  //OAuth.io public key. Safe to commit.
  var publicKey = "8hymaBXiUxiNJPpbcC2778Pykdw";

  //Create accessor.
  oauth.acc = null;

  //Initializes OAuth as an authentication backend.
  oauth.init = function() {
    OAuth.initialize(publicKey);
  };

  oauth.login = function(callback) {
    OAuth.popup('google_drive').done(function(google) {
      oauth.acc = google;
      callback(true);
    }).fail(function(err) {
      console.error("oauth.login failed:", err);
      callback(false);
    });
  };

  return oauth;
});
