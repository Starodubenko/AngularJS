(function () {
    'use strict';

    angular.module("App").
        controller("LoginController", LoginController);

    function LoginController($scope, $http, users) {
        $scope.user = {};
        $scope.logined = false;

        $scope.singIn = function () {
            $http.post('http://localhost:8080/angular/app/users', $scope.user).
                success(function(user) {
                    $scope.logined = true;
                    alert("Login was successful!"+user.name +" "+ user.surname + " logined !");
                }).
                error(function(data) {
                    alert("Login was fail!");
                });

        };

        $scope.logOut = function () {
            $scope.logined = false;
        };
    }
})();