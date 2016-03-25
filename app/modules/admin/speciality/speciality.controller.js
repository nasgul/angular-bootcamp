;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/speciality/index');
  require('modules/admin/speciality/speciality.resourse');
  require('angular-ui-router');

  var adminModuleFaculty = angular.module('adminModule.speciality')
    .controller('specialitiesController', specialitiesController);

  specialitiesController.$inject = ['specialityResource'];

  function specialitiesController(specialityResource) {
    var vm = this;
    vm.title = 'Специальности';
    vm.speciality = [];
    
    specialityResource.getRecords(function(speciality) {
      vm.speciality = speciality;
    });
  }
})();
