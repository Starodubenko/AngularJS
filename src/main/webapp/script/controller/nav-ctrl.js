(function () {
    'use strict';

    angular.module("App").
        controller("NavigationController", NavController);

    function NavController($scope, $state) {
        var ctrl = this;
        ctrl.current = "";

        ctrl.selectNav = function (newCurrent) {
            ctrl.current = newCurrent;
            $state.go(ctrl.current);
        };

        ctrl.isSelected = function (check) {
            return ctrl.current === check;
        };

        ctrl.ddSelectOptions = [
            {
                text: 'Option1',
                value: 'a value'
            }
        ];

        $scope.ddSelectSelected = {}; // Must be an object
    }
})();
