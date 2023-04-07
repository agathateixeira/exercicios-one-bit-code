const personagem1 = prompt("Insira o nome do primeiro personagem");
const ataque = prompt("Insira o poder de ataque do " + personagem1);

const personagem2 = prompt("Insira o nome do segundo personagem");
let vida = prompt("Quantos pontos de vida o " + personagem2 + " terá?");
let defesa = prompt(
  "Quantos pontos de defesa o " + personagem2 + " " + "terá?"
);
let escudo = prompt("O personagem terá escudo? Responda SIM ou NÃO: ");

let dano;

if (ataque > defesa && escudo === "nao") {
  dano = ataque - defesa;
} else if (ataque > defesa && escudo === "sim") {
  dano = (ataque - defesa) / 2;
} else {
  dano = 0;
}

vida -= dano;

alert(
  "Informações atualizadas:\n" +
    personagem1 +
    "\nAtaque: " +
    ataque +
    "\n \n" +
    personagem2 +
    "\n" +
    "Vida: " +
    vida +
    "\n" +
    "Defesa: " +
    defesa +
    "\n" +
    "Escudo: " +
    escudo +
    "\n \n" +
    "Dano causado: " +
    dano
);
