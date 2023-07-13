const imoveisCadastrados = [];

let opcaoMenu = parseInt(
  prompt(
    "Imóveis Cadastrados = 0\nDigite o número desejado:\n1-Novo Imóvel\n2-Imóveis Cadastrados\n3-Sair"
  )
);

do {
  switch (opcaoMenu) {
    case 1:
      const novoImovel = {};
      novoImovel.nomeProprietario = prompt(
        "Digite o nome do proprietário do imóvel:"
      );
      novoImovel.quantidadeQuartos = prompt(
        "Digite a quantidade de quartos no imóvel:"
      );
      novoImovel.quantidadeBanheiros = prompt(
        "Digite a quantidade de banheiros no imóvel:"
      );
      novoImovel.garagem = confirm("O imóvel possui garagem?");

      if (novoImovel.garagem) {
        novoImovel.garagem = "Sim";
      } else {
        novoImovel.garagem = "Não";
      }

      imoveisCadastrados.push(novoImovel);
      break;
    case 2:
      if (imoveisCadastrados.length === 0) {
        opcaoMenu = parseInt(
          prompt(
            "Imóveis Cadastrados = " +
              imoveisCadastrados.length +
              "\nDigite o número desejado:\n1-Novo Imóvel\n2-Imóveis Cadastrados\n3-Sair"
          )
        );
      } else {
        for (let i = 0; i < imoveisCadastrados.length; i++) {
          alert(
            "Imóvel " +
              (i + 1) +
              ":" +
              "\nNome do Proprietário: " +
              imoveisCadastrados[i].nomeProprietario +
              "\nQuantidade de Quartos: " +
              imoveisCadastrados[i].quantidadeQuartos +
              "\nQuantidade de Banheiros: " +
              imoveisCadastrados[i].quantidadeBanheiros +
              "\nPossui Garagem: " +
              imoveisCadastrados[i].garagem
          );
        }
      }

      break;
    case 3:
      alert("Encerrando o programa.");
      break;
    default:
      alert("Digite apenas os números 1, 2 ou 3.");
  }
  opcaoMenu = parseInt(
    prompt(
      "Imóveis Cadastrados = " +
        imoveisCadastrados.length +
        "\nDigite o número desejado:\n1-Novo Imóvel\n2-Imóveis Cadastrados\n3-Sair"
    )
  );
} while (opcaoMenu !== 3);
