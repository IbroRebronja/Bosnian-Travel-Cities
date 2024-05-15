//birthdate script for birthdate in "Contact Us", wasted so much time to get this to work lol

function setDefaultBirthdate() {
  var today = new Date();
  var defaultDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  var dd = String(defaultDate.getDate()).padStart(2, '0');
  var mm = String(defaultDate.getMonth() + 1).padStart(2, '0');
  var yyyy = defaultDate.getFullYear();
  var defaultDateString = yyyy + '-' + mm + '-' + dd;

  document.getElementById("birthdate").setAttribute("max", defaultDateString);
}

setDefaultBirthdate();

//password must contain bla bla bla u get the gist

function validateForm() {
  var password = document.getElementById("userpassword").value;

  var numberRegex = /\d/;
  var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  var uppercaseRegex = /[A-Z]/;

  if (!numberRegex.test(password)) {
    alert("Password must contain at least one number.");
    return false;
  }
  if (!specialCharRegex.test(password)) {
    alert("Password must contain at least one special character.");
    return false;
  }
  if (!uppercaseRegex.test(password)) {
    alert("Password must contain at least one uppercase letter.");
    return false;
  }

  return true;
}

// This is used to show your password but... please make this better somehow - later on of course

function myFunction() {
  var x = document.getElementById("userpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}