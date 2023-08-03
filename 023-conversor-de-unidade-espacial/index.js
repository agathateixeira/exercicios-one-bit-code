let distanciaAL = parseFloat(prompt("Insira a distância em anos-luz:"));
let option = parseInt(
  prompt(
    "Insira o número de acordo com a opção desejada: " +
      "\n1 - Parsec (PC)" +
      "\n2 - Unidade Astronômica (UA)" +
      "\n3 - Quilômetros (KM)"
  )
);
let valorConvertido = 0;
let unidadeDeMedida = "";
switch (option) {
  case 1:
    const parsec = 0.306601;
    valorConvertido = distanciaAL * parsec;
    unidadeDeMedida = "Parsec (PC)";
    break;
  case 2:
    const UA = 63241.1;
    valorConvertido = distanciaAL * UA;
    unidadeDeMedida = "Unidade Astronômica (UA)";
    break;
  case 3:
    const KM = 9.5 * Math.pow(10, 12);
    valorConvertido = distanciaAL * KM;
    unidadeDeMedida = "Quilômetro (Km)";
    break;
  default:
    alert(
      "Distância em anos-luz = " +
        distanciaAL +
        "\nUnidade não identificada: Conversão fora do escopo"
    );
    break;
}
if (option >= 1 && option <= 3) {
  alert(
    "Distância em anos-luz = " +
      distanciaAL +
      "\n" +
      unidadeDeMedida +
      " = " +
      distanciaAL +
      valorConvertido
  );
}
