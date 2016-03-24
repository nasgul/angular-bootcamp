(function () {
    'use strict';
    angular.module('angularBootCamp')
        .controller('specialitiesController', specialitiesController);

    function specialitiesController() {
        var vm = this;
        console.log("specialitiesController working");
    }
})();
