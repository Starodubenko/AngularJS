//(function () {
//    'use strict';

    angular.module("App", ['ngRoute', 'dialogDemo1']);

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
                    templateUrl: 'about.jsp',
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
//});

