//Pedir nome da pessoa mais velha
//Pedir idade da pessoa mais velha
//Pedir nome da pessoa mais nova
//Pedir idade da pessoa mais nova
//Calcular diferença de idade
//Exibir:
//      Nome da pessoa mais velha e sua idade
//      Nome da pessoa mais nova e sua idade
//      Diferença de idade

// // fazendo de forma mais simples
// let nomeVelha = prompt("Insira o nome da pessoa mais velha:");
// let idadeVelha = parseInt(prompt("Insira a idade da pessoa mais velha:"));
// let nomeNova = prompt("Insira o nome da pessoa mais nova:");
// let idadeNova = parseInt(prompt("Insira a idade da pessoa mais nova:"));
// const diferencaIdade = idadeVelha - idadeNova;

// alert(
//   "Nome da pessoa mais velha: " +
//     nomeVelha +
//     "\nIdade da pessoa mais velha = " +
//     idadeVelha +
//     " anos." +
//     "\n\nNome da pessoa mais nova: " +
//     nomeNova +
//     "\nIdade da pessoa mais nova = " +
//     idadeNova +
//     " anos." +
//     "\n\nDiferença entre idades = " +
//     diferencaIdade +
//     " anos."
// );

//TREINANDO FUNCTIONS:

//function para solicitar nome e idade
let questionario = function () {
  let perguntasUsuario = {
    nomeVelha: prompt("Insira o nome da pessoa mais velha:"),
    idadeVelha: parseInt(prompt("Insira a idade da pessoa mais velha:")),
    nomeNova: prompt("Insira o nome da pessoa mais nova:"),
    idadeNova: parseInt(prompt("Insira a idade da pessoa mais nova:")),
  };
  return perguntasUsuario;
};
////salvando a funcao na variavel
let dados = questionario();

//function para calcular diferença de idade
function diferencaIdade(dados) {
  let calculoIdade = dados.idadeVelha - dados.idadeNova;
  return calculoIdade;
}
////salvando a funcao na variavel
let resultadoIdades = diferencaIdade(dados);

//function para exibir nomes e idades:
let dadosPessoas = function (dados) {
  let dadosAlerta = alert(
    "Nome da pessoa mais velha: " +
      dados.nomeVelha +
      "\nIdade da pessoa mais velha = " +
      dados.idadeVelha +
      " anos." +
      "\n\nNome da pessoa mais nova: " +
      dados.nomeNova +
      "\nIdade da pessoa mais nova = " +
      dados.idadeNova +
      " anos." +
      "\n\nDiferença entre idades = " +
      resultadoIdades +
      " anos."
  );
  return dadosAlerta;
};

//function para rodar programa
let programa = function () {
  dadosPessoas(dados);
};

programa();
