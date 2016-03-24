(function () {
    'use strict';
    require('shared/services/crud.service');

    angular.module('angularBootCamp')
        .service('groupsService', groupsService);

    groupsService.$inject = ['crudService'];


    function groupsService(crudService) {
        return {
            getGroups: getGroups,
            getGroupById: getGroupById
        };

        function getGroups() {
            return crudService.getRecords('group');
        }

        function getGroupById(id) {
            return crudService.getGroupById('group', id);
        }
    }
})();