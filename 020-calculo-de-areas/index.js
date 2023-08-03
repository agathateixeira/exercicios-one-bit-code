//funcao para exibir menu
let menu = function () {
  return parseInt(
    prompt(
      "Insira um número de 1 a 5 para calcular a área e" +
        "\n6 para sair do programa:" +
        "\n1 - Triângulo" +
        "\n2 - Retângulo" +
        "\n3 - Quadrado" +
        "\n4 - Trapézio" +
        "\n5 - Círculo" +
        "\n6 - Sair"
    )
  );
};

//function p calcular area triangulo
let areaTriangulo = function () {
  const base = parseInt(prompt("Insira o valor da base"));
  const altura = parseInt(prompt("Insira o valor da altura"));
  const area = (base * altura) / 2;
  return area;
};

//function p calcular area retangulo
let areaRetangulo = function () {
  const base = parseInt(prompt("Insira o valor da base"));
  const altura = parseInt(prompt("Insira o valor da altura"));
  const area = base * altura;
  return area;
};

//function p calcular area quadrado
let areaQuadrado = function () {
  const lado = parseInt(prompt("Insira o valor do lado"));
  const area = lado * lado;
  return area;
};

//function p calcular area trapezio
let areaTrapezio = function () {
  const baseMaior = parseInt(prompt("Insira o valor da base maior"));
  const baseMenor = parseInt(prompt("Insira o valor da base menor"));
  const altura = parseInt(prompt("Insira o valor da altura"));
  const area = ((baseMaior + baseMenor) * altura) / 2;
  return area;
};

//function p calcular area do circulo
let areaCirculo = function () {
  const pi = 3.14;
  const raio = parseInt(prompt("Insira o valor do raio"));
  const area = pi * (raio * raio);
  return area;
};

//function para rodar o programa
const programa = function () {
  let option = "";
  do {
    option = menu();
    switch (option) {
      case 1:
        alert("Área do Triângulo = " + areaTriangulo());
        break;
      case 2:
        alert("Área do Retângulo = " + areaRetangulo());
        break;
      case 3:
        alert("Área do Quadrado = " + areaQuadrado());
        break;
      case 4:
        alert("Área do Trapezio = " + areaTrapezio());
        break;
      case 5:
        alert("Área do Círculo = " + areaCirculo());
        break;
      case 6:
        alert("Obrigado por usar a calculadora de áreas!" + "\nSaindo...");
        break;
      default:
        alert("Insira uma opção válida!");
        break;
    }
  } while (option !== 6);
};

programa();
