(function () {
    'use strict';
    angular.module('adminModule')
        .controller('adminController', adminController);

    function adminController() {
        var vm = this;
        vm.name = "Admin Controller";
        console.log("main controller working");
    }
})();
