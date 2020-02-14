angular.module('myApp').controller('myCtrl', function($scope) {
    const directorList = ['CHAPLIN', 'COPPOLA', 'SPIELBERG', 'CUBRICK', 'CLINT EASTWOOD', 'JOSE LUIS CUERDA'];
    const dateList = ['04/03/2020', '04/03/2020', '04/03/2020', '08/03/2020', '08/03/2020', '08/03/2020'];
    $scope.director = '';
    $scope.date = '';
    $scope.directorFunction = function() {
      // Get the index of the director
      var listIndex = getRamdonIndex(directorList);
      // get the value of the director
      const result = getValue(directorList, listIndex);
      // Delete the director from the list
      directorList.splice(listindex, 1);
      if (directorList.length > 0 ) {
        // Set the value of the director
        $scope.director = result;
      } else {
        $scope.director = '';
        alert('No quedan directores sin asignar');
      }
    };
    $scope.dateFunction = function() {
        $scope.date = '08/03/2020';
    };
});
