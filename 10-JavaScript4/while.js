const turista = prompt("Qual é seu nome?");
let cidades = "";
let quantidade = 0;

let visitou = prompt("Você já visitou alguma cidade antes? (s/n)");

while (visitou === "s") {
  let cidade = prompt("Qual o nome da cidade que você visitou?");

  cidades += "- " + cidade + "\n";
  quantidade++;
  visitou = prompt("Visitou outra cidade? (s/n)");
}

alert(
  "Informações do Turista: \n" +
    "Nome: " +
    turista +
    "\n" +
    "Quantidade de cidades visitadas: " +
    quantidade +
    "\n" +
    "Cidades: \n" +
    cidades
);
