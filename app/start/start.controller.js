(function () {
    'use strict';
    require('angular');

    angular.module('angularBootCamp')
        .controller('startController', startController);

    function startController() {
        var vm = this;
        vm.name = "start Controller";
        console.log("start controller working");
    }
})();


