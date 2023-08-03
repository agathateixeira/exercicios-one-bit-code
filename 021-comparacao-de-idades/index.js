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
