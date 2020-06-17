var myApp = angular.module("myApp", ['ui.router']);
var profileData = localStorage.getItem("profiledata");
// localStorage.clear();
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboardmessage', {
            // url: '/dashboard/:e/:f',
            url: '/',
            templateUrl: "pages/patient-dashboard.html",
            controller: 'thirdController'
        })
        .state('profilemessage', {
            url: '/profile/:a/:b',
            templateUrl: 'pages-manager/doctors-list.html',
            controller: 'firstController'

        })
        .state('reviewmessage', {
            url: '/review/:c/:d',
            templateUrl: 'pages-manager/patients-list.html',
            controller: 'secondController'

        })
        .state('topprojectsmessage', {
            url: '/topprojects/:g/:h',
            templateUrl: 'pages-manager/doctor-approval.html',
            controller: 'fourthController'

        })
        .state('appointmentmessage',{
            url: '/pendingappointments/:i/:j',
            templateUrl: 'pages-manager/pending-appointments.html',
            controller: 'fifthController'
        })
    // .state('root', {
    //     url: '/',
    //     template: "YOU ARE AT ROOT"
    // })

    $urlRouterProvider.otherwise('/');

});
var doctorData;
myApp.controller("doctorListController", function ($scope, $http) {
    $scope.getalldoctors = function(){
        $http({
                method: 'GET',
                url: 'http://384a09a05a47.ngrok.io/manager/all_doctor/'
            })
            .then(function (response) {
                // $log.info(response);
                console.log(response);
                // var a = response.data;

                doctorData = response.data;
                $scope.datas = response.data;
                console.log(response.data);
                

            });
    }
});
myApp.controller("doctorListDisplayController", function ($scope) {
    console.log(doctorData);
    $scope.datas = doctorData;
    $(document).ready(function () {
        $("button").click(function () {
            var fired_button = $(this).val();
            //  alert(fired_button);
            document.getElementById('outEmail').innerHTML = fired_button;
            console.log(fired_button);


        });
    });
});
// $(document).ready(function () {
//             $("button").click(function () {
//                 var fired_button = $(this).val();
//                 //  alert(fired_button);
//                 document.getElementById('outEmail').innerHTML = fired_button;
//                 console.log(fired_button);

//             });
myApp.controller('firstController', function ($scope, $stateParams) {
    $scope.a = $stateParams.a,
        $scope.b = $stateParams.b
})

myApp.controller('secondController', function ($scope, $stateParams) {
    $scope.c = $stateParams.c,
        $scope.d = $stateParams.d,
        $scope.rate = '';

})
myApp.controller('thirdController', function ($scope, $stateParams) {
    $scope.e = $stateParams.e,
        $scope.f = $stateParams.f
})
myApp.controller('fourthController', function ($scope, $stateParams) {
    $scope.g = $stateParams.g,
        $scope.h = $stateParams.h
})
myApp.controller('fifthController', function ($scope, $stateParams) {
    $scope.i = $stateParams.i,
        $scope.j = $stateParams.j
})

function openNav() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox1() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox2() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox3() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox4() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox5() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox6() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox7() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}
function openBox8() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}function openBox9() {
    document.getElementById("mySidenav").style.width = "1270px";
    // document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
}
//   ----
$(document).ready(function () {
    $(".gear-btn").click(function () {
        $(".logout-panel").fadeToggle("slow");
    });
});
// ------
function logOut() {
    window.location = "LogInPRS.html";
}