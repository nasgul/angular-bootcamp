;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/groups/index');
  require('modules/admin/groups/groups.resourse');
  require('angular-ui-router');

  var adminModuleFaculty = angular.module('adminModule.groups')
    .controller('groupsController', groupsController);

  groupsController.$inject = ['groupsResource'];

  function groupsController(groupsResource) {
    var vm = this;
    vm.title = 'Группы';
    vm.groups = [];

    groupsResource.getRecords(function(groups) {
      vm.groups = groups;
    });
  }

})();
