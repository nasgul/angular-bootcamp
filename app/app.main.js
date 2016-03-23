(function () {
    'use strict';
    require('bootstrap/dist/css/bootstrap.css');
    require('main.css');

    require('angular');
    require('angular-ui-bootstrap');
    require('angular-ui-router');

    require('auth/auth.module');
    require('admin/admin.module');
    require('student/student.module');

    angular.module('angularBootCamp', [
        'ui.router',
        'authModule',
        'adminModule',
        'studentModule'
    ]);

    require('app.route');

})();
