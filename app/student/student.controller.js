(function () {
    'use strict';
    require('angular');

    angular.module('studentModule')
        .controller('studentController', studentController);

    function studentController() {
        var vm = this;
        console.log("student controller working");
    }
})();
