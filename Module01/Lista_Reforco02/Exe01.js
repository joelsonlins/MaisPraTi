const prompt = require("prompt-sync")();

// Exercícios com 'for'

// 1 - Imprima a sequência de Fibonacci até o 10º termo

// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

let n1 = 0
let n2 = 1
console.log(n1)
console.log(n2)

for (let i=1; i <=8; i++){
    let n3 = n1 + n2
    console.log(n3)
    n1 = n2
    n2 = n3
}