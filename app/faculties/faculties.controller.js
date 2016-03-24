(function () {
    'use strict';

    require('faculties/faculties.service');

    angular.module('angularBootCamp')
        .controller('facultiesController', facultiesController);

    facultiesController.$inject = ['facultiesService'];

    function facultiesController(facultiesService) {
        console.log("faculties controller working");
        var a = facultiesService.getFacultiesById(5);
            a.then(function (res) {
                console.log(res);
            });
    }
})();
