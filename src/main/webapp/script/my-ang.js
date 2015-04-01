var app = angular.module("mainModule", []);

app.controller("containerCtrl", function ($http) {
    this.name = "";
    this.description = "";
    this.photos = ["Photo_1", "Photo_2"];

    this.cars = [{
        name: "Bugatti",
        image: "image/car_1.jpg"
    }];

    var carss;
    $http.get("cars.json").success(function(data){
       carss = data;
    });

    this.addPhoto = function () {
        this.photos.push(this.newPhoto);
        this.newPhoto = "";
    };

    this.removePhoto = function (name) {
        var i = this.photos.indexOf(name);
        this.photos.splice(i,1);
    };
});