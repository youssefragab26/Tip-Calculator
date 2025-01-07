//Input
const bill = document.getElementById('billAmount');
const numOfPeople = document.getElementById('numOfPeople');

//Output
const valueOne = document.getElementById('valueOne');
const valueTow = document.getElementById('valueTwo');

// Buttons
// Tip 5% Button
const tip5 = document.getElementById('tip5')

function Tip5() {
    let Total = bill.value * 0.05;
    let TipAmount = Total /numOfPeople.value
    valueOne.innerText = `$${Math.ceil(TipAmount)}`;
    valueTow.innerText = `$${Math.ceil(Total)}`;
    //Button Style
    tip5.style.backgroundColor = '#25c2ac'
    tip5.style.color = '#004a4b'
    //Buttons Style
    tip10.style.backgroundColor = '#004347'
    tip10.style.color = '#f1f6f9'
    tip15.style.backgroundColor = '#004347'
    tip15.style.color = '#f1f6f9'
    tip25.style.backgroundColor = '#004347'
    tip25.style.color = '#f1f6f9'
    tip50.style.backgroundColor = '#004347'
    tip50.style.color = '#f1f6f9'

    resetButton.style.backgroundColor = '#26c0ab'
    resetButton.style.color = '#005351'
}
tip5.addEventListener('click', Tip5)
//Tip 10% Button
const tip10 = document.getElementById('tip10')
function Tip10() {
    let Total = bill.value * 0.10;
    let TipAmount = Total /numOfPeople.value
    valueOne.innerText = `$${Math.ceil(TipAmount)}`;
    valueTow.innerText = `$${Math.ceil(Total)}`;
    //Button Style
    tip10.style.backgroundColor = '#25c2ac'
    tip10.style.color = '#004a4b'
    //Buttons Style
    tip5.style.backgroundColor = '#004347'
    tip5.style.color = '#f1f6f9'
    tip15.style.backgroundColor = '#004347'
    tip15.style.color = '#f1f6f9'
    tip25.style.backgroundColor = '#004347'
    tip25.style.color = '#f1f6f9'
    tip50.style.backgroundColor = '#004347'
    tip50.style.color = '#f1f6f9'

    resetButton.style.backgroundColor = '#26c0ab'
    resetButton.style.color = '#005351'
}
tip10.addEventListener('click', Tip10)
//Tip 15% Button
const tip15 = document.getElementById('tip15')
function Tip15() {
    let Total = bill.value * 0.15;
    let TipAmount = Total /numOfPeople.value
    valueOne.innerText = `$${Math.ceil(TipAmount)}`;
    valueTow.innerText = `$${Math.ceil(Total)}`;
    //Button Style
    tip15.style.backgroundColor = '#25c2ac'
    tip15.style.color = '#004a4b'
    //Buttons Style
    tip5.style.backgroundColor = '#004347'
    tip5.style.color = '#f1f6f9'
    tip10.style.backgroundColor = '#004347'
    tip10.style.color = '#f1f6f9'
    tip25.style.backgroundColor = '#004347'
    tip25.style.color = '#f1f6f9'
    tip50.style.backgroundColor = '#004347'
    tip50.style.color = '#f1f6f9'

    resetButton.style.backgroundColor = '#26c0ab'
    resetButton.style.color = '#005351'
}
tip15.addEventListener('click', Tip15)
//Tip 25% Button
const tip25 = document.getElementById('tip25')
function Tip25() {
    let Total = bill.value * 0.25;
    let TipAmount = Total /numOfPeople.value
    valueOne.innerText = `$${Math.ceil(TipAmount)}`;
    valueTow.innerText = `$${Math.ceil(Total)}`;
    //Button Style
    tip25.style.backgroundColor = '#25c2ac'
    tip25.style.color = '#004a4b'
    //Buttons Style
    tip5.style.backgroundColor = '#004347'
    tip5.style.color = '#f1f6f9'
    tip10.style.backgroundColor = '#004347'
    tip10.style.color = '#f1f6f9'
    tip15.style.backgroundColor = '#004347'
    tip15.style.color = '#f1f6f9'
    tip50.style.backgroundColor = '#004347'
    tip50.style.color = '#f1f6f9'

    resetButton.style.backgroundColor = '#26c0ab'
    resetButton.style.color = '#005351'
}
tip25.addEventListener('click', Tip25)
//Tip 50% Button
const tip50 = document.getElementById('tip50')
function Tip50() {
    if (bill.value === ''){
        alert('Please enter a bill amount')
    }
    else {
    let Total = bill.value * 0.5;
    let TipAmount = Total /numOfPeople.value
    valueOne.innerText = `$${Math.ceil(TipAmount)}`;
    valueTow.innerText = `$${Math.ceil(Total)}`;
    //Button Style
    tip50.style.backgroundColor = '#25c2ac'
    tip50.style.color = '#004a4b'
    //Buttons Style
    tip5.style.backgroundColor = '#004347'
    tip5.style.color = '#f1f6f9'
    tip10.style.backgroundColor = '#004347'
    tip10.style.color = '#f1f6f9'
    tip15.style.backgroundColor = '#004347'
    tip15.style.color = '#f1f6f9'
    tip25.style.backgroundColor = '#004347'
    tip25.style.color = '#f1f6f9'

    resetButton.style.backgroundColor = '#26c0ab'
    resetButton.style.color = '#005351'
   }
}
tip50.addEventListener('click', Tip50)
// Custom

// Errors
function Error(){
    if (bill.value === false){
        alert('Please enter the bill amount')
    }
}
tip50.addEventListener('click', Error)

// Reset Button
const resetButton  = document.getElementById('resetButton');
function Reset(){
   location.reload()
}
resetButton.addEventListener('click', Reset)
// Custom
const custom = document.getElementById('custom');
function Custom(){

}
custom.addEventListener('click', Custom)