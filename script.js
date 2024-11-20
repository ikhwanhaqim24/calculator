const add = (a, b) => { return a + b };

const subtract = (a, b) => { return a - b };

const multiply = (a, b) => { return a * b };

const divide = (a, b) => { return a / b };

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
const displayCurrent = document.querySelector(".display > .current");
const displayHistory = document.querySelector(".display > .history");

let previousResult = 0;
let currentResult = previousResult;

const updateDisplay = (number = 0, history = 0) => {
    // update current if any number button pressed
    // update current with operands if any operands button pressed
    // update current if delete button pressed

};

const resetDisplay = () => {
    displayCurrent.textContent = "0";
    displayHistory.textContent = "";
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            // numbers
            case "one":
                displayCurrent.textContent += "1";
            break;
            case "two":
                displayCurrent.textContent += "2";
            break;
            case "three":
                displayCurrent.textContent += "3";
            break;
            case "four":
                displayCurrent.textContent += "4";
            break;
            case "five":
                displayCurrent.textContent += "5";
            break;
            case "six":
                displayCurrent.textContent += "6";
            break;
            case "seven":
                displayCurrent.textContent += "7";
            break;
            case "eight":
                displayCurrent.textContent += "8";
            break;
            case "nine":
                displayCurrent.textContent += "9";
            break;
            case "zero":
                displayCurrent.textContent += "0";
            break;
            // special buttons
            case "ac":
                resetDisplay();
            break;
            case "delete":

            break;
            // operands
            case "add":
                
            break;
            case "subtract":
                
            break;
            case "multiply":
                
            break;
            case "divide":
                
            break;
            // equals
            case "equals":
                
            break;
        }
    })
})