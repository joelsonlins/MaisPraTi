const prompt = require('prompt-sync')();
// console.log(10>5)
// console.log(10<5)
// console.log(10<=5)
// console.log(10>=5)
// console.log(10 == 5)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != '10')
// console.log(10 !== '10')

// operadores lógicos

// console.log((10 < 5 ) && (10 > 2))
// console.log((10 > 5 ) || (10 < 2))
// console.log((10 > 5 ) || !(10 < 2))
// console.log(!(10 > 5 ) || (10 < 2))

// let usuario = 'Joelson'
// let senha = 12345
// let altentica = (usuario === 'Joelson') && (senha === 12345)

// console.log(altentica)

// const grade = 40

// if (grade >=60){
//     console.log('APROVADO')
// }

// if (grade >=60){
//     console.log('APROVADO')
// }else{
//     console.log('REPROVADO')
// }

// console.log('Fim do código')

// const idade = 23

// if ((idade >= 18) && (idade <= 32)){
//     console.log('Apto a participar')
// } else{
//     console.log('Não é apto a participar')
// }


// <condição> ? <verdadeiro> : <falso>


// // Exercício 01
// let num = 3

// if (num%2 === 0){
//     console.log('O número é par')
// }else {
//     console.log('O número é ímpar')
// }

// // Exercício 2
// let num1 = 1
// let num2 = 5
// let num3 = 4

// if ((num1 > num2) && (num1 > num3)){
//     console.log('O maior número é o ' + num1)
// } else if ((num2> num1) && (num2 > num3)){
//     console.log('O maior número é o ' + num2)
// } else {
//     console.log('O maior número é o ' + num3)
// }

// // Exercicio 3


// let number01 = 1
// let number02 = 2
// let calc = 

// if (calc === 1) {
//     console.log(number01 + number02)
// } else if (calc === 2){
//     console.log(number01 - number02)
// }else if (calc === 3){
//     console.log(number01 * number02)
// }else if (calc === 4){
//     if (num2 !== 0){
//         console.log(number01 / number02)
//     } else {
//         console.log('Não é possível dividir por zero')
//     }
// }else{
//     console.log('Opção inválida')
// }



// //resposta 2
// let number01 = parseInt(prompt("Digite o primeiro número: "));
// let number02 = parseInt(prompt("Digite o segundo número: "));
// let calc = parseInt(prompt("Qual operação matemática deseja aplicar. [1]-Soma [2]-Subtração [3]-Multiplicação [4]-Divisão"));

// if (isNaN(number01) || isNaN(number02) || isNaN(calc)) {
//     console.log("Por favor, insira números válidos.");
// } else {
//     if (calc === 1) {
//         console.log("Resultado: " + (number01 + number02));
//     } else if (calc === 2) {
//         console.log("Resultado: " + (number01 - number02));
//     } else if (calc === 3) {
//         console.log("Resultado: " + (number01 * number02));
//     } else if (calc === 4) {
//         if (number02 !== 0) {
//             console.log("Resultado: " + (number01 / number02));
//         } else {
//             console.log("Erro: Divisão por zero.");
//         }
//     } else {
//         console.log("Operação inválida. Escolha [1]-Soma, [2]-Subtração, [3]-Multiplicação, ou [4]-Divisão.");
//     }
// }
// let option = 1

// switch(option){
//     case 1:
//         console.log('primeira ')
//         break
//     case 2:
//         console.log('segundo')
//         break
//     default:
//         console.log('default')
// }

// exercícios:

// Exercício 1: Verifiquem o dia da semana com a estrutura switch-case


// let diaDaSemana = Number(prompt("Digite o dia da semana(De 1 até 7): "))

// switch (diaDaSemana) {
//     case 1:
//         console.log("Domingo")
//         break
//     case 2:
//         console.log("Segunda-Feira")
//         break
//     case 3:
//         console.log("Terça-Feira")
//         break
//     case 4:
//         console.log("Quarta-Feira")
//         break
//     case 5:
//         console.log("Quinta-Feira")
//         break
//     case 6:
//         console.log("Sexta-Feira")
//         break
//     case 7:
//         console.log("Sábado")
//         break
//     default:
//         console.log("Dia inválido")
// }

// Exercício 2: Calcular o número de dias em um mês.

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias

// let diasNoMes = Number(prompt("Digite o número do mês(De 1 até 12): "))

// switch(diasNoMes){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("O mês tem 31 dias")
//         break
//     case 4:
//     case 6: 
//     case 9:
//     case 11:
//         console.log("O mês tem 30 dias")
//         break
//     case 2:
//         console.log("O mês tem 28 dias")
//         break
//     default:
//         console.log("Mês inválido")
// }

// Exercício 3: calculadora simples
// descrição: escreva um programa que implemente uma calculadora simples com a operação de adição, subtração, multiplicação e divisão

// let number01 = Number(prompt("Digite o primeiro número: "));
// let number02 = Number(prompt("Digite o segundo número: "));
// let calc = parseInt(prompt("Qual operação matemática deseja aplicar. [1]-Soma [2]-Subtração [3]-Multiplicação [4]-Divisão"));

// switch(calc){
//     case 1:
//         console.log(number01 + number02)
//         break
//     case 2:
//         console.log(number01 - number02)
//         break
//     case 3:
//         console.log(number01 * number02)
//         break
//     case 4:
//         console.log(number01 / number02)
//         break
//     default:
//         console.log("Operação inválida")

// }


