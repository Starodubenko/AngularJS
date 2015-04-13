(function () {
    'use strict';

    angular.module("App", ['ngRoute', 'dialogDemo1', 'userServices', 'navServices', 'angular-storage', 'angular-jwt','ui.router']);

    angular.module("App")
        .config(appConfig)
        .run(appRun);

    function appConfig($urlRouterProvider, jwtInterceptorProvider, $httpProvider, $stateProvider) {
        $stateProvider
            .state('news',{
                url:'/news',
                templateUrl:'news.jsp',
                controller: 'ContainerController',
                data:{
                    requiresLogin:true
                }
            })
            .state('about',{
                url:'about',
                templateUrl: 'about.jsp',
                controller: 'ContainerController'
            })
            .state('log-in',{
                url:'/log-in',
                templateUrl: 'log-in.jsp',
                controller: 'LoginController'
            })
            .state('services',{
                url:'/services',
                templateUrl: 'services.jsp',
                controller: 'TabController'
            })
            .state('reg',{
                url:'/registration',
                templateUrl: 'registration.html',
                controller: 'RegController',
                controllerAs: 'reg'
            });
        //$urlRouterProvider.otherwise('/');

        jwtInterceptorProvider.tokenGetter = function (store) {
            return store.get('jwt');
        };

        $httpProvider.interceptors.push('jwtInterceptor');
    }
//todo create DTOObjects, do not add the header of authorization in simple request.
    function appRun($state,store,$rootScope, navFactory){
        $rootScope.$on('$stateChangeStart',function(e,to){
            if(to.data && to.data.requiresLogin){
                if(!store.get('jwt')){
                    e.preventDefault();
                    navFactory.previousState = to.name;
                    $state.go('log-in');
                }
            }
        })
    }
})();

