(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkItems = function () {
    var number = countDishes($scope.items);
    $scope.message = buildMessage(number);
  };

  function countDishes(items) {
    var counter = 0;
    if (items) {
      var array = items.split(',');
      for (var i in array) {
        if (array[i].trim().length != 0) {
          counter++;
        }
      }
    }
    return counter;
  }

  function buildMessage(number) {
      if (number<= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}

})();