(function () {
    'use strict';

    require('groups/groups.service');

    angular.module('angularBootCamp')
        .controller('groupsController', groupsController);

    groupsController.$inject = ['groupsService', 'groups'];

    function groupsController(groupsService, groups) {
        var vm = this;
        vm.groups = groups.data || [];
        vm.gridSettings = {
            tableHeader: "List of Groups",
            tableSettings: [
                {
                    'name': "ID",
                    'field': "group_id"
                },
                {
                    'name': "Group Name",
                    'field': "group_name"
                },
                {
                    'name': "Group Faculty",
                    'field': "faculty_id"
                },
                {
                    'name': "Group Speciality",
                    'field': "speciality_id"
                }
            ],
            tableData: vm.groups
        }
    }
})();
