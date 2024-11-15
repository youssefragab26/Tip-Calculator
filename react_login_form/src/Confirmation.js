let NameUser = 'joe';
let PasswordUser = '0826';
const userName = document.getElementById("username");
const password = document.getElementById("password");
const goButton = document.getElementById("goButton");

function login() {
    if (userName.value === NameUser && password.value === PasswordUser) {
        window.location.href = "Home.html";
    }else {
        window.alert("Failed to login");
    }
}
function Confirm(){
goButton.addEventListener("click", login);
}
export default Confirm