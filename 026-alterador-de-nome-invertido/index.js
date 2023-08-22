const nomeNave = prompt("Insira o nome da nave:");

let nomeInvertido = "";
const caractereProibido = "e";
for (let i = nomeNave.length - 1; i >= 0; i--) {
  if (nomeNave[i] === caractereProibido) {
    break;
  }
  nomeInvertido += nomeNave[i];
}

alert(
  "Nome original da nave: " +
    nomeNave +
    "\nNome após ocultação: " +
    nomeInvertido
);
