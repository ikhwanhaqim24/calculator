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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "ac") {
            displayCurrent.textContent = "0";
            displayHistory.textContent = "0";
        };
    })
})