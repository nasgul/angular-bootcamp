(function () {
    'use strict';

    angular.module('angularBootCamp')
        .directive('abcGrid', abcGrid);

    function abcGrid() {
        return {
            restrict: 'E',
            scope: {
                settings: '=gridSettings'
            },
            link: link,
            templateUrl: 'abcgrid.view.html'
        };

        function link(scope, el, attrs) {
            //scope.gridSettings = JSON.parse(attrs.gridSettings);
            console.log(scope.settings);

        }
    }
})();
