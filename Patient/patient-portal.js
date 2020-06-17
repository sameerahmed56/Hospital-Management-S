var patientData = localStorage.getItem("pdata");
console.log(patientData);
 patientJson = JSON.parse(patientData);
// console.log(patientJson.email);
var myApp = angular.module("myApp", ['ui.router']);
// var myApp = angular.module("myApp", []);
myApp.controller("displayController", function ($scope) {
    $scope.profile = patientJson;
})

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signupmessage', {
            // url: '/dashboard/:e/:f',
            url: '/',
            templateUrl: "pages/patient-dashboard.html",
            controller: 'signupController'
        })
        .state('loginmessage', {
            url: '/pages/login/:a/:b',
            templateUrl: 'pages/login.html',
            controller: 'loginController'

        })
        .state('appointmentmessage', {
            url: '/pages/appointment/:g/:h',
            templateUrl: 'pages/fix-appointment.html',
            controller: 'thirdController'

        })

    $urlRouterProvider.otherwise('/');

});
myApp.controller("appointmentController", function ($scope, $http) {
    $scope.disease = null;
    $scope.date = null;
    $scope.Time = null;


    $scope.makeappointment = function (disease, date, time) {
        console.log("hii");
        var _someDate;
        $scope.modelObject = {
            something: function (value) {
                return arguments.length ? _someDate = $filter('date')(value, 'yyyy-MM-dd', 'UTC') : _someDate;
        }
        };
        var data = {
            disease: disease,
            date_for_app: date,
            time_for_app: time
        }
        console.log(data);
        $http.post("http://384a09a05a47.ngrok.io/patient/submit_appointment/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);
               
            })
    }
     // $scope.employees = res;
                // var resp = res;
                // localStorage.setItem("profiledata": resp);
    // $http.get("url")
    // .then(function(response){
    //     $scope.dataOut = response.data;
    // })
})
myApp.controller('signupController', function ($scope, $stateParams) {
    $scope.e = $stateParams.e,
        $scope.f = $stateParams.f
})
myApp.controller('loginController', function ($scope, $stateParams) {
    $scope.a = $stateParams.a,
        $scope.b = $stateParams.b
})
myApp.controller('thirdController', function ($scope, $stateParams) {
    $scope.g = $stateParams.g,
        $scope.h = $stateParams.h
})

