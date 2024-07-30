// Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.


const prompt = require("prompt-sync")();

let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));


if (num1 <= 0 || num2 <= 0) {
    console.log('Os números devem ser positivos.');
} else {
    let maior, menor;
    
    if (num1 > num2) {
        maior = num1;
        menor = num2;
    } else {
        maior = num2;
        menor = num1;
    }

    do {
        let diferenca = maior - menor;
        maior = menor;
        menor = diferenca;

        if (menor > maior) {
            let temp = maior;
            maior = menor;
            menor = temp;
        }
    } while (menor > 0);

    console.log('O maior divisor comum é:', maior);
}
