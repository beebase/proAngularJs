/**
 * Created by maarten on 22/01/15.
 */
'use strict';
var controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule.controller("dayCtrl", dayCtrl);
controllersModule.controller("tomorrowCtrl", tomorrowCtrl);

function dayCtrl($scope, days) {
  $scope.day = days.today;
}

function tomorrowCtrl($scope, days) {
  $scope.day = days.tomorrow;
}