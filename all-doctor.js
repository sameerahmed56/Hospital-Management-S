var myApp = angular.module("myApp", []);
myApp.controller('allDoctorController', function ($scope, $http) {
    $scope.$watch('$viewContentLoaded', function () {
            $http({
                method: 'GET',
                url: 'https://d378b5057702.ngrok.io/manager/all_doctor/'
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                $scope.datas = response.data;
            });
    });

})
