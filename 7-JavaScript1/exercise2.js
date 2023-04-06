let entrada1 = prompt("Enter the number 1");
let entrada2 = prompt("Enter the number 2");

let number1 = parseFloat(entrada1);
let number2 = parseFloat(entrada2);

let sumResult = number1 + number2;
let subtractionResult = number1 - number2;
let multiplicationResult = number1 * number2;
let divisionResult = number1 / number2;

alert(
  "Results: \n" +
    "\nThe result of this sum is: " +
    sumResult +
    "\nThe result of this subtraction is: " +
    subtractionResult +
    "\nThe result of this multiplication is: " +
    multiplicationResult +
    "\nThe result of this division is: " +
    divisionResult
);
