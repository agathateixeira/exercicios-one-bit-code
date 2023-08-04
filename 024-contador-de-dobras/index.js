//1-pedir nome da nave
//2-perguntar se deseja entrar na dobra com a seguinte mensagem:
////Deseja entrar na dobra espacial?
////1-Sim
////2-Não
//////Se a resposta for sim, contabilizaremos uma dobra
//3-o usuario deve ser perguntado se deseja realizar a próxima dobra:
////Deseja realizar a próxima dobra?
////1-Sim
////2-Não
//////Para cada "Sim", vamos contabilizar mais uma dobra realizada
//4-a pergunta deve ser feita novamente até que a escolha seja "nao"
//5-Ao escolher "não" em qualquer pergunta a contagem deve ser encerrada
//6-o programa deve informar o nome da nave e o número de vezes seguidos
//que a dobra espacial foi realizada

let quantidadeDeDobras = 0;

const nomeDaNave = prompt("Insira o nome da nave:");
let entradaNaDobra = prompt(
  "Deseja entrar na dobra espacial?" + "\n1-Sim" + "\n2-Não"
);

if (entradaNaDobra === "1") {
  quantidadeDeDobras = 1;
  let proximaDobra = prompt(
    "Deseja realizar a próxima dobra?" + "\n1-Sim" + "\n2-Não"
  );
  while (proximaDobra === "1") {
    proximaDobra = prompt(
      "Deseja realizar a próxima dobra?" + "\n1-Sim" + "\n2-Não"
    );
    quantidadeDeDobras++;
  }
  if (proximaDobra === "2") {
    alert(
      "Nome da nave: " +
        nomeDaNave +
        "\nQuantidade de dobras espaciais realizadas: " +
        quantidadeDeDobras
    );
  }
} else if (entradaNaDobra === "2") {
  alert(
    "Nome da nave: " +
      nomeDaNave +
      "\nQuantidade de dobras espaciais realizadas: " +
      quantidadeDeDobras
  );
} else {
  alert("Insira somente informações válidas (1 ou 2).");
}
