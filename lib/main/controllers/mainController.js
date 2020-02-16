angular.module('myApp').controller('myCtrl', function($scope) {
    let directorList = getDirectors();
    let dateList = getDates();
    $scope.director = '';
    $scope.date = '';
    $scope.directorFunction = function() {
      // Obtain a value for the director field
      $scope.director = assignValueToScope(directorList, 'director').toUpperCase();
    };
    $scope.dateFunction = function() {
      // Obtain a value for the date field
      $scope.date = assignValueToScope(dateList, 'date');
    };
    $scope.resetFunction = function() {
      // Re-assign values to the lists
      directorList = getDirectors();
      dateList = getDates();
      $scope.director = '';
      $scope.date = '';
    };
});
