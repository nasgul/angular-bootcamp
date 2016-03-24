(function () {
    'use strict';
    require('shared/services/crud.service');

    angular.module('angularBootCamp')
        .service('facultiesService', facultiesService);

    facultiesService.$inject = ['crudService'];


    function facultiesService(crudService) {
        return {
            getFaculties: getFaculties,
            getFacultyById: getFacultyById
        };

        function getFaculties() {
            return crudService.getRecords('faculty');
        }

        function getFacultyById(id) {
            return crudService.getRecordById('faculty', id);
        }
    }
})();