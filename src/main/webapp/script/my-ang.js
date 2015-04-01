var app = angular.module("mainModule", []);

app.controller("containerCtrl", function ($scope,$http) {
    $scope.name = "";
    $scope.description = "";
    $scope.photos = ["Photo_1", "Photo_2"];
    $scope.query = "";

    $http.get("cars.json").success(function(data){
        $scope.cars = data;
    });

    $scope.addPhoto = function () {
        $scope.photos.push($scope.newPhoto);
        $scope.newPhoto = "";
    };

    $scope.removePhoto = function (name) {
        var i = $scope.photos.indexOf(name);
        $scope.photos.splice(i,1);
    };
});