(function () {
    'use strict';

    angular.module("App", ['ngRoute', 'dialogDemo1', 'userServices', 'angular-storage', 'angular-jwt','ui.router']);

    angular.module("App")
        .config(appCconfig)
        .run(appRun);

    function appCconfig($urlRouterProvider, jwtInterceptorProvider, $httpProvider, $stateProvider) {
        $stateProvider
            .state('news',{
                url:'/News',
                templateUrl:'news.jsp',
                controller: 'ContainerController',
                data:{
                    requiresLogin:true
                }
            })
            .state('about',{
                url:'/About',
                templateUrl: 'about.jsp',
                controller: 'ContainerController'
            })
            .state('log-in',{
                url:'/Log-in',
                templateUrl: 'log-in.jsp',
                controller: 'LoginController'
            })
            .state('services',{
                url:'/Services',
                templateUrl: 'services.jsp',
                controller: 'TabController'
            })
            .state('do-login',{
                url:'/Services',
                templateUrl: 'services.jsp',
                controller: 'TabController'
            });
        //$urlRouterProvider.otherwise('/');

        jwtInterceptorProvider.tokenGetter = function (store) {
            return store.get('jwt');
        };

        $httpProvider.interceptors.push('jwtInterceptor');
    }
//todo create DTOObjects, do not add the header of authorization in simple request.
    function appRun($state,store,$rootScope){
        alert("werwer");
        $rootScope.$on('$stateChangeStart',function(e,to){
            if(to.data && to.data.requiresLogin){
                if(!store.get('jwt')){
                    e.preventDefault();
                    $state.go('log-in');
                }
            }
        })
    }
})();

