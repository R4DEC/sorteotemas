angular.module('myApp').controller('myCtrl', function($scope) {
    const directorList = ['CHAPLIN', 'COPPOLA', 'SPIELBERG', 'CUBRICK', 'CLINT EASTWOOD', 'JOSE LUIS CUERDA'];
    const dateList = ['Orden 1 - 04/03/2020', 'Orden 2 - 04/03/2020', 'Orden 3 - 04/03/2020', 'Orden 1 - 08/03/2020', 'Orden 2 - 08/03/2020', 'Orden 3 - 08/03/2020'];
    $scope.director = '';
    $scope.date = '';
    $scope.directorFunction = function() {
      $scope.director = assignValueToScope(directorList, 'director');
    };
    $scope.dateFunction = function() {
      $scope.date = assignValueToScope(dateList, 'date');
    };
});
