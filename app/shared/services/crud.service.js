(function () {
    'use strict';

    angular.module('angularBootCamp')
        .service('crudService', crudService);

    require('constants');

    crudService.$inject = ['$http', 'API_PATH'];

    function crudService($http, API_PATH) {
        return {
            getRecords: getRecords,
            getRecordById: getRecordById,
            addRecord: addRecord
        };

        function getRecords(entity) {
            return $http.get(API_PATH + '/' + entity + "/getRecords");
        }

        function getRecordById(entity, id) {
            return $http.get(API_PATH + '/' + entity + "/getRecords/" + id);
        }

        function addRecord(entity, obj) {
            return $http.post(API_PATH + '/' + entity + "/getRecords/" + id);
        }
    }

})();