'use strict';
angular.module('exampleApp.Controllers', [])
  .controller('dayCtrl', dayCtrl)
  .controller('tomorrowCtrl', tomorrowCtrl);

function dayCtrl($scope, days) {
  $scope.day = days.today;
}
function tomorrowCtrl($scope, days) {
  $scope.day = days.tomorrow;
}


