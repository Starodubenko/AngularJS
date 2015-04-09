//(function () {
//    'use strict';

    angular.module("App").
        controller("NavigationController", NavController);

    function NavController($scope) {
        $scope.current = "news";

        $scope.selectNav = function (newCurrent) {
            $scope.current = newCurrent;
        };

        $scope.isSelected = function (check) {
            return $scope.current === check;
        };
    }
//});
