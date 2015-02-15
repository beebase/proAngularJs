/**
 * Created by maarten on 14/02/15.
 */
'use strict';
angular.module("exampleApp")
  .controller("rowsColumnsCtrl", rowsColumnsCtrl);

function rowsColumnsCtrl(Todos) {
  var vm = this;
  vm.todos = Todos.data;

  // set default colors for rows and columns
  vm.colorFills = {
    Rows   : Todos.colors.red,
    Columns: Todos.colors.green
  };
  //Red, Green, Blue
  vm.radioBoxes = Todos.getColors(Todos.colors);

}