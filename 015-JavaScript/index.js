let option = parseInt(
  prompt(
    "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
  )
);
do {
  switch (option) {
    case 1:
      function calcularAreaTriangulo() {
        const base = parseInt(prompt("Insira o tamanho da base"));
        const altura = parseInt(prompt("Insira o tamanho da altura"));

        return (base * altura) / 2;
      }
      alert("Área do triângulo = " + calcularAreaTriangulo());
      option = parseInt(
        prompt(
          "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
        )
      );
      break;
    case 2:
      function calcularAreaRetangulo() {
        const base = parseInt(prompt("Insira o tamanho da base"));
        const altura = parseInt(prompt("Insira o tamanho da altura"));

        return base * altura;
      }
      alert("Área do retângulo = " + calcularAreaRetangulo());
      option = parseInt(
        prompt(
          "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
        )
      );
      break;
    case 3:
      function calcularAreaQuadrado() {
        const lado = parseInt(prompt("Insira o tamanho do lado"));

        return lado * lado;
      }
      alert("Área do quadrado = " + calcularAreaQuadrado());
      option = parseInt(
        prompt(
          "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
        )
      );
      break;
    case 4:
      function calcularAreaTrapezio() {
        const baseMaior = parseInt(prompt("Insira o tamanho da base maior"));
        const baseMenor = parseInt(prompt("Insira o tamanho da base menor"));
        const altura = parseInt(prompt("Insira o tamanho da altura"));

        return ((baseMaior + baseMenor) * altura) / 2;
      }
      alert("Área do trapézio = " + calcularAreaTrapezio());
      option = parseInt(
        prompt(
          "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
        )
      );
      break;
    case 5:
      function calcularAreaCirculo() {
        const raio = parseInt(prompt("Insira o tamanho do raio"));
        const pi = 3.14;

        return pi * (raio * raio);
      }
      alert("Área do Círculo = " + calcularAreaCirculo());
      option = parseInt(
        prompt(
          "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
        )
      );
      break;
    case 6:
      alert("Saindo...");
      break;
    default:
      alert("Insira uma opção válida!");
      option = parseInt(
        prompt(
          "Insira o número correspondente para calcular a área: \n1 - Triângulo\n2 - Retânguolo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
        )
      );
  }
} while (option !== 6);
