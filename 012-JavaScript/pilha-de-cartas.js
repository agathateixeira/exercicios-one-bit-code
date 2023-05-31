// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando
// na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de “Adicionar
// uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o
// nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a
// carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao
// escolher a opção de “Sair”, caso contrário deve voltar ao menu.
let baralho = [];
let option = "";

do {
  let cartasBaralho = "";
  for (let i = 0; i < baralho.length; i++) {
    cartasBaralho += "--> " + baralho[i] + "\n";
  }

  option = prompt(
    "Cartas do baralho: \n" +
      cartasBaralho +
      "\n Escolha uma opção abaixo (1, 2 ou 3): \n 1-Adicionar carta \n 2-Puxar uma carta \n 3-Sair"
  );

  switch (option) {
    case "1":
      const cartaAdicionada = prompt("Qual carta deseja adicionar?");
      baralho.push(cartaAdicionada);
      break;

    case "2":
      if (baralho.length > 0) {
        const cartaRetirada = baralho.pop();
        alert("Carta retirada: " + cartaRetirada);
      } else {
        alert("Não há cartas no baralho!");
      }
      break;

    case "3":
      alert("O programa será encerrado.");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");
