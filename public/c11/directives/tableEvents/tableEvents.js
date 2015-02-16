/**
 * Created by maarten on 14/02/15.
 */
'use strict'  ;
angular.module ('exampleApp')
.controller("tableEventsCtrl", tableEventsCtrl);
function tableEventsCtrl (Todos) {
  var vm = this;
  vm.todos = Todos.data;

  // set default colors for rows and columns
  vm.colorFills = {
    Rows   : Todos.colors.blue,
    Columns: Todos.colors.green
  };
  //Red, Green, Blue
  vm.buttons = Todos.getColors(Todos.colors);

  vm.handleEvent = function (e) {
    console.log("Event type: " , e.type);
    var col =      e.type === "mouseover" ? Todos.colors.green : Todos.colors.blue;
    console.log("col:",col) ;
    vm.colorFills.Columns =    col;
    console.log(vm.colorFills);
  };
}