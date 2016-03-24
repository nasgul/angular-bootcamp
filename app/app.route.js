(function () {
    'use strict';

    require('faculties/faculties.service');

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
                    controller: 'facultiesController as faculty',
                    templateUrl: "faculties.view.html",
                    resolve: {
                        faculties: function(facultiesService) {
                            return facultiesService.getFaculties();
                        }
                    }
                }
            },
            {
                name: 'app.specialities',
                config: {
                    url: "/specialities",
                    controllerAs: 'vm',
                    controller: 'specialitiesController as spec',
                    templateUrl: "specialities.view.html",
                    resolve: {
                        specialities: function(specialitiesService) {
                            return specialitiesService.getSpecialities();
                        }
                    }
                }
            },
            {
                name: 'app.groups',
                config: {
                    url: "/groups",
                    controllerAs: "group",
                    controller: 'groupsController',
                    templateUrl: "groups.view.html",
                    resolve: {
                        groups: function(groupsService) {
                            return groupsService.getGroups();
                        }
                    }
                }
            },
        ];
    }
})();
