let option = "";
do {
  option = prompt(
    "Escolha uma das alternativas abaixo:\n" +
      "A\n" +
      "B\n" +
      "C\n" +
      "D\n" +
      "E"
  );

  alert("Você escolheu a opção " + option);
} while (option !== "E");
{
  alert("O programa será encerrado!");
}
