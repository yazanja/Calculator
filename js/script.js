let display = document.getElementsByClassName('display')[0];

function appendToDisplay(input){ 
    display.value += input;
}


function calculate(){
    display.value =eval(display.value)

}


function clearDisplay(){
    display.value=""

}