// Imprima um padrão de estrela decrescente

// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

// Dica: Utilize dois loops, um dentro do outro.

const prompt = require("prompt-sync")();

let linhas = Number(prompt('Digite o número de linhas para o padrão de estrelas decrescente: '));

do {
    let estrelas = '';  
    let j = 0;
    while (j < linhas) {
        estrelas += '*';  
        j++;
    }
    console.log(estrelas);
    linhas--; 
} while (linhas > 0);

