angular.module('userServices', ['ngResource']).
    factory('users', function ($resource) {
        return $resource('app/users:userId', {});
    });