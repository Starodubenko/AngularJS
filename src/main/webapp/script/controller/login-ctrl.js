(function () {
    'use strict';

    angular.module("App").
        controller("LoginController", LoginController);

    function LoginController($scope, $http, store, users) {
        $scope.user = {};
        $scope.logined = false;

        $scope.singIn = function () {
            $http.post('http://localhost:18080/angular/app/users', $scope.user).
                success(function(data) {
                    $scope.logined = true;
                    store.set('jwt', data.jwt);
                }).
                error(function(data) {
                    alert("Login was fail!");
                });

        };

        $scope.logOut = function () {
            store.remove('jwt');
            $scope.logined = false;
        };
    }
})();