/**
 * Created by maarten on 14/02/15.
 */
'use strict';
angular.module("exampleApp")
  .factory("Todos", function () {
    return {
      data     : [
        {action: "Get groceries", complete: false},
        {action: "Call plumber", complete: false},
        {action: "Buy running shoes", complete: true},
        {action: "Buy flowers", complete: false},
        {action: "Call family", complete: false}
      ],
      colors   : {
        red  : "Red",
        green: "Green",
        blue : "Blue"
      },
      getColors: function (colors) {
        var result = [];
        for (var col in colors) {
          if (colors.hasOwnProperty(col)) {
            result.push(colors[col]);
          }
        }
        return result;
      }
    };
  });