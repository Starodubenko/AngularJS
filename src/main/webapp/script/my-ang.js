//(function () {
var app = angular.module("mainModule", ['ngRoute']);

app.controller("containerCtrl", function ($scope, $http) {
    $scope.name = "";
    $scope.description = "";
    $scope.photos = ["Photo_1", "Photo_2"];
    $scope.query = "";

    //$http.get("cars.json").success(function (data) {
    //    $scope.cars = data;
    //});

    $scope.jsonFilter = function(){
        $scope.cars = {};
        $http.get("cars.json").success(function (data) {
            $scope.cars = data.filter(function(dataForFilter){
                if (name) return true;
                else
                return dataForFilter.name === $scope.name;
            });
        });
    };

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
        when('/News', {
            templateUrl: 'news.jsp'
            //controller: 'CountryListCtrl'
        }).
        when('/About', {
            templateUrl: 'about.jsp',
            controller: 'containerCtrl'
        }).
        when('/Services', {
            templateUrl: 'services.jsp',
            controller: 'TabController'
        }).
        otherwise({
            redirectTo: '/'
        })
});

app.controller("TabController", function ($scope) {
    $scope.current = 1;

    $scope.selectTab = function (newCurrent) {
        $scope.current = newCurrent;
    };

    $scope.isSelected = function (check) {
        return $scope.current === check;
    };
});

app.controller("NavController", function ($scope) {
    $scope.current = "news";

    $scope.selectNav = function (newCurrent) {
        $scope.current = newCurrent;
    };

    $scope.isSelected = function (check) {
        return $scope.current === check;
    };
});
//});
