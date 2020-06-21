var myApp = angular.module("myApp", ['ui.router']);
var numberData = localStorage.getItem("mdata");
numberJson = JSON.parse(numberData);
// localStorage.clear();
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboardmessage', {
            // url: '/dashboard/:e/:f',
            url: '/',
            templateUrl: "pages-manager/dashboard.html",
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
myApp.controller("doctorListController", function ($scope, $http) {
    $scope.getalldoctors = function(){

    }
});
myApp.controller("doctorListDisplayController", function ($scope,$http) {
    $scope.$on('$stateChangeSuccess', function () {
        console.log("working");
        $http({
                method: 'GET',
                url: 'https://17c34c9b9e4c.ngrok.io/manager/all_doctor/'
            })
            .then(function (response) {
                // $log.info(response);
                console.log(response);
                // var a = response.data;
                console.log(response.data);
                $scope.datas = response.data;
            });
    });

});
myApp.controller("patientListController", function ($scope, $http) {
    $scope.getallpatients = function () {

    }
});

myApp.controller("patientListDisplayController", function ($scope,$http) {
    $scope.$on('$stateChangeSuccess', function () {
        $http({
                method: 'GET',
                url: 'https://17c34c9b9e4c.ngrok.io/manager/all_patient/'
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                $scope.datas = response.data;
            });
    });

});

myApp.controller("pendingAppointmentController", function($scope,$http){
    $scope.pendapp = numberJson;
    console.log(numberJson);
    $scope.getpendingrequest = function () {
        document.getElementById('abb').style.visibility = "hidden";
    }
})
function getPatientId(value) {
    localStorage.setItem("PatientId", value);
}
myApp.controller("pendingAppointmentDisplayController", function ($scope,$http) {
    $scope.idData = localStorage.getItem("PatientId");
    console.log($scope.idData);

    $scope.$on('$stateChangeSuccess', function () {
        $http({
                method: 'GET',
                url: 'https://17c34c9b9e4c.ngrok.io/manager/pending_appointments/'
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                $scope.datas = response.data;
            });
    });

    $scope.approveappointment = function () {
            $http({
                    method: 'GET',
                    url: 'https://17c34c9b9e4c.ngrok.io/manager/assign_department/'
                })
                .then(function (response) {
                    var departmentData = JSON.stringify(response.data);
                    localStorage.setItem("departmentData", departmentData);
                    window.location.href = "approve-appointment.html";
                });
    }
    $scope.modifyappointment = function () {
                window.location.href = "modify-appointment.html";

        $http({
                method: 'GET',
                url: 'https://17c34c9b9e4c.ngrok.io/manager/assign_department/'
            })
            .then(function (response) {
                console.log(response.data);
                var departmentData2 = JSON.stringify(response.data);
                localStorage.setItem("departmentData2", departmentData2);
                window.location.href = "modify-appointment.html";
            });
    }
    $scope.rejectappointment = function(){
        var id = $scope.idData;
        console.log(id);
        var data = {
            patient_id: id,
            activity: "rejected"
        }
        console.log(data);
        $http.post("https://17c34c9b9e4c.ngrok.io/manager/reject_appointment/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);
                console.log(res.data);
            })
    }
});

myApp.controller("doctorApprovalController", function ($scope, $http) {
    $scope.docapp = numberJson;
    console.log(numberJson);
    $scope.getdoctorapproval = function () {
        document.getElementById('abc').style.visibility = "hidden";
    }
});
function getEmail(value){
    localStorage.setItem("emailValue", value);
}
myApp.controller("doctorApprovalDisplayController", function ($scope,$http) {


   $scope.$on('$stateChangeSuccess', function () {
       $http({
               method: 'GET',
               url: 'https://17c34c9b9e4c.ngrok.io/manager/doctor_approval/'
           })
           .then(function (response) {
               console.log(response.data);
               $scope.datas = response.data;
           });
   });
    $scope.approveregistration = function () {
        var emailValue = localStorage.getItem("emailValue");
        console.log(emailValue);

        var data = {
            email: emailValue,
            activity: "approved"
        }
        console.log(data);
        $http.post("https://17c34c9b9e4c.ngrok.io/manager/approve_registration/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);

            })
    }
    $scope.rejectregistration = function () {
        var emailValue = localStorage.getItem("emailValue");
        console.log(emailValue);
        var data = {
            email: emailValue,
            activity: "rejected"
        }
        console.log(data);
        $http.post("https://17c34c9b9e4c.ngrok.io/manager/approve_registration/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);

            })
    }
});

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

// ------
function logOut() {
    window.location = "LogInPRS.html";
}

// swal("Reason For Rejection:", {
//         content: "input",
//     })
//     .then((value) => {
//         swal({
//             title: "Msg Send!",
//             text: "Your Message Has Been Send To The Patient",
//             icon: "success",
//         });
//     });
