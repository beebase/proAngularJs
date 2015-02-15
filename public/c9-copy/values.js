angular.module("exampleApp.Values", [])
  .value("NewDate", new Date())
  .value("DayNames", ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);