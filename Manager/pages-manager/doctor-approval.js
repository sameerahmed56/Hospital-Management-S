var myApp = angular.module("myApp", []);
myApp.controller("loginController", function ($scope, $http, $log) {

    $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        })
        .then(function (response) {
            $log.info(response);
            $scope.employees = response.data;
        });
    // console.log(data);
    // $log.info(response);
})