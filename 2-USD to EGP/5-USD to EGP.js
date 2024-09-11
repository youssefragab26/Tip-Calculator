let dollarprice = 48.32 ;
let poundprice = 0.0206 ;

let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

dollar.onkeyup = function(){
    pound.value = dollar.value * dollarprice;
}
pound.onkeyup = function(){
    dollar.value = pound.value * poundprice;
}
