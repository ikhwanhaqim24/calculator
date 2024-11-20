const add = (a, b) => { return a + b };

const subtract = (a, b) => { return a - b };

const multiply = (a, b) => { return a * b };

const divide = (a, b) => { return a / b };

const maxDigit = 9;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const operate = (operator, firstNumber, secondNumber) => {
    let result = 0;
    switch (operator) {
        case "add":
            result = add(firstNumber, secondNumber);
            break;
        case "subtract":
            result = subtract(firstNumber, secondNumber);
            break;
        case "multiply":
            result = multiply(firstNumber, secondNumber);
            break;
        case "divide":
            result = divide(firstNumber, secondNumber);
            break;
    };
    return result;
};

const buttons = document.querySelectorAll(".button");
const displayCurrent = document.querySelector(".numbers > .current");
const displayHistory = document.querySelector(".numbers > .history");

let previousResult = 0;
let currentResult = previousResult;
let digits = 1;
let operandClicked = false;
let previousOperand;

const updateDisplay = (number) => {
    // update current if any number button pressed
    // update current with operands if any operands button pressed
    // update current if delete button pressed

    // check for limit
    if (digits > maxDigit) return;
    // first time number
    // if (currentResult == 0 && digits == 0) displayCurrent.textContent = number;

    displayCurrent.textContent += number;
    displayCurrent.textContent = parseInt(displayCurrent.textContent);
    digits += 1;
};

const selectOperand = (button) => {

    if (previousOperand == button) return;
    if (previousOperand) previousOperand.classList.remove("selected");
    
    button.classList.add("selected");
    operandClicked = true;

    previousOperand = button;
};

const resetDisplay = () => {
    // reset display
    displayCurrent.textContent = "0";
    displayHistory.textContent = "";

    // reset variables
    firstNumber,
    secondNumber,
    previousResult,
    currentResult = 0;

    digits = 1;

    operator = "";

    if (previousOperand) previousOperand.classList.remove("selected");

    operandClicked = false;
    previousOperand = null;
}

resetDisplay();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            // numbers
            case "zero":
                updateDisplay(0);
            break;
            case "one":
                updateDisplay(1);
            break;
            case "two":
                updateDisplay(2);
            break;
            case "three":
                updateDisplay(3);
            break;
            case "four":
                updateDisplay(4);
            break;
            case "five":
                updateDisplay(5);
            break;
            case "six":
                updateDisplay(6);
            break;
            case "seven":
                updateDisplay(7);
            break;
            case "eight":
                updateDisplay(8);
            break;
            case "nine":
                updateDisplay(9);
            break;
            // special buttons
            case "ac":
                resetDisplay();
            break;
            case "delete":

            break;
            // operands
            case "add":
                selectOperand(button);
            break;
            case "subtract":
                selectOperand(button);
            break;
            case "multiply":
                selectOperand(button);
            break;
            case "divide":
                selectOperand(button);
            break;
            // equals
            case "equals":
                
            break;
        }
    })
})