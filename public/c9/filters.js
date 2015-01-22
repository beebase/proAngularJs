/**
 * Created by maarten on 22/01/15.
 */
'use strict';
angular.module("exampleApp.Filters", [])
  .filter('dayNrToName', function (DayNames) {
    return function (input) {
      return angular.isNumber(input) ? DayNames[input] : input;
    };
  });