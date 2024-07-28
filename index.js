// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

//Deleting the last character in the display
function deleteLastCharacter(){
    display.value = display.value.slice(0, -1);
}

//Event listener for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace'){
        deleteLastCharacter();
    } else if (!isNaN(event.key)) {
        appendToDisplay(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === '=') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }

});