;(function() {
    'use strict'
    require('angular');
    require('modules/admin/speciality/index');
    require('angular-resource');
    var config = require('config/index');

    var app = angular.module('adminModule.subjects');
    app.factory('subjectResource', SubjectResource);

    SubjectResource.$inject = ['$resource'];

  function SubjectResource($resource) {
    var url = "http://ec2-54-69-82-91.us-west-2.compute.amazonaws.com/" + '/subject';
    return $resource(url + '/:id', null, {
      get: {
        method: 'GET',
        url: url + '/getRecords/:id',
        isArray: true
      },
      query: {
        method: 'GET',
        url: url + '/getRecords',
        isArray: true
      },
      getRecords: {
        method: 'GET',
        url: url + '/getRecords',
        isArray: true
      },
      save: {
        method: 'POST',
        url: url + '/insertData'
      },
      insertData: {
        method: 'POST',
        url: url + '/insertData'
      },
      remove: {
        method: 'DELETE',
        url: url + '/del/:id'
      },
      delete: {
        method: 'DELETE',
        url: url + '/del/:id'
      },
      update: {
        method: 'POST',
        url: url + '/update/:id'
      },
      getRecordsRange: {
        method: 'GET',
        url: url + '/getRecordsRange/:limit/:offset',
        isArray: true
      },
      countRecords: {
        method: 'GET',
        url: url + '/countRecords'
      }
    });
  }
})();
