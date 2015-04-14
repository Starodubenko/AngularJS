(function () {
    'use strict';

    angular.module("App").
        controller("RegController", RegistrationController);

    function RegistrationController(store, users, $state, navFactory) {
        var ctrl = this;

        ctrl.user = {};

        (function(){
            if (store.get('jwt')) $state.go("home");
        })();

        ctrl.singUp = function () {
            users.registration(ctrl.user, function(data) {
                    alert("Registration was successful!!!");
                }, function(data) {
                    alert("Login was fail!");
                });

        };
    }
})();