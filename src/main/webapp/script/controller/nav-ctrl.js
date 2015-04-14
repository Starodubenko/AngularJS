(function () {
    'use strict';

    angular.module("App").
        controller("NavigationController", NavController);

    function NavController($scope, $state, store, jwtHelper) {
        var ctrl = this;
        ctrl.current = "";

        ctrl.selectNav = function (newCurrent) {
            ctrl.current = newCurrent;
            $state.go(ctrl.current);
        };

        ctrl.isSelected = function (check) {
            return ctrl.current === check;
        };

        ctrl.toSingUp = function(){
          $state.go("sign-up");
        };

        ctrl.toSingIn = function(){
            $state.go("sign-in");
        };

        ctrl.singOut = function(){
            store.remove('jwt');
            $state.go("home");
        };

        ctrl.isLogged = function(){
            return !store.get('jwt');
        };

        ctrl.getUserNameSurname = function(){
            var token = store.get('jwt');
            if (token){
                var decode = jwtHelper.decodeToken(token);
                return decode.name + " " + decode.surname;
            } else return "";
        }
    }
})();
