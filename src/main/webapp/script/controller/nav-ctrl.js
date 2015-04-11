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
    }
})();
