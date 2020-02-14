angular.module('myApp').controller('myCtrl', function($scope) {
    let directorList = ['CHAPLIN', 'COPPOLA', 'SPIELBERG', 'CUBRICK', 'CLINT EASTWOOD', 'JOSE LUIS CUERDA'];
    let dateList = ['Orden 1 - 04/03/2020', 'Orden 2 - 04/03/2020', 'Orden 3 - 04/03/2020', 'Orden 1 - 08/03/2020', 'Orden 2 - 08/03/2020', 'Orden 3 - 08/03/2020'];
    $scope.director = '';
    $scope.date = '';
    $scope.directorFunction = function() {
      // Obtain a value for the director field
      $scope.director = assignValueToScope(directorList, 'director');
    };
    $scope.dateFunction = function() {
      // Obtain a value for the date field
      $scope.date = assignValueToScope(dateList, 'date');
    };
    $scope.resetFunction = function() {
      // Re-assign values to the lists
      directorList = ['CHAPLIN', 'COPPOLA', 'SPIELBERG', 'CUBRICK', 'CLINT EASTWOOD', 'JOSE LUIS CUERDA'];
      dateList = ['Orden 1 - 04/03/2020', 'Orden 2 - 04/03/2020', 'Orden 3 - 04/03/2020', 'Orden 1 - 08/03/2020', 'Orden 2 - 08/03/2020', 'Orden 3 - 08/03/2020'];
    };
});
