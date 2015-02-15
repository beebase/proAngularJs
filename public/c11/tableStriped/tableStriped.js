/**
 * Created by maarten on 14/02/15.
 */
angular.module("exampleApp")
.controller("tableStripedCtrl", function ( Todos) {
    var vm = this;
    vm.todos = Todos.data;
  });


