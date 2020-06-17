
var dt = [{
        age: "1",
        blood_group: "O-",
        email: "1@gmail.com",
        first_name: "Sameer",
        gender: "Male",
        height: "1",
        last_name: "Ahmed",
        mobile_number: "9696805422",
        password: "123456",
        weight: "1"
    },
    {
        age: "1",
        blood_group: "O-",
        email: "2@gmail.com",
        first_name: "second",
        gender: "Male",
        height: "1",
        last_name: "Ahmed",
        mobile_number: "9696805422",
        password: "123456",
        weight: "1"
    },
    {
        age: "1",
        blood_group: "O-",
        email: "3@gmail.com",
        first_name: "third",
        gender: "Male",
        height: "1",
        last_name: "Ahmed",
        mobile_number: "9696805422",
        password: "123456",
        weight: "1"
    }
]
var sas = JSON.stringify(dt[0]);
localStorage.setItem("sas", sas);

// var app = angular.module("myApp", []);
var myApp = angular.module("myApp", ['ui.router']);
myApp.controller("registrationController", function ($scope, $http) {
    // var firstName = document.getElementById("first_name").value
    // var lastName = document.getElementById("last_name").value;
    // var mobileNumber = document.getElementById("mobile_number").value;
    // var a = firstName.substr(0, 2);
    // console.log(a);
    // var b = lastName.substr(0, 2);
    // var c = mobileNumber.substr(6, 4);
    // var medicalId = a + b + c;
    // $scope.medicalid = medicalId;
    $scope.firstname = null;
    $scope.lastname = null;
    $scope.mobilenumber = null;
    $scope.email = null;
    $scope.gender = "Gender";
    $scope.password = null;
    $scope.age = "Your Age";
    $scope.bloodgroup = "Blood Group";
    $scope.height = "Your Height";
    $scope.weight = "Your Weight";

    $scope.postdata = function (firstname, lastname, mobilenumber, email, gender, password, age, bloodgroup, height, weight) {
        
        var data = {
            first_name: firstname,
            last_name: lastname,
            mobile_number: mobilenumber,
            email: email,
            gender: gender,
            password: password,
            age: age,
            blood_group: bloodgroup,
            height: height,
            weight: weight
        }
        console.log(data);
        $http.post("http://384a09a05a47.ngrok.io/patient/register/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);
            }).catch
    }
});
myApp.controller("logController", function ($scope, $http) {
    $scope.email = null;
    $scope.password = null;

    $scope.postpatientdata = function (email, password) {
    console.log("hii");
        var data = {
            email: email,
            password: password
        }
        console.log(data);
        $http.post("http://384a09a05a47.ngrok.io/patient/login/", JSON.stringify(data))
            .then(function (res) {
                console.log(res);
                console.log(res.data);
                console.log(res.data[0]);
                var pdata = JSON.stringify(res.data[0]);
                console.log(pdata);
                localStorage.setItem("pdata", pdata);                
               window.location.href = "patient-portal.html";

            })
    }
    // $http.get("url")
    // .then(function(response){
    //     $scope.dataOut = response.data;
    // })
})

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('signupmessage', {
            // url: '/dashboard/:e/:f',
            url:'/',
            templateUrl: "pages/signup.html",
            controller: 'signupController'
        })
        .state('loginmessage', {
            url: '/pages/login/:a/:b',
            templateUrl: 'pages/login.html',
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
// -----
// ---- SIGN UP PAGE
