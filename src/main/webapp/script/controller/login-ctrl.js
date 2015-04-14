(function () {
    'use strict';

    angular.module("App").
        controller("LoginController", LoginController);

    function LoginController(store, users, $state, navFactory) {
        var ctrl = this;

        ctrl.user = {};

        (function(){
            if (store.get('jwt')) $state.go("home");
        })();

        ctrl.singIn = function () {
            users.login(ctrl.user, function(data) {
                    store.set('jwt', data.jwt);
                    ctrl.user = {};
                    if (navFactory.previousState){
                        $state.go(navFactory.previousState);
                        //navFactory.previousState = "";
                    }
                }, function(data) {
                    alert("Login was fail!");
                });

        };
    }
})();