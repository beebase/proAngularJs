'use strict';
angular.module('exampleApp')
  .controller('rowsColumnsCtrl', rowsColumnsCtrl);

function rowsColumnsCtrl(Todos) {
  var vm = this;
  vm.todos = Todos.data;

  vm.colorFills = {
    Rows   : Todos.colors.green,
    Columns: Todos.colors.blue
  };
  //"Red", "Green", "Blue"
  vm.colors = Todos.getColors(Todos.colors);
}