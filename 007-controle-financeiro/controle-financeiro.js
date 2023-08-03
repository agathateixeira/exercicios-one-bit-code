let resultado = prompt("Qual o valor inicial disponível?");
let valorAdicionado = 0;
let option = "";

do {
  option = prompt(
    "Você tem " +
      resultado +
      " dólares." +
      " Escolha uma opção abaixo: \n" +
      "+\n" +
      "-\n" +
      "S"
  );
  if (option === "+") {
    valorAdicionado = prompt("Qual valor deseja adicionar?");
    resultado = parseFloat(resultado) + parseFloat(valorAdicionado);
  } else if (option === "-") {
    valorAdicionado = prompt("Qual valor deseja remover?");
    resultado = parseFloat(resultado) - parseFloat(valorAdicionado);
  }
} while (option !== "S");
{
  alert("Você tem " + resultado + " dólares.");
}
