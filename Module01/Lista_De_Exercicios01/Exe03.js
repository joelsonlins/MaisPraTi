const prompt = require("prompt-sync")();
/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/
let nota = prompt("Digite a nota: ");
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 4) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
