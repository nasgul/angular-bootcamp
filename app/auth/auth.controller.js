(function () {
    'use strict';
    require('angular');

    angular.module('authModule')
        .controller('authController', authController);

    function authController() {
        var vm = this;
        vm.name = "Auth Controller";
        console.log("auth controller working");
    }
})();


