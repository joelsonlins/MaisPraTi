// Exercícios combinados
// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.
const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade da pessoa: "));

let faixaEtaria;

if (idade >= 0 && idade <= 12) {
    faixaEtaria = "Criança";
} else if (idade >= 13 && idade <= 17) {
    faixaEtaria = "Adolescente";
} else if (idade >= 18 && idade <= 59) {
    faixaEtaria = "Adulto";
} else if (idade >= 60) {
    faixaEtaria = "Idoso";
} else {
    console.log("Idade inválida");
    return;
}

switch (faixaEtaria) {
    case "Criança":
        console.log("A pessoa é uma Criança.");
        break;
    case "Adolescente":
        console.log("A pessoa é um Adolescente.");
        break;
    case "Adulto":
        console.log("A pessoa é um Adulto.");
        break;
    case "Idoso":
        console.log("A pessoa é um Idoso.");
        break;
    default:
        console.log("Faixa etária não reconhecida.");
        break;
}