// Step 1 : add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2: get the email address inside the input field
  // always remember to use .value to get text from an input field
  let emailField = document.getElementById("user-email");
  let userEmail = emailField.value;

  // step 3: get password
  let passwordFiled = document.getElementById("user-password");
  let userPassword = passwordFiled.value;

  // Danger : do not verify email password on the client side , we are using here just learning purpose

  //   step 4: verify email and password
  if (userEmail === "sontan@baap.com" && userPassword === "secret") {
    window.location.href = "bank.html";
  } else {
    let submitBtn = document.getElementById("btn-submit");
    submitBtn.classList.add("bg-red-600");
    submitBtn.classList.add("hover:bg-red-700");
    alert(
      "Tui password vule gechos !!! Toke ami Teijjo sontan ghosona korlam."
    );
  }
});
