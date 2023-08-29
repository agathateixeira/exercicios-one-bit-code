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

//função para informações finais
function stopMessage() {
  alert("A nave está parada.\nAs comportas podem ser abertas.");
}

stopMessage();
