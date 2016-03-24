(function () {
    'use strict';

    require('faculties/faculties.service');

    angular.module('angularBootCamp')
        .controller('facultiesController', facultiesController);

    facultiesController.$inject = ['facultiesService', 'faculties'];

    function facultiesController(facultiesService, faculties) {
        var vm = this;
        vm.faculties = faculties.data || [];
        vm.gridSettings = {
            tableHeader: "List of Faculties",
            tableSettings: [
                {
                    'name': "ID",
                    'field': "faculty_id"
                },
                {
                    'name': "Faculty Name",
                    'field': "faculty_name"
                },
                {
                    'name': "Faculty Description",
                    'field': "faculty_description"
                }
            ],
            tableData: vm.faculties
        }
    }
})();
