//Vamos criar um programa de bordo para nossa nave que receba o nome da nave
//A velocidade da nave deve ser inicialmente 0 e um menu deve ser exibido
////para que o usuario escolha entre as seguintes opções:

//1-acelerar a nave em 5km/s
//2-desacelerar em kkm/s
//// por mais que desacelere, a nave nao pode ter uma velocidade menor que 0km/s
//3-imprimir dados a bordo
////deve ser impresso o nome da nave com sua velocidade atual
//4-sair do programa

//

let option;
const initialVelocity = 0;
let currentVelocity = initialVelocity;
const spaceshipName = prompt("Insira o nome da nave: ");

//função para mostrar menu
function showMenu(option) {
  option = prompt(
    "Insira o número correspondente à opção desejada: " +
      "\n1-acelerar a nave em 5km/s" +
      "\n2-desacelerar em 5km/s" +
      "\n3-imprimir dados a bordo" +
      "\n4-sair do programa"
  );
  return option;
}

//função para acelerar
function accelerate() {
  currentVelocity += 5;
}

//função para desacelerar
function decelerate() {
  currentVelocity -= 5;
  if (currentVelocity === 0) {
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
    case 1:
      accelerate();
      break;
    case 2:
      decelerate();
      break;
    case 3:
      printData();
      break;
    case 4:
      break;
    default:
      alert("Insira uma opção do 1 ao 4.");
  }
}

//função para rodar programa
function runProgram() {
  showMenu();
  chosenOption();
}

runProgram();
