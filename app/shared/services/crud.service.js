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
            addRecord: addRecord,
            deleteRecord: deleteRecord
        };

        function getRecords(entity) {
            return $http.get(API_PATH + '/' + entity + "/getRecords");
        }

        function getRecordById(entity, id) {
            return $http.get(API_PATH + '/' + entity + "/getRecords/" + id);
        }

        function addRecord(entity, obj) {
            return $http.post({
                url: API_PATH + '/' + entity + "/insertData",
                data: obj
            });
        }

        function deleteRecord(entity, id) {
            return $http.get(API_PATH + '/' + entity + "/del/" + id);
        }
    }

})();