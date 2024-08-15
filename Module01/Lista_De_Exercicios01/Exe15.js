/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/
let sequenciaFibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  sequenciaFibonacci.push(
    sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2]
  );
}

console.log(sequenciaFibonacci);
