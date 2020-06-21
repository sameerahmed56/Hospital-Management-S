
// -----
function validateName(a, b) {
    var name = document.getElementById(a).value;
    // const namValue = name.trim();
    var alphabet = /^[A-Za-z]+$/;
    if (name.match(alphabet)) {
        document.getElementById(b).innerHTML = "";
        return true;
    } else {
        document.getElementById(b).innerHTML = "Enter Valid Name";
    }
}

function validateNumber(a, b) {
    var mobileNumber = document.getElementById(a).value;
    const mobileNumberValue = mobileNumber.trim();
    if (mobileNumberValue == "") {
        document.getElementById(b).innerHTML = "Enter Your Mobile Number";
    } else if (mobileNumberValue.length != 10) {
        document.getElementById(b).innerHTML = "Must be of 10 digits";
    } else if ((mobileNumberValue.charAt(0) != 9) && (mobileNumberValue.charAt(0) != 8) && (mobileNumberValue.charAt(0) != 7) && (mobileNumberValue.charAt(0) != 6)) {
        document.getElementById(b).innerHTML = "Mobile No.start with 6,7,8,9";

    } else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
}

function validateEmail(a, b) {
    var email = document.getElementById(a).value;
    var emailValue = email.trim();
    var arr = emailValue.split("@");
    var alphabet = /^[A-Za-z0-9@|.]+$/;

    if (emailValue.match(alphabet)) {
        if (emailValue == "") {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else if ((emailValue.indexOf('@') == 0) || (emailValue.indexOf('.') == 0)) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else if ((emailValue.charAt(0) == 9) || (emailValue.charAt(0) == 8) || (emailValue.charAt(0) == 7) || (emailValue.charAt(0) == 6) || (emailValue.charAt(0) == 5) || (emailValue.charAt(0) == 4) || (emailValue.charAt(0) == 3) || (emailValue.charAt(0) == 2) || (emailValue.charAt(0) == 1) || (emailValue.charAt(0) == 0)) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else if (arr.length > 2) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else if (emailValue.lastIndexOf('.') - emailValue.indexOf('@') < 5) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else if (emailValue.lastIndexOf('.') >= (emailValue.length - 2)) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else if ((emailValue.indexOf('@') == -1) || (emailValue.indexOf('.') == -1)) {
            document.getElementById(b).innerHTML = "Enter Valid Email";
        } else {
            document.getElementById(b).innerHTML = "";
            return true;
        }
    } else {
        document.getElementById(b).innerHTML = "Enter Valid Email";
    }
}

function validatePassword(a, b) {
    var password = document.getElementById(a).value;

    if (password == "") {
        document.getElementById(b).innerHTML = "Enter Your Password";
    } else if (password.length < 6) {
        document.getElementById(b).innerHTML = "Password must be of 6 digits";
    } else {
        document.getElementById(b).innerHTML = "";
        return true;
    }

}

function validateCnfPassword(a, b) {
    var password = document.getElementById('password').value;
    var cnfPassword = document.getElementById(a).value;
    if (cnfPassword == "") {
        document.getElementById(b).innerHTML = "Re-Enter Your Password";
    } else if (password != cnfPassword) {
        document.getElementById('cnfpassworderror').innerHTML = "Passwords do not match";
    } else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
}

function validateAge(a, b) {
    var age = document.getElementById(a).value;
    if (age == "Your Age") {
        document.getElementById(b).innerHTML = "Enter Your Age";
    } else {
        document.getElementById(b).innerHTML = "";
        return true;
    }
}

function validateBloodGroup(a, b) {
    var bloodgroup = document.getElementById(a).value;
    if (bloodgroup == "Blood Group") {
        document.getElementById(b).innerHTML = "Enter Blood Group";
    } else {
        document.getElementById(b).innerHTML = "";
        return true;

    }
}

function validateHeight(a, b) {
    var height = document.getElementById(a).value;
    if (height == "Your Height") {
        document.getElementById(b).innerHTML = "Enter Your Height";
    } else {
        document.getElementById(b).innerHTML = "";
        return true;

    }
}

function validateWeight() {
    var weight = document.getElementById("weight").value;
    if (weight == "Your Weight") {
        document.getElementById("weighterror").innerHTML = "Enter Your Weight";
    } else {
        document.getElementById("weighterror").innerHTML = "";
        return true;
    }
}

function validateGender(a, b) {
    var gender = document.getElementById(a).value;
    if (gender == "Gender") {
        document.getElementById(b).innerHTML = "Enter Your Gender";
        console.log(gender);
    } else {
        document.getElementById(b).innerHTML = "";
        console.log(gender);
        return true;
    }
}

// function sendRegistrationData() {
//     var firstName = document.getElementById("first_name").value
//     var lastName = document.getElementById("last_name").value;
    // var mobileNumber = document.getElementById("mobile_number").value;
//     var email = document.getElementById("email").value;
    //    var password = document.getElementById("password").value
    //    var age = document.getElementById("age").value;
    //    var bloodgroup = document.getElementById("blood_group").value;
    //    var height = document.getElementById("height").value;
    //    var weight = document.getElementById("weight").value;
    //    var gender = document.getElementById("gender").value;
    // xhr.open("POST", "http://10.21.97.33/dashboard.php", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         if (this.responseText == "USERNAME AND PASSWORD IS WRONG" || this.responseText == "USERNAME IS WRONG" || this.responseText == "PASSWORD IS WRONG") {
    //             result.innerHTML = this.responseText;
    //         } else {
    //             var myBooks = JSON.parse(this.responseText);
    //             window.location.href = "Backendtable.html";
    //             document.getElementById("result").style.visibility = "hidden";

    //         }

    //     }
    // };
    // var data = JSON.stringify({
    //     "username": nameData.value,
    //     "pass": passData.value
    // });
    // xhr.send(data);
// }

function onSubmit() {
    var a = validateName('first_name', 'firstnameerror');
    var b = validateName('last_name', 'lastnameerror');
    var c = validateNumber('mobile_number', 'mobilenumbererror');
    var d = validateEmail('email', 'emailerror');
    var e = validateCnfPassword('cnfpassword', 'cnfpassworderror');
    var f = validatePassword('password', 'passworderror');
    var g = validateAge('age', 'ageerror');
    var h = validateBloodGroup('blood_group', 'bloodgrouperror');
    var i = validateHeight('height', 'heighterror');
    var j = validateWeight('weight', 'weighterror');
    var k = validateGender('gender', 'gendererror');
    if ((a == true) && (b == true) && (c == true) && (d == true) && (e == true) && (f == true) && (g == true) && (h == true) && (i == true) && (j == true) && (k == true)) {
        // sendRegistrationData();
        console.log("Right");
        return true;

    }
    else {
        console.log("WRONG");
    }
}
