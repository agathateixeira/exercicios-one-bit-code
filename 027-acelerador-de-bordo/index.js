const initialVelocity = 0;
let currentVelocity = initialVelocity;
const spaceshipName = prompt("Insira o nome da nave: ");
let option;

//função para mostrar menu
function showMenu() {
  option = prompt(
    "Insira o número correspondente à opção desejada: " +
      "\n1 - Acelerar a nave em 5km/s" +
      "\n2 - Desacelerar em 5km/s" +
      "\n3 - Imprimir dados a bordo" +
      "\n4 - Sair do programa"
  );
}

//função para acelerar
function accelerate() {
  currentVelocity += 5;
}

//função para desacelerar
function decelerate() {
  currentVelocity -= 5;
  if (currentVelocity < 0) {
    currentVelocity = 0;
  }
}
//função para imprimir dados a bordo
function printData() {
  alert(
    "Nome da nave: " +
      spaceshipName +
      "\nVelocidade atual = " +
      currentVelocity +
      "km/s."
  );
}
//função para validar opção escolhida
function chosenOption() {
  switch (option) {
    case "1":
      accelerate();
      break;
    case "2":
      decelerate();
      break;
    case "3":
      printData();
      break;
    case "4":
      alert("Encerrando o programa de bordo.");
      break;
    default:
      alert("Insira uma opção do 1 ao 4.");
  }
}

function runProgram() {
  while (option !== "4") {
    showMenu();
    chosenOption();
  }
}

runProgram();
