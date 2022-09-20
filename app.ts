import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter a first number:\n");
  const operator: string = question("Enter operator:\n");
  const secondStr: string = question("Enter a second number\n");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result: number = calculate(firstNum, operator as Operator, secondNum);
    console.log("Congrats 🎉 Here is the result: " + result);
  } else {
    console.log("\nInvalid Input! Please enter a valid input...\n");
    main();
  }
}

function calculate(
  firstNum: number,
  operator: Operator,
  secondNum: number
): number {
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

function isOperator(operator: string): boolean {
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

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str); // result ex: 42 or NaN;
  const isNum: boolean = !isNaN(maybeNum); // if NOT NaN 👉 return isNum
  return isNum;
}

main();
