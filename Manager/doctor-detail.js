var docIdJson = localStorage.getItem("manDoctorId");
var myApp = angular.module("myApp", []);
myApp.controller('doctorDetailController', function ($scope, $http) {
    $scope.$watch('$viewContentLoaded', function () {
        var data = {
            id: docIdJson
        }
        console.log(data);
        $http.post("https://d378b5057702.ngrok.io/manager/see_details_doctor/", JSON.stringify(data))
            .then(function (response) {
                console.log(response.data);
                $scope.docprofile = response.data[0];
                // console.log($scope.profile);
            })
            var data1 = {
                id: docIdJson
            }
            console.log(data1);
            $http.post("https://d378b5057702.ngrok.io/doctor/patient_list/", JSON.stringify(data1))
                .then(function (response) {
                    console.log(response.data);
                    $scope.datas = response.data;
                })
    });

})
