;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/faculties/index');
  require('modules/admin/faculties/faculty.resourse');
  require('angular-ui-router');

  var adminModuleFaculty = angular.module('adminModule.faculty')
    .controller('facultiesController', facultiesController);

  facultiesController.$inject = ['facultyResource'];

  function facultiesController(facultyResource) {
    var vm = this;
    vm.title = 'Факультеты';
    vm.faculties = [];

    facultyResource.getRecords(function(faculties) {
      vm.faculties = faculties;
    });
  }

})();
