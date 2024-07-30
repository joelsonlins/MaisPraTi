const prompt = require("prompt-sync")();

// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".

// Dica: Um número primo só é divisível por 1 e por ele mesmo.

let num= Number(prompt("Informe um número: "))
let primo = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        primo++;
    }
}

if (primo === 2) {
    console.log("O número ",num," é primo.");
}else{
    console.log("O número ",num," não é primo.");
}
