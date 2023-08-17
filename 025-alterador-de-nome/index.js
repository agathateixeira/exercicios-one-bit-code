const nomeDaNave = prompt("Insira o nome da espaçonave");
const caractereInicial = prompt("Qual caractere você deseja substituir?");
const caractereFinal = prompt("Qual caractere você deseja inserir?");
let novoNome = "";
for (let i = 0; i < nomeDaNave.length; i++) {
  if (nomeDaNave[i] === caractereInicial) {
    novoNome += caractereFinal;
  } else {
    novoNome += nomeDaNave[i];
  }
}
alert("O novo nome da nave é: " + novoNome);
