/**
 * Created by maarten on 22/01/15.
 */
'use strict';
angular.module('exampleApp.Services', [])
  .service("days", function (NewDate) {
    this.today = NewDate.getDay();
    this.tomorrow = this.today + 1;
  })
  .config(function () {
    console.log("1.Services module config: (start time not available yet cause main module isn't config yet)");
  })
  .run(function (startTime) {
    console.log("3.Services module run (after all modules are configured): " + startTime);
  });
