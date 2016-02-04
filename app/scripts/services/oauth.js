'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.factory:Oauth
 * @description
 * # Oauth
 * Handles authentication to service APIs that utilize oauth.
 */
angular.module('sleekEditApp').factory('oauth', function($q, localstorage) {

  var oauth = {};

  //OAuth.io public key. Safe to commit.
  var publicKey = "8hymaBXiUxiNJPpbcC2778Pykdw";

  var acc = null;

  //Private Functions
  function loggedIn () {
    return (acc) ? true : false;
  }

  function returnPromise(closure) {
    return $q(function(resolve, reject) {
      closure(resolve, reject);
   });
  }

  // FunctA = returnPromise
  // FunctB = closure
  // FunctC = $q()
  // FunctD = Anon Callback (resolve, reject)

  //Initializes OAuth as an authentication backend.
  oauth.init = function() {
    OAuth.initialize(publicKey);
  };

  oauth.login = function() {
    OAuth.popup('google_drive').done(function(google) {
      acc = google;
      localstorage.set("google", google);
    }).fail(function(err) {
      console.error("Oauth login failed: ", err);
    });
  };

  oauth.get = function (url) {
    if (!loggedIn()) {
      console.error("Oauth use detected without login.");
      return;
    }
    var closure = function(resolve, reject) {
      acc.get(url).done(function(result) {
        return resolve(result);
      }).fail(function(err) {
        console.error("Oauth GET failed: " + url, err);
        reject(err);
      });
    };
    return returnPromise(closure);
  };

  oauth.post = function (url, params) {
    if (!loggedIn()) {
      console.error("Oauth use detected without login.");
      return;
    }
    var closure = function(resolve, reject) {
      acc.post(url).done(function(result) {
        return resolve(result);
      }).fail(function(err) {
        console.error("Oauth POST failed : " + url + " " + params.toString(), err);
        return(reject(err));
      });
    };
    return returnPromise(closure);
  };

  oauth.put = function (url, params) {
    if (!loggedIn()) {
      console.error("Oauth use detected without login.");
      return;
    }
    var closure = function(resolve, reject) {
      acc.put(url).done(function(result) {
        return resolve(result);
      }).fail(function(err) {
        console.error("Oauth PUT failed : " + url + " " + params.toString(), err);
        return(reject(err));
      });
    };
    return returnPromise(closure);
  };

  oauth.delete = function (url) {
    if (!loggedIn()) {
      console.error("Oauth use detected without login.");
      return;
    }
    var closure = function(resolve, reject) {
      acc.delete(url).done(function(result) {
        return resolve(result);
      }).fail(function(err) {
        console.error("Oauth DELETE failed : " + url, err);
        return(reject(err));
      });
    };
    return returnPromise(closure);
  };

  return oauth;
});
