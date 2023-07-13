<<<<<<< HEAD
let listaPacientes = [];
let posicao = 1;
let listaOrdenada = "";

let opcao = prompt(
  "Sem pacientes na fila de atendimento \n" +
    "\nDigite a letra para a opção desejada: \n\n N - Novo Paciente \n S - Sair"
=======
const listaPacientes = [];
let opcao = parseInt(
  prompt(
    "Pacientes em espera = " +
      listaPacientes.length +
      "\nDigite o número correspondente a opção desejada: \n1-Novo Paciente \n2-Consultar Paciente \n3-Sair"
  )
>>>>>>> to-studies
);
let nomePaciente = "";
while (opcao === "C" || opcao === "N") {
  if (opcao === "N") {
    nomePaciente = prompt(
      "Insira o nome do paciente para inserir na fila de atendimento"
    );

<<<<<<< HEAD
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
=======
do {
  let filaPacientes = "";
  switch (opcao) {
    case 1:
      let nomePaciente = prompt(
        "Digite o nome do novo paciente para entrar na fila"
      );
      listaPacientes.push(nomePaciente);

      for (let i = 0; i < listaPacientes.length; i++) {
        filaPacientes += i + 1 + "º - " + listaPacientes[i] + "\n";
      }
      opcao = parseInt(
        prompt(
          filaPacientes +
            "\nDigite o número correspondente a opção desejada: \n1-Novo Paciente \n2-Consultar Paciente \n3-Sair"
        )
      );

      break;
    case 2:
      if (listaPacientes.length > 0) {
        let consultarPaciente = listaPacientes.shift();
        for (let i = 0; i < listaPacientes.length; i++) {
          filaPacientes += i + 1 + "º - " + listaPacientes[i] + "\n";
        }
        opcao = parseInt(
          prompt(
            "Paciente consultado: " +
              consultarPaciente +
              "\n" +
              filaPacientes +
              "\nDigite o número correspondente a opção desejada: \n1-Novo Paciente \n2-Consultar Paciente \n3-Sair"
          )
        );
      } else {
        opcao = parseInt(
          prompt(
            "Pacientes em espera = " +
              listaPacientes.length +
              "\nDigite o número correspondente a opção desejada: \n1-Novo Paciente \n3-Sair"
          )
        );
      }

      break;
    case 3:
      alert("Encerrando o sistema...");
      break;
    default:
      alert("");
  }
} while (opcao !== 3);
>>>>>>> to-studies
