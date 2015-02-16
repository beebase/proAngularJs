/**
 * Created by maarten on 14/02/15.
 */
"use strict";
angular.module("exampleApp")
.controller("oddEvenCtrl", oddEvenCtrl);

function oddEvenCtrl(Todos) {
  var vm = this;
  vm.todos = Todos.data;
}