let enteredValue = prompt("Enter the desired value (in meters)");

let unitOfMesurement = prompt(
  "Choose a unit of measurement for conversion.\n" +
    "Enter the option in parentheses:\n" +
    "(mm) - millimeter \n" +
    "(cm) - centimeter\n" +
    "(dm) - decimeter\n" +
    "(dam) - decameter\n" +
    "(hm) - hectometer\n" +
    "(km) - kilometer"
);

let convertedValue;

switch (unitOfMesurement) {
  case "mm":
    convertedValue = enteredValue * 1000;
    alert(
      enteredValue + " meters are equal to " + convertedValue + " millimeters"
    );
    break;
  case "cm":
    convertedValue = enteredValue * 100;
    alert(
      enteredValue + " meters are equal to " + convertedValue + " centimeters"
    );
    break;
  case "dm":
    convertedValue = enteredValue * 10;
    alert(
      enteredValue + " meters are equal to " + convertedValue + " decimeters"
    );
    break;
  case "dam":
    convertedValue = enteredValue / 10;
    alert(
      enteredValue + " meters are equal to " + convertedValue + " decameters"
    );
    break;
  case "hm":
    convertedValue = enteredValue / 100;
    alert(
      enteredValue + " meters are equal to " + convertedValue + " hectometers"
    );
    break;
  case "km":
    convertedValue = enteredValue / 1000;
    alert(
      enteredValue + " meters are equal to " + convertedValue + " kilometers"
    );
    break;
  default:
    alert("Choose one of the valid options");
}
