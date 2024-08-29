/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/
const prompt = require("prompt-sync")();
let soma = 0;
let cont = 0;
let num  = 1;
while (num != 0) {
  num = parseFloat(prompt("Digite um número decimal(0 para sair): "));
  if (num != 0) {
    soma += num;
    cont++;
  }
}
let media = soma / cont;
console.log(`A média dos números digitados é: ${media}`);
