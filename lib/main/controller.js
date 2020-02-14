angular.module('myApp').controller('myCtrl', function($scope) {
    /*const directorList = ['CHAPLIN', 'COPPOLA', 'SPIELBERG', 'CUBRICK', 'CLINT EASTWOOD', 'JOSE LUIS CUERDA'];
    const dateList = ['04/03/2020', '04/03/2020', '04/03/2020', '08/03/2020', '08/03/2020', '08/03/2020'];*/
    $scope.director;
    $scope.date;
    $scope.directorFunction = function() {
      /*var listIndex = getRamdonIndex(directorList);
      const result = getValue(directorList, listIndex);
      directorList.splice(listindex, 1);*/

      $scope.director = 'COPPOLA';
    };
    $scope.dateFunction = function() {
        $scope.date = '08/03/2020';
    };
});
