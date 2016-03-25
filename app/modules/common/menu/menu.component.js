/**
* Just Menu
* @todo Refactor this.
*/
;(function() {
  'use strict'

  require('angular');

  function MenuController() {
  }

  var menuComponent = angular.module('menuModule', ['ui.router']);

  menuComponent.component('menuComponent', {
      template: require('app/modules/common/menu/menu.html'),
      controller: MenuController,
  });
})();
