;(function() {
  'use strict'
  require('angular');
  require('angular-resource');
  require('modules/admin/subjects/index');
  require('modules/admin/subjects/subjects.resourse');
  require('angular-ui-router');

  var adminModuleSubjects= angular.module('adminModule.subjects')
    .controller('subjectsController', subjectsController);

  subjectsController.$inject = ['subjectResource'];

  function subjectsController(subjectResource) {
    var vm = this;
    vm.title = 'Предметы';
    vm.subjects = [];

    subjectResource.getRecords(function(subjects) {
      vm.subjects = subjects;
    });
  }
})();
