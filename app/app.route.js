(function () {
    'use strict';
    //require('angular-ui-router');
    require('constants');

    angular
        .module('angularBootCamp')
        .config(configStates)
        .run(mainRun);

    configStates.$inject = ['$stateProvider'];
    mainRun.$inject = ['$state'];

    function mainRun(state) {
        //go to default state
        state.go('start');
    }

    function configStates(stateProvider) {
        var states = getStates();
        states.forEach(function (state) {
            stateProvider.state(state.name, state.config);
        });
    }

    function getStates() {
        return [
            {
                name: 'start',
                config: {
                    url: "/start",
                    controller: 'authController',
                    templateUrl: "start.view.html"
                }
            },
            {
                name: 'admin',
                config: {
                    url: "/admin",
                    controller: 'adminController',
                    templateUrl: "admin.view.html"
                }
            },
            {
                name: 'student',
                config: {
                    url: "/student",
                    controller: 'studentController',
                    templateUrl: "student.view.html"
                }
            }
        ];
    }
})();
