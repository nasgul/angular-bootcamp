;(function() {
  'use strict';
  require('angular');

  angular.module('adminModule')
    .controller('mainCtrl', function() {
      var vm = this;
      vm.name = "Admin Controller";
    });
})();
