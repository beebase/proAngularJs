/**
 * Created by maarten on 22/12/14.
 */
'use strict';
angular.module('sportsStore')
  .controller('sportsStoreCtrl', function ($scope) {
    $scope.data = {
      products: [
        {name: "product1", description: 'a product', category: "Category", price: 10},
        {name: "product1", description: 'a product', category: "Category", price: 10}
      ]
    };
  });
