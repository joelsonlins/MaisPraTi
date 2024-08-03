const prompt = require("prompt-sync")();
// 1. Soma dos Elementos de um Array

// Escreva uma função que receba um arrau de números como parâmetro
// e retorne a soma de todos os elementos.

// let sum = 0;
// let arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);


// Encontrar o maior número de um array

// let arr = [10, 20, 30, 40];
// let numM = arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]>numM){
//     numM = arr[i];
//   }
// }
// console.log(numM)



// Reverter um Array
// let arr = [10, 20, 30, 40, 50];
// let revArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     revArr[revArr.length] = arr[i];
// }

// console.log(revArr);

// crie um novo array contendo apenas os números pares

// let arr = [10, 20, 35, 40, 55, 60];
// let arrPar = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arrPar.push(arr[i]);
//   }
// }

// console.log(arrPar);

// Contar as ocorrências de um valor
// let arr = [10, 20, 35, 40, 55, 60, 10];
// let ocorrencias = 0
// let valor = Number(prompt("Qual o valor para verificar: "))

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === valor) {
//     ocorrencias++
//   }
// }
// console.log("O valor aparece ",ocorrencias," vezes")

//arrays/vetores multidimencionais

// let matriz =[
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// // console.table(matriz)
// // console.log(matriz[0][1])
// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`);
//     }
// }


//Somar duas matrizes
// let matrizA =[
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// let matrizB =[
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ]
// let matrizC = []

// if(matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length){
//     throw new Error("Os arrays devem ter o mesmo tamanho.")
// }

// for(let i=0; i< matrizA.length; i++){
//     let somaLinha = []
//     for(let j=0; j<matrizB[i].length;j++){
//         somaLinha.push(matrizA[i][j]+matrizB[i][j])
//     }
//     matrizC.push(somaLinha)
// }
// console.table(matrizC)


// some a diagonal principal de uma matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i]
}
console.log(soma)