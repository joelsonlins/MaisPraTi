// Calcule o fatorial de um número

// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

const prompt = require("prompt-sync")();

let num = Number(prompt("Informe um número para calcular o fatorial: "))
let fatorial=1
for (let i = 1; i <= num; i++){
    fatorial*=i
}
console.log("O fatorial de ",num,"é igual a: ",fatorial)