(function () {
  'use strict';

  angular.module('lunchChecker',[])
  .controller('lunchCheckerController', lunchCheckerController);

  lunchCheckerController.$inject = ['$scope'];

  function lunchCheckerController($scope) {
    $scope.listOfDishes = "";
    $scope.tooManyDishes = false;

    $scope.getMessage = function() {
      if ($scope.tooManyDishes) {
        return "Too much!";
      }
      return "Enjoy!";
    };

    function countItems(list) {
      list = list.split(',');
      var count = 0;
      for (var i = 0; i < list.length; ++i) {
        if (list[i].trim() != "") {
          ++count;
        }
      }
      return count;
    }

    $scope.checkIfTooMuch = function() {
      $scope.tooManyDishes = countItems($scope.listOfDishes) > 3;
    };
  };

})();
