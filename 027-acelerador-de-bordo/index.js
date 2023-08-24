//Vamos criar um programa de bordo para nossa nave que receba o nome da nave//
//A velocidade da nave deve ser inicialmente 0 e um menu deve ser exibido//
////para que o usuario escolha entre as seguintes opções://

//1-acelerar a nave em 5km/s//
//2-desacelerar em kkm/s//
//// por mais que desacelere, a nave nao pode ter uma velocidade menor que 0km/s//
//3-imprimir dados a bordo//
////deve ser impresso o nome da nave com sua velocidade atual//
//4-sair do programa//

//Caso a pessoa escolha um numero que não está na lista, é necessário//
//exibir o menu novamente até que seja escolhida uma opção válida.//

//Para fazer esse app precisaremos:
//1-Criar uma função que exiba o  menu e valide a opção escolhida
//2-Uma função para cada ação do menu de acelerar. desacelerar e imprimir
//dados de bordo
//3-Encerrar app somente quando digirar para sair

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
