
(function() {
  'use strict';
  angular.module('DIApp',[])
  .controller('DIController',DIController);

  DIController.$inject = ['$scope', '$filter'];

  function DIController($scope,$filter) {
    $scope.name = "Daniel";
    $scope.upper = function() {
      $scope.name = $filter('uppercase')($scope.name);
    };

    function AnnotateMe(name,job,bla) {
      return "Blah";
    };

    $scope.sayMessage =function () {
      return "" + Date.now();
    };
  };

})();
