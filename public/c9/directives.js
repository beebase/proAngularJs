/**
 * Created by maarten on 22/01/15.
 */
'use strict';
angular.module('exampleApp.Directives', [])
  .directive('highlight', function ($filter) {
    //dayNrToNameFilter represents the filter function
    var dayNrToNameFilter = $filter("dayNrToName");
    return {
      link: function (scope, element, attrs) {
        if (dayNrToNameFilter(scope.day) === attrs['highlight']) {
          element.css("color", "red");
        }
      }
    };
  });