// let teste = function () {
//   console.log("Olá, mundo!");
// };

// teste();

// function showFunction(successCallback, errorCallback) {
//   if (true) {
//     successCallback("Requisição bem Sucedida!");
//   } else {
//     errorCallback("Erro na requisição!");
//   }
// }
// let successCallback = function (message) {
//   console.log(message);
// };
// let errorCallback = function (message) {
//   console.error(message);
// };
// showFunction(successCallback, errorCallback)

// 1. Soma dos Elementos de um Array

// Escreva uma função que receba um arrau de números como parâmetro
// e retorne a soma de todos os elementos.
// function somaArray(arr) {
//   let soma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     soma += arr[i];
//   }
//   return soma;
// }
// console.log(somaArray([1, 2, 3, 4, 5]))

// 2. Encontre o Maior número em um Array

// function maiorNumero(arr) {
//   let maior = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maior) {
//       maior = arr[i];
//     }
//   }
//   return maior;
// }
// console.log(maiorNumero([10, 20, 30, 40, 50]));

// 3. Reverter um array
// function reverteArray(arr) {
//   let novoArray = [];
//   for (let i = arr.length - 1; i >= 0; i--)
//   {
//     novoArray.push(arr[i]);
//   }
//   return novoArray;
// }
// console.log(reverteArray([1, 2, 3, 4, 5]))

// 4. Crie um novo array contendo apenas os números pares
// function paresArray(arr) {
//   let novoArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       novoArray.push(arr[i]);
//     }
//   }
//   return novoArray;
// }
// console.log(paresArray([10, 20, 35, 40, 55, 60]))

// 5. Contar Ocorrências de um valor na array
// function contarOcorrencias(arr, valor) {
//   let contagem = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === valor) {
//       contagem++;
//     }
//   }
//   return contagem;
// }
// console.log(contarOcorrencias([20, 10, 30, 40, 55, 10, 10, 10], 10))

// let nome = "Jaques";

// console.log("Jaques".length)
// console.log("Jaques".charAt)
// console.log(nome.indexOf('q'))
// console.log(nome.replace('Ja','Ca'))
// console.log(nome.substr(7,8))
// console.log(nome.toLocaleUpperCase())
// console.log(nome.toLowerCase())

// console.log('-' + nome.trim()+'-')

//matematicos

// console.log(Math.ceil(100.73))
// console.log(Math.floor(100.73))
// console.log(Math.round(100.73))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(16))
// console.log(Math.abs(-10))
// console.log(Math.max(10,20,30,40,50))
// console.log(Math.min(10,20,30,40,50))
// console.log(Math.random())
// console.log(Math.cbrt(100))

//datas

// let date = new Date();
// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())

// date.setDate(date.getDate() + 720)
// console.log(date)
// console.log(date.toLocaleString('pt-BR'))

// // 1. Escreva uma função que inverta uma string

// function inverterString(str) {
//   let stringInvertida = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     stringInvertida += str[i];
//   }
//   return stringInvertida;
// }

// console.log(inverterString("Carro")); 

// // console.log(inverterString("Jaques"));

// // // 2. Escreva uma função que conte as vogais de uma string
// function contarVogais(str) {
//   let vogais = "aeiouAEIOU";
//   let cont = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vogais.includes(str[i])) {
//       cont++;
//     }
//   }
//   return cont;
// }
// console.log(contarVogais("Jaques"));


// // 3. Crie um função que gere números aleatório
// function gerarNumerosAleatorios(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(gerarNumerosAleatorios(1, 100));



// // 4. crie uma função que diga quantos dias tem entre duas datas
// function contarDiasEntreDatas(data1, data2) {
//   let data1Formatada = new Date(data1);
//   let data2Formatada = new Date(data2);
//   let diferencaEmMilissegundos = Math.abs(data2Formatada - data1Formatada);
//   let diferencaEmDias = Math.floor(
//     diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
//   );
//   return diferencaEmDias;
// }
// console.log(contarDiasEntreDatas("2022-01-01", "2024-01-01"));

// // 5. Crie uma função que formate uma data
// function formatarData(data) {

//   let dataFormatada = new Date(data);


//   let dia = dataFormatada.getDate();
//   if (dia < 10) {
//     dia = '0' + dia; 
//   }

//   let mes = dataFormatada.getMonth() + 1;
//   if (mes < 10) {
//     mes = '0' + mes; 
//   }

//   let ano = dataFormatada.getFullYear();
//   return dia + '/' + mes + '/' + ano;
// }
// console.log(formatarData("2024-08-07")); 

