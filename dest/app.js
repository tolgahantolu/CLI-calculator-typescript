"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstStr = (0, readline_sync_1.question)("Enter a first number:\n");
    const operator = (0, readline_sync_1.question)("Enter operator:\n");
    const secondStr = (0, readline_sync_1.question)("Enter a second number\n");
    const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum, operator, secondNum);
        console.log("Congrats 🎉 Here is the result: " + result);
    }
    else {
        console.log("\nInvalid Input! Please enter a valid input...\n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str); // result ex: 42 or NaN;
    const isNum = !isNaN(maybeNum); // if NOT NaN 👉 return isNum
    return isNum;
}
main();
