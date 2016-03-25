;(function() {
  'use strict'

  require('bootstrap-webpack');
  require('angular');
  require('angular-ui-router');
  require('angular-animate');
  require('modules/admin');
  require('modules/common/menu/menu.component');
  var config = require('config');

  var angularBootCamp = angular.module('angularBootCamp', [
    'adminModule',
    'menuModule',
    'ui.router',
    'ngAnimate'
  ]);

  angularBootCamp.constant("baseUrl", config.base_url);
  angularBootCamp.run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          $stateProvider

            .state("home", {
              url: "/",
              template: require('app/modules/main/main.html')
            })
            .state('about', {
              url: '/about',
              template: require('app/modules/admin/admin/about.html')
            }
          );
      }
    ]
  );
})();
