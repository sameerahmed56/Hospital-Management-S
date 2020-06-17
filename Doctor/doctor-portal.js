var doctorData = localStorage.getItem("docdata");
console.log(doctorData);
 doctorJson = JSON.parse(doctorData);
console.log(doctorJson.email);

// --
var myApp = angular.module("myApp", ['ui.router']);
myApp.controller('docDisplayController', function($scope){
    $scope.docprofile = doctorJson
})
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signupmessage', {
            // url: '/dashboard/:e/:f',
            url: '/',
            templateUrl: "pages-doc/doctor-dashboard.html",
            controller: 'signupController'
        })
        .state('loginmessage', {
            url: '/pages/login/:a/:b',
            templateUrl: 'pages-manager/patients-list.html',
            controller: 'loginController'

        })

    $urlRouterProvider.otherwise('/');

});
myApp.controller('signupController', function ($scope, $stateParams) {
    $scope.e = $stateParams.e,
        $scope.f = $stateParams.f
})
myApp.controller('loginController', function ($scope, $stateParams) {
    $scope.a = $stateParams.a,
        $scope.b = $stateParams.b
})