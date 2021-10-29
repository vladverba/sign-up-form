const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye / eye slash icon
  this.classList.toggle("bi-eye");
});

function validateFormInput() {
  var errorBox = document.getElementsByClassName("error_message")[0];

  firstName = checkFirstName();
  if (firstName == true) {
    emailValidate = validateEmail();
    if (emailValidate == true) {
      errorBox.textContent = "Great Success!";
      errorBox.style.color = "green";
    }
  }
}

function checkFirstName() {
  var nameInput = document.getElementById("first_name");
  var errorBox = document.getElementsByClassName("error_message")[0];

  if (nameInput.value.length < 2) {
    errorBox.textContent = "Please enter a valid first name.";
    errorBox.style.color = "red";
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  var emailInput = document.getElementById("user_email");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var errorBox = document.getElementsByClassName("error_message")[0];

  if (emailInput.value.match(mailformat)) {
    return true;
  } else {
    errorBox.textContent = "Please enter a valid email.";
    errorBox.style.color = "red";

    return false;
  }
}
