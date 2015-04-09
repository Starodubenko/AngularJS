//(function () {
//    'use strict';

    angular.module("App").
        controller("TabController", TabController);

    function TabController($scope) {
        $scope.current = 1;

        $scope.selectTab = function (newCurrent) {
            $scope.current = newCurrent;
        };

        $scope.isSelected = function (check) {
            return $scope.current === check;
        };
    }
//});