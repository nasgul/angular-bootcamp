(function () {
    'use strict';
    require('shared/services/crud.service');

    angular.module('angularBootCamp')
        .service('specialitiesService', specialitiesService);

    specialitiesService.$inject = ['crudService'];


    function specialitiesService(crudService) {
        return {
            getSpecialities: getSpecialities,
            getSpecialityById: getSpecialityById
        };

        function getSpecialities() {
            return crudService.getRecords('speciality');
        }

        function getSpecialityById(id) {
            return crudService.getSpecialityById('speciality', id);
        }
    }
})();