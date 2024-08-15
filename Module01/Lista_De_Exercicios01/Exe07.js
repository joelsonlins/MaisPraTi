/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const prompt = require("prompt-sync")();
let quantidade = prompt("Quantas maçãs você comprou? ");
if (quantidade < 12) {
  let valor = quantidade * 0.3;
  console.log(`O valor total da compra é R$ ${valor.toFixed(2)}`);
} else {
  let valor = quantidade * 0.25;
  console.log(`O valor total da compra é R$ ${valor.toFixed(2)}`);
}
