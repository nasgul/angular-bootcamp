(function () {
    'use strict';
    require('bootstrap/dist/css/bootstrap.css');
    require('main.css');

    require('angular');
    require('angular-ui-bootstrap');
    require('angular-ui-router');

    angular.module('angularBootCamp', [
        'ui.router'
    ]);

    require('app.route');

})();
