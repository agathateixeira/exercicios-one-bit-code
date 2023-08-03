let listaPacientes = [];
let posicao = 1;
let listaOrdenada = "";

let opcao = prompt(
  "Sem pacientes na fila de atendimento \n" +
    "\nDigite a letra para a opção desejada: \n\n N - Novo Paciente \n S - Sair"
);
let nomePaciente = "";
while (opcao === "C" || opcao === "N") {
  if (opcao === "N") {
    nomePaciente = prompt(
      "Insira o nome do paciente para inserir na fila de atendimento"
    );

    listaPacientes.push(nomePaciente);
    listaOrdenada = "";
    posicao = 1;

    for (let i = 0; i < listaPacientes.length; i++) {
      listaOrdenada += posicao + "ª - " + listaPacientes[i] + "\n";
      posicao++;
    }

    opcao = prompt(
      "Ordem de atendimento: \n" +
        listaOrdenada +
        "\nDigite a letra para a opção desejada: \n\n N - Novo Paciente \n C - Consultar Paciente \n S - Sair"
    );
  } else if (opcao === "C") {
    let pacienteConsultado = listaPacientes.shift(nomePaciente);
    listaOrdenada = "";
    posicao = 1;

    for (let i = 0; i < listaPacientes.length; i++) {
      listaOrdenada += posicao + "ª - " + listaPacientes[i] + "\n";
      posicao++;
    }
    if (listaPacientes.length === 0) {
      opcao = prompt(
        "Sem pacientes na fila de atendimento \n" +
          "\nDigite a letra para a opção desejada: \n\n N - Novo Paciente \n S - Sair"
      );
    } else {
      opcao = prompt(
        "Paciente consultado: " +
          pacienteConsultado +
          "\nOrdem de atendimento: \n" +
          listaOrdenada +
          "\nDigite a letra para a opção desejada: \n\n N - Novo Paciente \n C - Consultar Paciente \n S - Sair"
      );
    }
  }
}

if (opcao === "S") {
  alert("O programa será encerrado");
} else {
  alert("Escolha somente opções válidas: 'N', 'C' ou 'S'");
}
