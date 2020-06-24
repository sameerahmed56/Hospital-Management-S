
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

var myApp = angular.module("myApp", ['ui.router']);
myApp.controller("registrationController", function ($scope, $http) {

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
        var a = onSubmit();
        console.log(data);
    if(a == true){
         $http.post("https://d378b5057702.ngrok.io/patient/register/", JSON.stringify(data))
             .then(function (res) {
                 console.log(res);
                 console.log(res.data);

                 if(res.data == "sucess"){
                     document.getElementById('out_data').innerHTML = "You Have Successfully Registerd! Please Login To Continue"
                 }
             })
    }
    else{
        console.log("not send");
    }

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
        var a = validateFields();
        console.log(data);
        if(a == true){
            $http.post("https://d378b5057702.ngrok.io/patient/login/", JSON.stringify(data))
                .then(function (res) {
                    console.log(res);
                    console.log(res.data);
                    if(res.data == "not registered"){
                        document.getElementById('out_data').innerHTML = "You Have Not Registered Yet. Please SignUp To Continue"
                    }
                    else if (res.data == "wrong password") {
                        document.getElementById('out_data').innerHTML = "Invalid Password"
                    }
                    else{
                    var pdata = JSON.stringify(res.data[0]);
                    console.log(pdata);
                    localStorage.setItem("pdata", pdata);
                    window.location.href = "patient-portal.html";
                    }
                })
        }
        else{
            console.log("Not Send");
        }
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
