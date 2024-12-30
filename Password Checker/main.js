const password = document.getElementById("password");
const CheckButton = document.getElementById("check-password");
function checkPassword() {
    if (password.value === "") {
        alert("Please enter your password.");
    }
    else if  (password.value.length < 8) {
        alert("Password must be at least 8 characters.");
    }

}
CheckButton.addEventListener("click", checkPassword);