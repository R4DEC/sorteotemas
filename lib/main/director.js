angular.module('myApp', [])
    .controller('myCtrl', ['$scope', function($scope) {
      $scope.director = '';
      $scope.getDirector() = function() {
        $scope.director = 'CHAPLIN';
      };
    }]);