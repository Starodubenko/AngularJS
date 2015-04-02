//(function () {
    var app = angular.module("mainModule", ['ngRoute']);

    app.controller("containerCtrl", function ($scope, $http) {
        $scope.name = "";
        $scope.description = "";
        $scope.photos = ["Photo_1", "Photo_2"];
        $scope.query = "";

        $http.get("cars.json").success(function (data) {
            $scope.cars = data;
        });

        $scope.addPhoto = function () {
            $scope.photos.push($scope.newPhoto);
            $scope.newPhoto = "";
        };

        $scope.removePhoto = function (name) {
            var i = $scope.photos.indexOf(name);
            $scope.photos.splice(i, 1);
        };
    });

    app.config(function ($routeProvider) {
        $routeProvider.
            when('/welcome', {
                templateUrl: '../welcome.jsp'
                //controller: 'CountryListCtrl'
            }).
            when('/first-example-red', {
                redirectTo: function(){
                    return '/FirstExampleAngular.jsp'
                }
                //controller: ''
            }).
            otherwise({
                redirectTo: '/'
            })
    });
//});
