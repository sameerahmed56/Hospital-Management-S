var appIdJson = localStorage.getItem("appId");
var myApp = angular.module("myApp", []);
myApp.controller('getReportController', function ($scope, $http) {
    // $window.onload = function () {
    //     //your magic here
    //     console.log("wooo");
    // }
    $scope.$watch('$viewContentLoaded', function () {
        // do something
        console.log("ssdfdf");
        var data = {
            appntment_id: appIdJson
        }
        console.log(data);
        $http.post("https://d378b5057702.ngrok.io/doctor/get_report/", JSON.stringify(data))
            .then(function (response) {
                console.log(response.data[0]);
                $scope.appointments = response.data;
                console.log($scope.appointments);
            })

    });
})
