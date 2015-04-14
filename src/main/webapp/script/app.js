(function () {
    'use strict';

    angular.module("App", ['ngRoute', 'dialogDemo1', 'userServices', 'navServices', 'angular-storage', 'angular-jwt','ui.router']);

    angular.module("App")
        .config(appConfig)
        .run(appRun);

    function appConfig($urlRouterProvider, jwtInterceptorProvider, $httpProvider, $stateProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                template:''
            })
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
            .state('sign-in',{
                url:'/sing-in',
                templateUrl: 'log-in.jsp',
                controller: 'LoginController',
                controllerAs: 'logIn'
            })
            .state('services',{
                url:'/services',
                templateUrl: 'services.jsp',
                controller: 'TabController'
            })
            .state('sign-up',{
                url:'/sign-up',
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
                    $state.go('sign-in');
                }
            }
        })
    }
})();

