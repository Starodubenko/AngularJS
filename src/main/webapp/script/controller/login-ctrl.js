//(function () {
//    'use strict';

    angular.module("App").
        controller("LoginController", LoginController);

    function LoginController($scope, $http) {
        $scope.login = '';
        $scope.password = '';

        $scope.logIn = function () {

        };
    }
//});