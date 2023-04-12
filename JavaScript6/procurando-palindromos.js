const word = prompt("Informe a palavra:");
let leftWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  leftWord += word[i];
}

if (word === leftWord) {
  alert("A palavra é um palíndromo! :) \n\n" + word + " é igual a " + leftWord);
} else {
  alert(
    "A palavra NÃO é um palíndromo! :(\n\n" +
      word +
      " é diferente de " +
      leftWord
  );
}
