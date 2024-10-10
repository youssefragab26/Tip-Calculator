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
