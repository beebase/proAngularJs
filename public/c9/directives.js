'use strict';
angular.module('exampleApp.Directives', [])
  .directive('highlight', function ($filter) {
    //dayNrToNameFilter represents the filter function
    var dayNrToNameFilter = $filter("dayNrToName");
    return {
      link: function (scope, elem, attrs) {
        if (dayNrToNameFilter(scope.day) === attrs['highlight']) {
          elem.css('color', 'red');
        }
      }
    };
  });
