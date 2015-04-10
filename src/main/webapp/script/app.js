(function () {
    'use strict';

    angular.module("App", ['ngRoute', 'dialogDemo1', 'userServices']);

    angular.module("App")
        .config(function ($routeProvider) {
            $routeProvider.
                when('/News', {
                    templateUrl: 'news.jsp'
                    //controller: 'CountryListCtrl'
                }).
                when('/About', {
                    templateUrl: 'about.jsp',
                    controller: 'ContainerController'
                }).
                when('/Log-in', {
                    templateUrl: 'log-in.jsp',
                    controller: 'LoginController'
                }).
                when('/Services', {
                    templateUrl: 'services.jsp',
                    controller: 'TabController'
                }).
                otherwise({
                    redirectTo: '/'
                })
        });

    //document.write('<script type="text/javascript" src="script/controller/container-ctrl.js"></script>');
    //document.write('<script type="text/javascript" src="script/controller/login-ctrl.js"></script>');
    //document.write('<script type="text/javascript" src="script/controller/nav-ctrl.js"></script>');
    //document.write('<script type="text/javascript" src="script/controller/tab-ctrl.js"></script>');
    //document.write('<script type="text/javascript" src="script/services/services.js"></script>');
})();

