;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/speciality/index');
  require('modules/admin/speciality/speciality.controller');

  var adminModule = angular.module('adminModule.speciality');

  adminModule.config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('admin.speciality', {
          url: '/speciality',
          controller: 'specialitiesController',
          template: require('app/modules/admin/speciality/speciality.list.html'),
          controllerAs: 'vm'
        });
      }
    ]
  );

})();
