/**
 * Created by maarten on 22/01/15.
 */
'use strict';

angular.module('exampleApp.Values', [])
  .value("NewDate", new Date())
  .value("DayNames", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
