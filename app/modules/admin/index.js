;(function() {
    'use strict'
    require('angular');
    require('angular-resource');
    require('modules/admin/faculties/routes');
    require('modules/admin/speciality/routes');
    require('modules/admin/groups/routes');
    require('modules/admin/subjects/routes');

    var adminModule = angular.module(
      'adminModule',
      [
        'ui.router',
        'ngResource',
        'adminModule.faculty',
        'adminModule.speciality',
        'adminModule.groups',
        'adminModule.subjects'
      ]);

    adminModule.config(
      ['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider
            .otherwise('admin.list');

          var menuList = [{
            name: 'Faculties',
            url: 'admin.faculties'
          }, {
            name: 'Specialities',
            url: 'admin.speciality'
          }, {
            name: 'Groups',
            url: 'admin.groups'
          }, {
            name: 'Subjects',
            url: 'admin.subjects'
          }];

          $stateProvider
            .state('admin', {
              abstract: true,
              url: '/admin',
              template: require('app/modules/admin/admin/admin.html'),
              controller: ['$scope', '$state',
                function($scope, $state) {
                  $scope.menus = menuList;
                }
              ]
            })

          .state('admin.list', {
              url: '',
              template: require('app/modules/admin/admin/contacts.list.html'),
              controller: ['$scope', '$state',
                function($scope, $state) {
                  $scope.menus = menuList;
                }
              ]
            });
          }
        ]
      );



    })();
