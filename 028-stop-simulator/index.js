//Neste exercício vamos simular o computador de bordo de uma espaçonave
//no momento em que ela inicia a parada até abrir as comportas para os
//pilotos saírem
//1-Considerem que a nave está a 150km/s//
//2-Crie uma função para desacelerar 20km/s a cada segundo
////Considere no código que cada iteração de um laço de repetição é 1
//segundo
//3-Essa função será uma HOF e também deve imprimir cada atualização
//que houver na velocidade da nave
////Esta impressão deve ser feita por meio de callback que essa
////função receberá
//4-Ao final, exiba uma mensagem informando que a nava está
//parada e as comportas podem ser abertas

const initialVelocity = 150;
let currentVelocity = 0;

//função para desacelerar
function slowDown(currentVelocity = initialVelocity + 20) {
  for (let i = 0; currentVelocity > 0; i++) {
    currentVelocity -= 20;
    if (currentVelocity < 10) {
      currentVelocity = 0;
    }
    alert("Spaceship X" + "\nVelocidade Atual = " + currentVelocity + "km/s");
  }
}

slowDown();
