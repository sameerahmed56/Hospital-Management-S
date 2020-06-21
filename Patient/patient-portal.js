var patientData = localStorage.getItem("pdata");
 patientJson = JSON.parse(patientData);
var myApp = angular.module("myApp", ['ui.router']);
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
            templateUrl: 'pages/medical-history.html',
            controller: 'loginController'

        })
        .state('appointmentmessage', {
            url: '/pages/appointment/:g/:h',
            templateUrl: 'pages/fix-appointment.html',
            controller: 'thirdController'

        })
        .state('notificationmessage', {
            url: '/pages/notification/:c/:d',
            templateUrl: 'pages/notification.html',
            controller: 'notificationController'

        })

    $urlRouterProvider.otherwise('/');

});
myApp.controller("appointmentController", function ($scope, $http) {
    $scope.disease = null;
    $scope.date = null;
    $scope.Time = null;

    $scope.makeappointment = function () {
        console.log("hii");
        var dateValue = document.getElementById('date1').value;
        var timeValue = document.getElementById('time1').value;
        var diseaseValue = document.getElementById('disease1').value;

        var data = {
            disease: diseaseValue,
            date_for_app: dateValue,
            time_for_app: timeValue,
            email : patientJson.email
        }
        console.log(data);
        $http.post("https://17c34c9b9e4c.ngrok.io/patient/make_appointment/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);

            })
    }

})

myApp.controller('medicalHistroyController', function ($scope) {
    $scope.e = "hii",
        $scope.f = "byee"
})
myApp.controller('notificationController', function ($scope) {
    $scope.e = "hii",
        $scope.f = "byee"
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
myApp.controller('NotificationController', function ($scope, $stateParams) {
    $scope.c = $stateParams.c,
        $scope.d = $stateParams.d
})
