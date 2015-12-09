'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sleekEditApp
 */
angular.module('sleekEditApp')
  .controller('MainCtrl', function (oauth, $rootScope, $scope) {

    $scope.docData = {};

    oauth.init();

    $scope.login = function () {
      oauth.login();
    };

    $scope.list = function () {
      var mime = "mimeType='application/vnd.google-apps.document'";
      var url = "https://www.googleapis.com/drive/v2/files?q="+encodeURIComponent(mime);
      $scope.stuffToDisplay = [];
      oauth.acc.get(url).done(function(result) {
        console.log("[list] result:");
        console.log(result);
        $scope.docData = result;
        console.log("[list] docData:");
        console.log($scope.docData.items);
        for (var i=0; i<$scope.docData.items.length; i++){
          if($scope.docData.items[i].editable && !$scope.docData.items[i].explicitlyTrashed) {
            $scope.stuffToDisplay.push($scope.docData.items[i]);
          }

        }
        $scope.$apply();
      }).fail(function(err){
        console.log(err);
      });
    };

  });
