(function () {
    'use strict';

    require('specialities/specialities.service');

    angular.module('angularBootCamp')
        .controller('specialitiesController', specialitiesController);

    specialitiesController.$inject = ['specialitiesService', 'specialities'];

    function specialitiesController(specialitiesService, specialities) {
        var vm = this;
        vm.specialities = specialities.data || [];
        vm.gridSettings = {
            tableHeader: "List of Specialities",
            tableSettings: [
                {
                    'name': "ID",
                    'field': "speciality_id"
                },
                {
                    'name': "Speciality Code",
                    'field': "speciality_code"
                },
                {
                    'name': "Speciality Name",
                    'field': "speciality_name"
                }
            ],
            tableData: vm.specialities
        }
    }
})();
