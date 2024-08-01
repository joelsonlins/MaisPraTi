// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo de números.

// Dica: Utilize dois loops for, um dentro do outro.
const prompt = require("prompt-sync")();

let linhasDoTriangulo = parseInt(prompt("Digite o número de linhas do triângulo: "));

for (let i = 1; i <= linhasDoTriangulo; i++) {
  let linha = " ";

  for (let j = 1; j <= i; j++) {
    linha += j + " ";
  }
  console.log(linha);
}