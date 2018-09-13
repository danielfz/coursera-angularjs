(function () {
  'use strict';

  angular.module('myFirstApp', [])
    .controller('MyFirstController',function ($scope) {
      $scope.teste = "Daniel";
      $scope.sayHello = function() {
        return "Hello";
      };

  });
})();
