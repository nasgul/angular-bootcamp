(function () {
    'use strict';
    angular.module('angularBootCamp')
        .controller('groupsController', groupsController);

    function groupsController() {
        var vm = this;
        vm.name = "groups Controller";
        console.log("groups controller working");
    }
})();
