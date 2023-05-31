// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O
// programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
// esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O
// menu também deve permitir escolher entre as opções de
// “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente),
//  “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado,
//  e “Sair”. O programa só deve ser
// encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let listaPacientes = ["Ana", "Pedro", "Jordana", "Camila"];
let pacientesOrdenados = "";
let posição = 1;

for (let i = 0; i < listaPacientes.length; i++) {
  pacientesOrdenados += posição + " - " + listaPacientes[i] + "\n ";
  posição++;
}

let option = prompt(
  "Ordem de atendimento: \n" +
    pacientesOrdenados +
    "\nDigite a letra para a opção desejada: \n N - Novo Paciente \n C - Consultar Paciente \n S - Sair"
);

while (option === "N") {
  let nomePaciente = prompt("Insira o nome do paciente para inserir na lista:");
  listaPacientes.push(nomePaciente);
  pacientesOrdenados += posição + " - " + nomePaciente + "\n ";
  posição++;

  option = prompt(
    "Ordem de atendimento: \n" +
      pacientesOrdenados +
      "\nDigite a letra para a opção desejada: \n N - Novo Paciente \n C - Consultar Paciente \n S - Sair"
  );
}
while (option === "C") {
  const pacienteConsultado = listaPacientes.shift();
  posição = 1;
  pacientesOrdenados = "";

  for (let i = 0; i < listaPacientes.length; i++) {
    pacientesOrdenados += posição + " - " + listaPacientes[i] + "\n ";
    posição++;
  }

  option = prompt(
    "Próximo: " +
      pacienteConsultado +
      "\n" +
      pacienteConsultado +
      ", favor ir se consultar\n" +
      "Ordem de atendimento atualizado: \n" +
      pacientesOrdenados +
      "\nDigite a letra para a opção desejada: \n N - Novo Paciente \n C - Consultar Paciente \n S - Sair"
  );
}
if (option === "S") {
  alert("O programa será encerrado");
} else {
  alert("Escolha somente opções válidas: 'N', 'C' ou 'S'");
}
