(function () {
    'use strict';

    angular
        .module('angularBootCamp')
        .config(configStates);

    configStates.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configStates(stateProvider, urlRouterProvider) {
        urlRouterProvider
            .when('/', '/start')
            .when('', '/start');

        var states = getStates();
        states.forEach(function (state) {
            stateProvider.state(state.name, state.config);
        });
    }

    function getStates() {
        return [
            {
                name: 'app',
                config: {
                    abstract: true,
                    url: "",
                    templateUrl: "app.view.html",
                }
            },
            {
                name: 'app.start',
                config: {
                    url: "/start",
                    controller: 'startController',
                    templateUrl: "start.view.html"
                }
            },
            {
                name: 'app.faculties',
                config: {
                    url: "/faculties",
                    controller: 'facultiesController',
                    templateUrl: "faculties.view.html"
                }
            },
            {
                name: 'app.specialities',
                config: {
                    url: "/specialities",
                    controller: 'specialitiesController',
                    templateUrl: "specialities.view.html"
                }
            },
            {
                name: 'app.groups',
                config: {
                    url: "/groups",
                    controller: 'groupsController',
                    templateUrl: "groups.view.html"
                }
            },
        ];
    }
})();
