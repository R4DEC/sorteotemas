angular.module('myApp').controller('myCtrl', function($scope) {
    let directorList = getDirectors();
    let dateList = getDates();
    let numberList = [];
    $scope.director = '';
    $scope.date = '';
    $scope.originalNumber = '';
    $scope.number = '';

    $scope.directorFunction = function() {
      // Obtain a value for the director field
      $scope.director = assignValueToScope(directorList, 'director').toUpperCase();
    };

    $scope.dateFunction = function() {
      // Obtain a value for the date field
      $scope.date = processDateGroups(dateList);
    };

    $scope.setNumber = function() {
      // Set new number value
      numberList = fillNumberList($scope.originalNumber);
    };

    $scope.numberFunction = function() {
      // Obtain a value for the number field
      $scope.number = getNumber(numberList);
    };

    $scope.resetNumber = function() {
      $scope.originalNumber = '';
      $scope.number = '';
    }

    $scope.resetFunction = function() {
      // Re-assign values to the lists
      directorList = getDirectors();
      dateList = getDates();
      numberList = [];
      $scope.director = '';
      $scope.date = '';
      $scope.originalNumber = '';
      $scope.number = '';
    };
});
