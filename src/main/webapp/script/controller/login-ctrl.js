(function () {
    'use strict';

    angular.module("App").
        controller("LoginController", LoginController);

    function LoginController(store, users, $state, navFactory) {
        var ctrl = this;

        ctrl.user = {};

        ctrl.singIn = function () {
            users.login(ctrl.user, function(data) {
                    store.set('jwt', data.jwt);
                    ctrl.user = {};
                    if (navFactory.previousState){
                        $state.go(navFactory.previousState);
                        navFactory.previousState = "";
                    }
                }, function(data) {
                    alert("Login was fail!");
                });

        };

        ctrl.isLoggedIn = function(){
            return !store.get('jwt');
        };

        ctrl.logOut = function () {
            store.remove('jwt');
        };

        ctrl.goToRegistration = function () {
            $state.go("reg");
        }
    }
})();