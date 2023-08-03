
const number = prompt("Digite o número desejado:");
let resultado = "";

for (let i = 1; i <= 20; i++) {
  resultado += "->" + number + " * " + i + " = " + number * i + "\n";
}
alert("A tabuada de " + number + "é: \n" + resultado);
