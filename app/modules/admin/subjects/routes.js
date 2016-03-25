;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/subjects/index');
  require('modules/admin/subjects/subjects.controller');

  var adminModule = angular.module('adminModule.subjects');

  adminModule.config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('admin.subjects', {
          url: '/subjects',
          controller: 'subjectsController',
          template: require('app/modules/admin/subjects/subjects.list.html'),
          controllerAs: 'vm'
        });
      }
    ]
  );

})();
