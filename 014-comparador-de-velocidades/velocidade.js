const carro1 = prompt("Insira o nome do primeiro carro: ");
const velocidade1 = prompt("Insira a velocidade primeiro do carro");
const carro2 = prompt("Insira o nome do segundo carro: ");
const velocidade2 = prompt("Insira a velocidade segundo do carro");

if (velocidade1 > velocidade2) {
  alert("O " + carro1 + " " + "é mais rápido do que o " + carro2);
} else if (velocidade2 > velocidade1) {
  alert("O " + carro2 + " " + "é mais rápido do que o " + carro1);
} else {
  alert("O " + carro1 + " " + "tem a mesma velocidade que o " + carro2);
}

//versão mais comprida
// const carro1 = prompt("Insira o nome do primeiro carro: ");
// const velocidade1 = prompt("Insira a velocidade primeiro do carro");
// const carro2 = prompt("Insira o nome do segundo carro: ");
// const velocidade2 = prompt("Insira a velocidade segundo do carro");

// if (velocidade1 > velocidade2) {
//   alert("O " + carro1 + " " + "é mais rápido do que o " + carro2);
// } else {
//   alert("O " + carro2 + " " + "é mais rápido do que o " + carro1);
// }
// if (velocidade1 === velocidade2) {
//   alert("O " + carro1 + " " + "tem a mesma velocidade que o " + carro2);
// }
