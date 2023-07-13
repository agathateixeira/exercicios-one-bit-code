const listaPacientes = [];
let opcao = parseInt(
  prompt(
    "Pacientes em espera = " +
      listaPacientes.length +
      "\nDigite o número correspondente a opção desejada: \n1-Novo Paciente \n2-Consultar Paciente \n3-Sair"
  )
);

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
