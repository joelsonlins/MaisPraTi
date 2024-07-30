const prompt = require("prompt-sync")();

//<variavel>; <condição>; <incremento>
// let multiplier = Number(prompt('Informe o número que você quer saber a tabuada: '))

// for (let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }

//Imprimir os valores pares entre 1 e 20
// for (let i = 0; i <= 20; i += 2){
//     console.log(i)
// }

//Calcular a soma dos números de 1 a 100
// let soma = 0
// for (let i = 1; i <=100; i++ ){
//     soma += i
// }
// console.log(soma)

// //Imprima os valores de 1 até 10 em ordem decrescente.

// for(let i = 10; i >= 1; i--){
// console.log(i)
// }

// let j = 10

// while(j > 0){
//     console.log(j)
//     j--
// }

//exercício - Calcular a soma dos números de 1 a 100

// let j = 1;
// soma = 0;
// while(j <=100){
//     soma += j
//     j++
// }

// console.log(soma)

//Exercício
//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números
// let quant = 0;
// let option
// let sum = 0;
// while (option != 0) {
//   option = Number(prompt("Digite um número decimal ou 0 para sair: "));
//   if ((option>=0) && (option<1)){
//   sum += option;
//   quant += 1;
// }
// }

// let media = sum / (quant-1);
// console.log(media);


// do {

// }while(){

// }

// Solicitar números ao usuário até que ele insira um valor negativo
// let number;

// do {

//     number = parseFloat(prompt("Por favor, insira um número (insira um valor negativo para parar):"));

// } while (number >= 0);


// Exercício
// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let count = 0; 
let num = 101;

do {
    let primo = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            primo++;
        }
    }

    if (primo === 2) {
        console.log(num);
        count++;
    }

    num++;
} while (count < 50); 
