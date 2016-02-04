'use strict';

/**
 * @ngdoc function
 * @name sleekEditApp.controller:EditorCtrl
 * @description
 * # EditorCtrl
 * Controller for the document editing view.
 */
angular.module('sleekEditApp')
  .controller('EditorCtrl', function (oauth, $rootScope, $scope) {

    $scope.driveData = {};

    $scope.listFiles = function () {
      var url = "https://www.googleapis.com/drive/v2/files?q=mimeType='application/vnd.google-apps.document'";
      $scope.fileList = [];
      oauth.get(url).then(function(result) {
        $scope.driveData = result;
        for (var i=0; i<$scope.driveData.items.length; i++) {
          if($scope.driveData.items[i].editable && !$scope.driveData.items[i].explicitlyTrashed) {
            $scope.fileList.push($scope.driveData.items[i]);
          }
        }
      });
    };

    $scope.getFileDetails = function (fileId) {
      var url = "https://www.googleapis.com/drive/v2/files/" + fileId;
      oauth.get(url).then(function(result) {
        $scope.driveData = result;
        var download = $scope.driveData.exportLinks["text/html"];
        oauth.get(download).then(function(result) {
          $scope.htmlContent = result;
        });
      });
    };

    $scope.saveNewFile = function () {
      var url = "https://www.googleapis.com/upload/drive/v2/files/";
      var params = "";
      oauth.post(url, params).then(function(result) {
        console.log(result);
      });
    };

  });
