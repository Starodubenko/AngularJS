//(function () {
//    'use strict';

    angular.module("App").
        controller("ContainerController", ContainerController);

    function ContainerController($scope, $http) {
        $scope.name = "";
        $scope.description = "";
        $scope.photos = ["Photo_1", "Photo_2"];
        $scope.query = "";

        //$http.get("cars.json").success(function (data) {
        //    $scope.cars = data;
        //});

        $scope.jsonFilter = function () {
            $scope.cars = {};
            $http.get("cars.json").success(function (data) {
                $scope.cars = data.filter(function (dataForFilter) {
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
    }
//});