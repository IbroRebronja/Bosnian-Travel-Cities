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

//password must contain this and that , bla bla bla u get the gist of it

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

//used for showing password, the eyelash to the right

function myFunction() {
  var x = document.getElementById("userpassword");
  var icon = document.getElementById("showpasswordicon");
  
  if (x.type === "password") {
      x.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
  } else {
      x.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
  }
}

//only put numbers in phone number field

function validatePhoneNumber(event) {
  const input = event.target;
  input.value = input.value.replace(/[^+\d]/g, '');
}