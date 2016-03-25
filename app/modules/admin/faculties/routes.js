;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/faculties/index');
  require('modules/admin/faculties/faculty.controller');

  var adminModule = angular.module('adminModule.faculty');

  adminModule.config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('admin.faculties', {
          url: '/faculties',
          controller: 'facultiesController',
          template: require('app/modules/admin/faculties/faculties.list.html'),
          controllerAs: 'vm'
        });
      }
    ]
  );

})();
