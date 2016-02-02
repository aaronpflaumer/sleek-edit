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

    $scope.list = function () {
      var mime = "mimeType='application/vnd.google-apps.document'";
      var url = "https://www.googleapis.com/drive/v2/files?q=" + encodeURIComponent(mime);
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
        console.log("stuffToDisplay:");
        console.log($scope.stuffToDisplay);
      }).fail(function(err){
        console.log(err);
      });
    };

    $scope.get = function (fileId) {
      var url = "https://www.googleapis.com/drive/v2/files/" + fileId;
      oauth.acc.get(url).done(function(result) {
        console.log("[get] result:");
        console.log(result);
        $scope.fileData = result;
        console.log("[get] fileData:");
        console.log($scope.fileData.exportLinks["text/html"]);

        var download = $scope.fileData.exportLinks["text/html"];
        oauth.acc.get(download).done(function(result) {
          console.log(result);
          $scope.fileData = result;
        }).fail(function(err) {
          console.log(err);
        });

      }).fail(function(err) {
        console.log(err);
      });
    };

    $scope.post = function (fileId) {

    };

  });
