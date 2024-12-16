let dollarprice = 48.45 ;
let poundprice = 0.0205 ;

let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

dollar.onkeyup = function(){
    pound.value = dollar.value * dollarprice;
}
pound.onkeyup = function(){
    dollar.value = pound.value * poundprice;
}
const darkMode = document.getElementById("Dark");
const container = document.getElementById("DP container");
function DarkMode(){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    container.style.color = "#ffffff";
    container.style.backgroundColor = "#000000";
}
darkMode.addEventListener('click', DarkMode)
