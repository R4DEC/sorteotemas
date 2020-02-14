angular.module('myApp').controller('myCtrl', function($scope) {
    const directorList = ['CHAPLIN', 'COPPOLA', 'SPIELBERG', 'CUBRICK', 'CLINT EASTWOOD', 'JOSE LUIS CUERDA'];
    const dateList = ['Orden 1 - 04/03/2020', 'Orden 2 - 04/03/2020', 'Orden 3 - 04/03/2020', 'Orden 1 - 08/03/2020', 'Orden 2 - 08/03/2020', 'Orden 3 - 08/03/2020'];
    $scope.director = '';
    $scope.date = '';
    $scope.directorFunction = function() {
      if (directorList.length > 0 ) {
      // Get the index of the director
      var listIndex = getRamdonIndex(directorList);
      // get the value of the director
      const result = getValue(directorList, listIndex);
      // Delete the director from the list
      directorList.splice(listIndex, 1);
      // Set the value of the director
      $scope.director = result;
      } else {
        $scope.director = '¡BUENA SUERTE A TODOS!';
        alert('No quedan directores por asignar');
      }
    };
    $scope.dateFunction = function() {
      if (dateList.length > 0 ) {
        // Get the index of the date
        var listIndex = getRamdonIndex(dateList);
        // get the value of the date
        const result = getValue(dateList, listIndex);
        // Delete the date from the list
        dateList.splice(listIndex, 1);
        // Set the value of the date
        $scope.date = result;
        } else {
          $scope.date = '¡BUENA SUERTE A TODOS!';
          alert('No quedan fechas por asignar');
        }
    };
});
