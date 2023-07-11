let baralho = [];
let opcao = parseInt(
  prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n\nDigite abaixo o número de acordo com a opção desejada:\n1 - Adicionar carta\n2 - Puxar Carta\n3 - Sair"
  )
);
do {
  let cartasBaralho = "";

  switch (opcao) {
    case 1:
      let adicionarCarta = prompt("Digite a carta que deseja adicionar");
      baralho.push(adicionarCarta);

      for (let i = 0; baralho.length > i; i++) {
        cartasBaralho += " - " + baralho[i];
      }

      opcao = parseInt(
        prompt(
          "Cartas no baralho: " +
            cartasBaralho +
            "\n\nDigite abaixo o número de acordo com a opção desejada:\n1 - Adicionar carta\n2 - Puxar Carta\n3 - Sair"
        )
      );
      break;
    case 2:
      if (baralho.length > 0) {
        let cartaPuxada = baralho.pop();
        opcao = parseInt(
          prompt(
            "Carta puxada: " +
              cartaPuxada +
              "\n\nDigite abaixo o número de acordo com a opção desejada:\n1 - Adicionar carta\n2 - Puxar Carta\n3 - Sair"
          )
        );
      } else {
        alert("O baralho está vazio. Não há cartas para puxar.");
        opcao = parseInt(
          prompt(
            "Digite abaixo o número de acordo com a opção desejada:\n1 - Adicionar carta\n2 - Puxar Carta\n3 - Sair"
          )
        );
      }
      break;
    case 3:
      alert("O programa será encerrado");
      break;
    default:
      alert("Digite apenas a opção 1, 2 ou 3.");
      opcao = parseInt(
        prompt(
          "Digite abaixo o número de acordo com a opção desejada:\n1 - Adicionar carta\n2 - Puxar Carta\n3 - Sair"
        )
      );
  }
} while (opcao !== 3);
