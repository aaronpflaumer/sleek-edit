'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.factory:LocalStorage
 * @description
 * # LocalStorage
 * Handles authentication to service APIs that utilize LocalStorage.
 */
angular.module('sleekEditApp').factory('localstorage', function(localStorageService) {

  var localstorage = {};

  if(localStorageService.isSupported) {
    localstorage.set = function(key, value) {
      if(key) {
        if(value) {
          localStorageService.set(key, value);
        }
        else {
          console.error("localstorage.set was called with no value:", value);
        }
      }
      else {
        console.error("localstorage.set was called with no key:", key);
      }
    };
    localstorage.get = function(key) {
      var value = null;
      if(key) {
        value = localStorageService.get(key);
      }
      else {
        console.error("localstorage.get was called with no key:", key);
      }
      return value;
    };
  }
  else {
    localstorage.set = function() {
      console.error("localstorage.set was called when localstorage was not supported.");
    };
  }

  return localstorage;

});
