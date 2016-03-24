(function () {
    'use strict';
    require('bootstrap/dist/css/bootstrap.css');
    require('main.css');

    require('angular');
    require('angular-ui-bootstrap');
    require('angular-ui-router');
    require('angular-resource');


    angular.module('angularBootCamp', [
        'ui.router',
        'ngResource'
    ]);

    require('start/start.controller');
    require('faculties/faculties.controller');
    require('specialities/specialities.controller');
    require('groups/groups.controller');

    require('app.route');

})();
