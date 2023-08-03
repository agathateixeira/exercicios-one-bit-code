let firstName = prompt("What's your first name?");

let lastName = prompt("What's your last name?");

let fieldStudy = prompt("what is your field of study?");

let birthYear = prompt("What is your birth year?");
let today = 2022;
console.log(birthYear);
let age = today - birthYear;

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nName: " +
    firstName +
    " " +
    lastName +
    "\nField of study: " +
    fieldStudy +
    "\nAge: " +
    age
);
