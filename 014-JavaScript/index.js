//funcao para chamar menu
const menuOption = function () {
  let option = parseInt(
    prompt(
      "Quantidade de imóveis cadastrados: " +
        listaImoveis.length +
        "\nInsira um número de acordo com a opção desejada:" +
        "\n1 - Adicionar Imóvel" +
        "\n2 - Mostrar Imóveis" +
        "\n3 - Sair"
    )
  );
  return option;
};

//funcao para adicionar imovel
let garagem = "";
const adicionarImovel = function () {
  const imovelCaracteristicas = {
    nomeProprietario: prompt("Insira o nome do proprietario"),
    quantidadeQuarto: prompt("Insira a quantidade de quartos"),
    quantidadeBanheiro: prompt("Insira a quantidade de banheiros"),
    possuiGaragem: confirm("O imóvel possui garagem?"),
  };
  garagem = imovelCaracteristicas.possuiGaragem;
  if (garagem) {
    imovelCaracteristicas.possuiGaragem = "Sim";
  } else {
    imovelCaracteristicas.possuiGaragem = "Não";
  }

  return imovelCaracteristicas;
};

//funcao para mostrar imoveis cadastrados
function imoveisCadastrados() {
  let mensagem = "Imóveis cadastrados: ";
  for (let i = 0; i < listaImoveis.length; i++) {
    const imovel = listaImoveis[i];
    mensagem +=
      "\nImovel " +
      (i + 1) +
      "\nNome do Proprietário: " +
      imovel.nomeProprietario +
      "\nQuantidade de Quartos: " +
      imovel.quantidadeQuarto +
      "\nQuantidade de Banheiros: " +
      imovel.quantidadeBanheiro +
      "\nPossui Garagem? " +
      imovel.possuiGaragem +
      "\n\n";
  }
  alert(mensagem);
}
// estrurura para rodar o sistema
let option;
let listaImoveis = [];
do {
  option = menuOption();

  switch (option) {
    case 1:
      const novoImovel = adicionarImovel();
      listaImoveis.push(novoImovel);
      break;
    case 2:
      imoveisCadastrados();
      break;
    case 3:
      alert("Saindo...");
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (option !== 3);
