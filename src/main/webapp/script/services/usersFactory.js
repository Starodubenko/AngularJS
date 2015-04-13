angular.module('userServices', ['ngResource']).
    factory('users', function ($resource) {
        return $resource('app/users/:userId', {}, {
            registration: {method: 'POST', params: {userId:'reg'}},
            login: {method: 'POST', params: {userId:'log-in'}}
        });
    });