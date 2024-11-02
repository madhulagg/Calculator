const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    try {
        display.value = eval(display.value)
        if(display.value > 999999999999){
            display.value = "ERROR";
        }
    }
    catch (error) {
        display.value = "ERROR";
    }
}
function clearDisplay(){
    display.value = "";
}