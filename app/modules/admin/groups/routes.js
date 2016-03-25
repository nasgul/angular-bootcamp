;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/groups/index');
  require('modules/admin/groups/groups.controller');

  var adminModule = angular.module('adminModule.groups');

  adminModule.config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('admin.groups', {
          url: '/groups',
          controller: 'groupsController',
          template: require('app/modules/admin/groups/groups.list.html'),
          controllerAs: 'vm'
        });
      }
    ]
  );

})();
