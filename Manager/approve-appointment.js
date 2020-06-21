var departmentValue = localStorage.getItem("departmentData");
var patientJson = localStorage.getItem("PatientId");
console.log(patientJson);
var departmentJson = JSON.parse(departmentValue);
var myApp = angular.module("myApp", []);
myApp.controller("approveAppointmentController", function ($scope, $http) {
   $scope.departments = departmentJson;
   $scope.getdoctors = function (department) {
   // var departmentValue = document.getElementById('department').value;
       var data = {
           department: department
       }
       console.log(data);
       $http.post("https://17c34c9b9e4c.ngrok.io/manager/assign_doctor/", JSON.stringify(data))
           .then(function (res) {
               console.log(res);
               console.log(res.data);
               $scope.datas = res.data;
           })
   }
   $scope.approveappointment =function(){
       var doctorName = document.getElementById('doctor').value;
       var arr = doctorName.split(",");
       var id = arr[0];
       console.log(id);
       var data = {
           patient_id: patientJson,
           doct_key_id: id,
           activity: "approved"
       }
       console.log(data);
       $http.post("https://17c34c9b9e4c.ngrok.io/manager/approve_appointment/", JSON.stringify(data))
           .then(function (res) {
               console.log(res);
               console.log(res.data);
               if(res.data = "approved"){
                   window.location.href = "manager-portal.html";
               }
               else{
                   alert("Not Submitted Some Issue")
               }
           })
   }
});
