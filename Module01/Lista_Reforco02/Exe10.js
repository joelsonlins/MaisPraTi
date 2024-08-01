// Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.


const prompt = require("prompt-sync")();

// let num1 = Number(prompt('Digite o primeiro número: '));
// let num2 = Number(prompt('Digite o segundo número: '));

let num1 = 56
let num2 = 98

let a = num1
let b = num2

do{
    let temp = b
    b = a%b
    a = temp
}while(b!==0)

    const MDC = a

console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)