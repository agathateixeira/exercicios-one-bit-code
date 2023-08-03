//1-funcao para perguntar nome
const inserirNome = function () {
  return prompt("Qual seu nome?");
};
const nomePiloto = inserirNome();

//2-inserindo velocidade inicial com valor 0;
let velocidadeInicial = 0;

//3
let velocidadeAtual = prompt("A qual velocidade deseja acelerar a nave?");

//4-inserindo confirmacao
const confirmacao = confirm("Deseja acelerar a " + velocidadeAtual + "km/h?");

if (confirmacao) {
  //5-exibindo mensagem
  if (velocidadeAtual <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.");
  } else if (velocidadeAtual > 0 && velocidadeAtual < 40) {
    alert("Você está devagar, podemos aumentar mais.");
  } else if (velocidadeAtual >= 40 && velocidadeAtual < 80) {
    alert("Parece uma boa velocidade para manter.");
  } else if (velocidadeAtual >= 80 && velocidadeAtual < 100) {
    alert("Velocidade alta. Considere diminuir.");
  } else if (velocidadeAtual >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.");
  }
} else {
  alert("Nave está parada. Considere partir e aumentar a velocidade.");
  velocidadeAtual = velocidadeInicial;
}

//6-alerta final

alert(
  "Nome do piloto: " +
    nomePiloto +
    "\nVelocidade atual = " +
    velocidadeAtual +
    "km/h"
);
