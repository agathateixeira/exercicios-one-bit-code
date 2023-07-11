alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

const name = prompt("Informe seu nome:");
const age = parseInt(prompt("Informe sua idade"));
let ageConfirmation = confirm("Você tem: " + age + " anos?");
let correctedAge;

if (ageConfirmation) {
  alert(
    "Nome: " +
      name +
      "\nIdade: " +
      age +
      " anos. \nVocê confirmou sua idade: " +
      ageConfirmation +
      "."
  );
} else {
  do {
    correctedAge = parseInt(
      prompt("Idade não confirmada. \nDigite sua idade correta: ")
    );
    ageConfirmation = confirm("Você tem: " + correctedAge + " anos?");
  } while (ageConfirmation === false);
  alert(
    "Nome: " +
      name +
      "\nIdade: " +
      correctedAge +
      " anos. \nVocê confirmou sua idade: " +
      ageConfirmation +
      "."
  );
}
